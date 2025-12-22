"use client";

import { useEffect, useState } from "react";
import { userService } from "@/services/userService";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';
import Link from "next/link";

const LoginPage = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      toast('Zaten giriş yaptın!',
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

  const handleLogin = async () => {
    try {
      if (!form.username.trim() || !form.password.trim()) {
        throw new Error("Giriş yapmanız için boşlukları doldurmanız gerekmektedir!")
      }
      const user = await userService.login(form);
      localStorage.setItem("token", user.token);
      localStorage.setItem("user", JSON.stringify(user.user));
      window.dispatchEvent(new Event("storageUpdate"));
      toast.success("Giriş başarılı!")
      router.push("/blog")
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
   <div className="flex items-center justify-center min-h-screen px-4">
  <div className="w-full max-w-md bg-primary p-8 rounded-2xl shadow-xl border border-gray-100">
    <div className="text-center mb-10">
      <h1 className="text-3xl font-bold text-white tracking-tight">Hoş Geldiniz</h1>
      <p className="text-gray-500 mt-2">Devam etmek için lütfen giriş yapın</p>
    </div>

    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-white mb-2 ml-1">Kullanıcı Adı</label>
        <input
          type="text"
          placeholder=""
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white placeholder-gray-500"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-white mb-2 ml-1">Şifre</label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white placeholder-gray-500"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
    
      </div>

      <button 
        onClick={handleLogin} 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg  transition-all duration-300 active:scale-[0.98] cursor-pointer"
      >
        Giriş Yap
      </button>

      <p className="text-center text-gray-600 text-sm mt-6">
        Hesabınız yok mu? <Link href="/register" className="text-blue-600 font-semibold hover:underline">Kayıt Ol</Link>
      </p>
    </div>
  </div>
</div>
  );
};

export default LoginPage;
