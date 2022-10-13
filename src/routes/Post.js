import axios from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const postQuery = (id) => ({
  queryKey: ["post", id],
  queryFn: async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await response.data;
    return post;
  },
  staleTime: Infinity,
});

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const query = postQuery(params.id);
    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
  };

export default function Post() {
  const params = useParams();

  const { data: post } = useQuery(postQuery(params.id));

  return (
    <>
      <h2>Post</h2>
      <h3>{post.title}</h3>
      <div>{post.body}</div>
    </>
  );
}
