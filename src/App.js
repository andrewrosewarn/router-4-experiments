import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Posts, { loader as postsLoader } from "./routes/Posts";
import Post, { loader as postLoader } from "./routes/Post";
import Wrapper from "./routes/Wrapper";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Wrapper />}>
      <Route path="/posts" element={<Posts />} loader={postsLoader} />
      <Route path="/posts/:id" element={<Post />} loader={postLoader} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
