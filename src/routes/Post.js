import axios from "axios";
import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";

export default function Post() {
  const data = useLoaderData();

  return (
    <>
      <h2>Post</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={data.data} errorElement={<div>Error fethcing post</div>}>
          {(post) => (
            <>
              <h3>{post.data.title}</h3>
              <div>{post.data.body}</div>
            </>
          )}
        </Await>
      </Suspense>
    </>
  );
}

export async function loader({ params }) {
  const postId = params.id;

  const response = axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  return defer({
    data: response,
  });
}
