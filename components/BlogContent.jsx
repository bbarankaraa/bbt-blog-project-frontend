"use client"

import Image from "next/image"
import Link from "next/link"
import { AiTwotoneCalendar } from "react-icons/ai"
import { Button } from "./ui/button"
import { Trash } from "lucide-react"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import moment from "moment"
import { postService } from "@/services/postService"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import { UserContext } from "./UserContext"
moment.locale("tr")

const BlogContent = ({ blog }) => {
    const router = useRouter();
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const deletePost = (id) => {
        postService.deletePost(id);
        router.push("/blog")
    }

    const time = moment(blog?.createdAt)

    if (!blog) return <div className="p-20 text-center text-white">Yükleniyor...</div>

    return (
        <section className="container max-w-5xl py-12 px-4">
            <div className="text-center mb-12 space-y-4">
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
                    {blog.title}
                </h1>
                {currentUser?.role === "ADMIN" && (
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="cursor-pointer hover:scale-105 bg-red-500 text-white hover:bg-white hover:text-red-500">
                                <Trash />
                                <span>Blogu Sil</span>
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-foreground">
                            <DialogHeader>
                                <DialogTitle>Silmek istediğine emin misin?</DialogTitle>
                                <DialogDescription>Blog silme işlemi geri alınamaz</DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button
                                        className="bg-red-500 text-white hover:bg-white hover:text-red-500 cursor-pointer hover:scale-105"
                                        onClick={() => deletePost(blog.id)}
                                    >
                                        <Trash />
                                        <span>Eminim Sil</span>
                                    </Button>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                )}


                <div className="flex items-center justify-center gap-4 text-slate-500 text-sm font-medium">
                    <span className="flex items-center gap-1">
                        <AiTwotoneCalendar className="text-indigo-500" />
                        {time.format("DD MMMM YYYY")}
                    </span>
                    <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                    <Link href={`/user/${blog.author?.id}`} className="hover:text-indigo-400 transition-colors">
                        @{blog.author?.username}
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">
                <div className="relative w-full aspect-4/5 overflow-hidden shadow-2xl border border-white/5">
                    <Image
                        src={blog.image1Url || "https://picsum.photos/800/1000?random=1"}
                        alt="Featured image"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="flex flex-col h-full justify-center">
                    <div className="bg-slate-900/40 p-8 md:p-10 rounded-3xl border border-white/5 backdrop-blur-sm shadow-xl">
                        <p className="text-slate-200 leading-relaxed text-lg whitespace-pre-wrap font-light">
                            {blog.content}
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full mb-16">
                <div className="relative w-full h-80 md:h-125 overflow-hidden rounded-[3rem] shadow-2xl border border-white/5">
                    <Image
                        src={blog.image2Url || "https://picsum.photos/1200/600?random=2"}
                        alt="Secondary featured image"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 to-transparent" />
                </div>
                {blog.image2Caption && (
                    <p className="text-center text-slate-500 text-sm mt-4 italic">
                        {blog.image2Caption}
                    </p>
                )}
            </div>

            <div className="max-w-3xl mx-auto text-center border-t border-white/5 pt-12">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold text-lg transition-all hover:-translate-y-0.5"
                >
                    ← Yazı Listesine Dön
                </Link>
            </div>
        </section>
    )
}

export default BlogContent