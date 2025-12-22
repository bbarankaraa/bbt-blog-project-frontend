"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiTwotoneCalendar } from 'react-icons/ai';
import moment from 'moment';
moment.locale("tr");

const OtherBlogs = ({ otherBlogs }) => {
  return (
    <>
        <section className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {otherBlogs.map((blog, index) => (
            <div className="group cursor-pointer" key={blog.id || index}>
              <Link href={`/blog/${blog.id}`}>
                <div className="flex flex-col h-full">
                  <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
                    <Image
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      src={blog?.image1Url ? blog.image1Url : "/demo.jpg"}
                      alt={blog?.title || "Blog Image"}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3 grow">
                    <div className="flex items-center gap-2 text-xs text-white font-medium">
                      <AiTwotoneCalendar className="text-blue-500" />
                      <span>{moment(blog.createdAt).format("DD MMMM YYYY")}</span>
                    </div>

                    <div className="space-y-2">
                      <h2 className="text-xl font-bold leading-tight text-white line-clamp-2">
                        {blog?.title}
                      </h2>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {blog?.content?.replace(/<[^>]*>?/gm, '').substring(0, 120)}...
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <div className="w-10 h-10 rounded-full bg-linear-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-sm border">
                        {blog?.author?.username?.charAt(0).toUpperCase() || "A"}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white">
                          {blog?.author?.username || "Anonim"}
                        </span>
                        <span className="text-[10px] text-gray-400 uppercase tracking-widest">Yazar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            ))}
          </div>
        </section>
      
    </>
  );
}

export default OtherBlogs;
