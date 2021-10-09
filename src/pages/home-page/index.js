// import { AddBlog } from "../../features/blog";
import { AddBlog, BlogList } from "features/blog";

export const HomePage = () => {
  return (
    <div>
      <div>
        <BlogList />
      </div>

      <AddBlog />
    </div>
  );
};
