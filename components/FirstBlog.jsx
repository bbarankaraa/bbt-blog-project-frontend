import moment from "moment"
import Image from "next/image"
import Link from "next/link"
import { AiTwotoneCalendar } from "react-icons/ai"
moment.locale("tr")

const FirstBlog = ({ firstBlog }) => {
    const time = moment(firstBlog?.createdAt)

    return (
        <section className="py-4">
            <Link href={`/blog/${firstBlog?.id}`}>
                <div className="flex flex-col md:flex-row gap-10 border border-gray-600 rounded-3xl p-6 hover:scale-[1.01] hover:shadow-xl transition-all duration-300 cursor-pointer bg-black/20 backdrop-blur-sm">

                    {/* Image */}
                    <div className="w-full lg:w-2/5">
                        <Image
                            height={300}
                            width={300}
                            src={firstBlog?.image1Url ? firstBlog.image1Url : "/demo.jpg"}
                            alt={firstBlog?.title || "Blog Image"}
                            className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
                        />
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-3/5 flex flex-col justify-between space-y-6">

                        {/* Date */}
                        <div className="flex items-center gap-3">
                            <span className="flex items-center gap-2 text-sm px-4 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700 shadow-inner">
                                <AiTwotoneCalendar className="text-indigo-400" />
                                {time.format("DD MMMM YYYY")}
                            </span>
                        </div>

                        {/* Title & Description */}
                        <div className="space-y-3">
                            <h2 className="text-4xl font-extrabold leading-tight">
                                {firstBlog?.title}
                            </h2>

                            <p className="text-gray-400 text-base leading-relaxed">
                                {firstBlog?.content?.substring(0, 180)}...
                            </p>
                        </div>

                        {/* Author */}
                        <div className="flex items-center gap-4 mt-4">
                            <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white text-lg font-semibold shadow-md">
                                {firstBlog?.author?.username?.charAt(0).toUpperCase()}
                            </div>

                            <div>
                                <p className="text-gray-400 text-sm uppercase tracking-wider">Yazar:</p>
                                <h6 className="text-xl font-semibold">
                                    {firstBlog?.author?.username || "Anonim"}
                                </h6>
                            </div>
                        </div>

                    </div>
                </div>
            </Link>
        </section>
    )
}

export default FirstBlog