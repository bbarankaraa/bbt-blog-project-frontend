"use client";

import FirstBlog from "@/components/FirstBlog";
import OtherBlogs from "@/components/OtherBlogs";

export default function BlogClient({ firstBlog, otherBlogs }) {

  return (
    <main>
      {firstBlog ? (
        <div className="container mx-auto">
          <h2 className="my-10">
            <span className="text-primaryColor">Blog</span> Sayfamız
          </h2>
          <FirstBlog firstBlog={firstBlog} />
          <OtherBlogs otherBlogs={otherBlogs} />
        </div>
      ) : (
        <div className="flex items-center justify-center h-96 ">
          <h3>Henüz blog paylaşmadık {":)"}</h3>
        </div>
      )}
    </main>
  );
}