import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Posts, { loader as postsLoader } from "./routes/Posts";
import Post, { loader as postLoader } from "./routes/Post";
import Wrapper from "./routes/Wrapper";
import PostsError from "./components/PostsError";
import PostError from "./components/PostError";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Wrapper />}>
      <Route path="/posts" element={<Posts />} loader={postsLoader} errorElement={<PostsError />} />
      <Route path="/posts/:id" element={<Post />} loader={postLoader(queryClient)} errorElement={<PostError />} />
    </Route>
  )
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}

export default App;
