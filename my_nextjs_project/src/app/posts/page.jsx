import PostCard from "@/components/PostCard";
import "./Posts.css";
export default async function PostsPage() {
  const posts = await LoadPosts();
  return (
    <div className="grid">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}

async function LoadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}
