"use client";

import Link from 'next/link'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast';
import { useContext, useEffect } from 'react'
import { UserContext } from "@/components/UserContext";

import { Menu } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

const Navbar = () => {
    const router = useRouter();
    const { currentUser, setCurrentUser } = useContext(UserContext);

    useEffect(() => {
        const saved = localStorage.getItem("user");
        if (saved) {
            try {
                setCurrentUser(JSON.parse(saved));
            } catch {
                localStorage.removeItem("user");
            }
        }

        const handleStorageUpdate = () => {
            const updated = localStorage.getItem("user");
            setCurrentUser(updated ? JSON.parse(updated) : null);
        };

        window.addEventListener("storageUpdate", handleStorageUpdate);
        return () => window.removeEventListener("storageUpdate", handleStorageUpdate);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.dispatchEvent(new Event("storageUpdate"));
        toast.success("Çıkış Yapıldı!");
        router.push("/login");
    };

    return (
        <div className="container py-4 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-wide">
                MAKÜ <span className="special-word">BBT</span>
            </Link>

            <ul className="hidden lg:flex items-center gap-6 font-medium">
                <li>
                    <Link className="hover:text-blue-400 duration-200" href="/blog">Blog Sayfası</Link>
                </li>

                {currentUser?.role === "ADMIN" && (
                    <li>
                        <Link className="hover:text-blue-400 duration-200" href="/create-blog">Blog Oluştur</Link>
                    </li>
                )}

                {currentUser ? (
                    <li>
                        <Avatar className="cursor-pointer">
                            <AvatarFallback>
                                {currentUser.username.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link className="hover:text-blue-400 duration-200" href="/login">Giriş</Link>
                        </li>
                        <li>
                            <Link className="hover:text-blue-400 duration-200" href="/register">Kaydol</Link>
                        </li>
                    </>
                )}
            </ul>

            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger>
                        <Menu className="w-7 h-7 cursor-pointer" />
                    </SheetTrigger>

                    <SheetContent side="left" className="px-6 py-10 bg-black/95 text-white">

                        <SheetHeader>
                            <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                        </SheetHeader>

                        <h2 className="text-2xl font-semibold mb-8">MENÜ</h2>

                        <div className="flex flex-col gap-6 text-lg">
                            <Link href="/blog" className="hover:text-blue-400">
                                Blog Sayfası
                            </Link>

                            {currentUser?.role === "ADMIN" && (
                                <Link href="/create-blog" className="hover:text-blue-400">
                                    Blog Oluştur
                                </Link>
                            )}

                            {currentUser ? (
                                <>
                                    <div className="flex items-center gap-3 mt-4">
                                        <Avatar>
                                            <AvatarFallback>
                                                {currentUser.username.slice(0, 2).toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                        <span className="text-xl font-medium">{currentUser.username}</span>
                                    </div>

                                    <button
                                        onClick={handleLogout}
                                        className="text-left text-red-400 mt-4 hover:text-red-300"
                                    >
                                        Çıkış Yap
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link href="/login" className="hover:text-blue-400">
                                        Giriş
                                    </Link>
                                    <Link href="/register" className="hover:text-blue-400">
                                        Kaydol
                                    </Link>
                                </>
                            )}
                        </div>

                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
};

export default Navbar;