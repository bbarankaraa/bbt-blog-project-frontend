import moment from "moment"
import Image from "next/image"
import Link from "next/link"
import { AiTwotoneCalendar } from "react-icons/ai"
moment.locale("tr")

const FirstBlog = ({ firstBlog }) => {
    const time = moment(firstBlog?.createdAt)

    return (
        <section>
            <Link href={`/blog/${firstBlog?.id}`}>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full lg:w-2/5">
                        <Image
                            height={100}
                            width={100}
                            src={firstBlog?.image1Url ? firstBlog.image1Url : "/demo.jpg"}
                            alt={firstBlog?.title || "Blog Image"}
                            className="w-full h-96 object-cover rounded-lg"
                        />
                    </div>

                    <div className="w-full lg:w-3/5 space-y-5">
                        <div className="flex items-center gap-3 text-xs">
                            <p className="flex items-center gap-1 text-gray-500">
                                <AiTwotoneCalendar />
                                {time.format("DD MMMM YYYY")}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold">{firstBlog?.title}</h2>
                            <p className="text-gray-600 text-sm">
                                {firstBlog?.content?.substring(0, 150)}...
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                {firstBlog?.author?.username?.charAt(0).toUpperCase()}
                            </div>
                            <h6 className="text-xl font-medium">
                                {firstBlog?.author?.username ? firstBlog.author.username : "Anonim"}
                            </h6>
                        </div>
                    </div>
                </div>
            </Link>
        </section>
    )
}
export default FirstBlog