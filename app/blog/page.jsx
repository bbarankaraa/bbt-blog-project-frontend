import BlogClient from "@/components/BlogClient";
import { postService } from "@/services/postService";

const BlogPage = async () => {
  const blogs = await postService.getAllPosts();

  const firstBlog = blogs && blogs[blogs.length - 1];
  const otherBlogs = blogs?.length > 0 && blogs.slice(0, -1);

  return <BlogClient firstBlog={firstBlog} otherBlogs={otherBlogs} />;
};

export default BlogPage;
