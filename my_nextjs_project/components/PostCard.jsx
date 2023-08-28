import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <div className="bg-green-950 p-10">
      <Link href={`/posts/${post.id}`}>
        <h className="text-xl font-bold mb-9">
          {post.id}- {post.title}
        </h>
      </Link>
      <p className="text-slate-300">{post.body}</p>
    </div>
  );
}
