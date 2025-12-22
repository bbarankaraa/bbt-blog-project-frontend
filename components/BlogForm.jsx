"use client"
import { useContext, useEffect, useState } from "react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { postService } from "@/services/postService"
import { UserContext } from "./UserContext"
import { useRouter } from "next/navigation"

const initialState = {
    title: "",
    description: "",
    image1Url: "",
    image2Url: ""
}

const BlogForm = () => {
    const [state, setState] = useState(initialState)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { currentUser } = useContext(UserContext);

    const router = useRouter();

    useEffect(() => {
        if(!currentUser?.role == "ADMIN")
        router.push("/blog")
    }, [])

    const handleChange = (e) => {
        setState(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setSuccess("")
        setIsLoading(true)

        try {
            const postObject = {
                title: state.title,
                content: state.description,
                image1Url: state.image1Url,
                image2Url: state.image2Url,
                author: { id: currentUser.id }
            }

            await postService.createPost(postObject)

            setSuccess("Gönderi başarıyla oluşturuldu!")
            setState(initialState)

        } catch (err) {
            setError(err.message)
            console.log("hata" + err)
        }
        setIsLoading(false)
    }

    return (
        <section className="container max-w-3xl">
            <h2 className="mb-5">Blog Oluştur</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                    label="Başlık"
                    type="text"
                    name="title"
                    placeholder="Başlık yaz"
                    onChange={handleChange}
                    value={state.title}
                />

                <Textarea
                    label="Açıklama"
                    rows={4}
                    name="description"
                    placeholder="Açıklama yaz"
                    onChange={handleChange}
                    value={state.description}
                />

                <Input
                    label="Görsel 1 URL"
                    type="text"
                    name="image1Url"
                    placeholder="1. Fotoğraf URL"
                    onChange={handleChange}
                    value={state.image1Url}
                />

                <Input
                    label="Görsel 2 URL"
                    type="text"
                    name="image2Url"
                    placeholder="2. Fotoğraf URL"
                    onChange={handleChange}
                    value={state.image2Url}
                />

                {error && <p className="text-red-600">{error}</p>}
                {success && <p className="text-green-600">{success}</p>}

                <button type="submit" className="btn w-full">
                    {isLoading ? "Yükleniyor..." : "Paylaş"}
                </button>
            </form>
        </section>
    )
}

export default BlogForm
