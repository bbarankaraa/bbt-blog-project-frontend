"use client";

import { useEffect, useState } from "react";
import { userService } from "@/services/userService";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';
import Link from "next/link";

const RegisterPage = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      toast('Zaten kayıt yaptın!',
        {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
      router.push("/blog")
    }

  }, [])

  const handleRegister = async () => {
    try {
      if (!form.username.trim() || !form.password.trim()) {
        throw new Error("Kayıt olmanız için boşlukları doldurmanız gerekmektedir!")
      }
      const user = await userService.register(form);
      localStorage.setItem("token", user.token);
      localStorage.setItem("user", JSON.stringify(user.user));

      window.dispatchEvent(new Event("storageUpdate"));
      toast.success("Kayıt başarılı! Yönlendiriliyorsunuz...");
      router.push("/blog")
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
  <div className="w-full max-w-md bg-primary p-8 rounded-2xl shadow-xl border border-gray-100">    
    <div className="text-center mb-10">
      <h1 className="text-3xl font-bold text-white tracking-tight">Hesap Oluştur</h1>
      <p className="text-gray-500 mt-2">Hızlıca kayıt olup aramıza katılın</p>
    </div>

    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-white mb-2 ml-1">Kullanıcı Adı</label>
        <input
          type="text"
          placeholder="Kullanıcı adınızı belirleyin"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white placeholder-gray-400 text-gray-900"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-white mb-2 ml-1">Şifre</label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white placeholder-gray-400 text-gray-900"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </div>

      <button
        onClick={handleRegister}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 active:scale-[0.98] cursor-pointer mt-2"
      >
        Kayıt Ol
      </button>
      <p className="text-center text-gray-500 text-sm mt-6">
        Zaten bir hesabınız var mı?{" "}
        <Link href="/login" className="text-blue-500 font-semibold hover:underline">
          Giriş Yap
        </Link>
      </p>
    </div>
  </div>
</div>
  );
};

export default RegisterPage;
