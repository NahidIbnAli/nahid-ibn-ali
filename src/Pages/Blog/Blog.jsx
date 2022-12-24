import React, { useEffect } from "react";
import "./Blog.css";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex justify-center items-center text-center blogH">
      <h1 className="text-4xl font-semibold font-display">
        Blog will coming soon
      </h1>
    </section>
  );
};

export default Blog;
