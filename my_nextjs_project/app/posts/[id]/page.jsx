import PostsPage from "../page";
import { Suspense } from "react";

async function LoadPosts(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

export default async function page({ params }) {
  const post = await LoadPosts(params.id);

  return (
    <div>
      <h1>
        {post.id} {post.title}
      </h1>
      <p>{post.body}</p>
      <hr />
      <h2>Otros posts</h2>
      <Suspense fallback={<div>Loading ...</div>}>
        <PostsPage />
      </Suspense>
    </div>
  );
}
