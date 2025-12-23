"use client";

import { useEffect, useState } from "react";
import FirstBlog from "@/components/FirstBlog";
import OtherBlogs from "@/components/OtherBlogs";
import { postService } from "@/services/postService";

export default function BlogClient() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    postService.getAllPosts().then((data) => {
      setBlogs(data || []);
    });
  }, []);

  const firstBlog = blogs.length ? blogs[blogs.length - 1] : null;
  const otherBlogs = blogs.length ? blogs.slice(0, -1) : [];

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
        <div className="flex items-center justify-center h-96">
          <h3>Yükleniyor...</h3>
        </div>
      )}
    </main>
  );
}
