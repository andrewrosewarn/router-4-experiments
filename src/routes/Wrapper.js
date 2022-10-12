import { NavLink, Outlet } from "react-router-dom";

export default function Wrapper() {
  return (
    <div>
      <div>
        <h1>App</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </div>
      <Outlet />
    </div>
  );
}
