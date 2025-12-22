import BlogContent from "@/components/BlogContent";
import { postService } from "@/services/postService";

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = await postService.getPostById(slug);
  console.log(blog.author.username)
  return (
    <main>
      <BlogContent blog={blog} />
    </main>
  );
}