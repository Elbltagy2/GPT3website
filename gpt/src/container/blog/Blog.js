import React from "react";
import {
  blog0,
  blog1,
  blog2,
  blog3,
  blog4,
} from "../../component/article/import";
import { Article } from "../../component";
import "./blog.css";
const Blog = () => {
  return (
    <div className="gpt_blog" id="blog">
      <h1 className="gradient__text">
        A lot is happening,We are blogging about it.
      </h1>
      <div className="gpt_blog_articles">
        <div className="gpt_blog_group1">
          <Article url={blog0} />
        </div>
        <div className="gpt_blog_group2">
          <Article url={blog1} />
          <Article url={blog2} />
          <Article url={blog3} />
          <Article url={blog4} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
