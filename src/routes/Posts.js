import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

export default function Posts() {
  const posts = useLoaderData();

  return (
    <>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`${post.id}`}> {post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function loader() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.data;

  return posts;
}
