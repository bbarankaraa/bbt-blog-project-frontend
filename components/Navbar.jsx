"use client"
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast';
import { useContext, useEffect } from 'react'
import { UserContext } from "@/components/UserContext";

const Navbar = () => {
    const router = useRouter();
    const { currentUser, setCurrentUser } = useContext(UserContext);
    useEffect(() => {
        const saved = localStorage.getItem("user");
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (parsed && typeof parsed === "object") {
                    setCurrentUser(parsed);
                }
            } catch (error) {
                localStorage.removeItem("user");
            }
        }

        const handleStorageUpdate = () => {
            const updated = localStorage.getItem("user")
            setCurrentUser(updated ? JSON.parse(updated) : null)
        };

        window.addEventListener("storageUpdate", handleStorageUpdate)

        return () => {
            window.removeEventListener("storageUpdate", handleStorageUpdate)
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        window.dispatchEvent(new Event("storageUpdate"))
        toast.success('Çıkış Yapıldı!')
        router.push("/login")
    }

    return (
        <div className='container py-2 h-16 flex items-center justify-between'>
            <Link href="/">
                <h2 className=' '>MAKÜ <span className='special-word'>BBT</span></h2>
            </Link>
            <ul className='hidden lg:flex items-center gap-5'>
                <li className='hover:text-shadow-2xs hover:scale-105 duration-300'>
                    <Link href="/blog">Blog Sayfası</Link>
                </li>
                {currentUser?.role == "ADMIN" ? (<li className='hover:text-shadow-2xs hover:scale-105 duration-300'>
                    <Link href="/create-blog">Blog Oluştur</Link>
                </li>) : ""}
                {currentUser ? (
                    <li>
                        <div className='relative'>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar className={"cursor-pointer"}>
                                        <AvatarFallback>
                                            {currentUser.username.slice(0, 2).toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56" align="start">
                                    <DropdownMenuLabel>Hesabım</DropdownMenuLabel>
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem className={"cursor-pointer"}>
                                            <Link href={``}>
                                                Profil
                                            </Link>
                                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className={"cursor-pointer"}>
                                            Ayarlar
                                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className={"cursor-pointer"}>Linkedin</DropdownMenuItem>
                                    <DropdownMenuItem className={"cursor-pointer"}>İletişim</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className={"cursor-pointer"} onClick={() => { handleLogout() }}>
                                        Çıkış Yap
                                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </li>
                ) : (
                    <>
                        <li className='hover:text-shadow-2xs hover:scale-105 duration-300'>
                            <Link href="/login">Giriş</Link>
                        </li>
                        <li className='hover:text-shadow-2xs hover:scale-105 duration-300'>
                            <Link href="/register">Kaydol</Link>
                        </li>
                    </>

                )}
            </ul>
        </div >
    )
}

export default Navbar