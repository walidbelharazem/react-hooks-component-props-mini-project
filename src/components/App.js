import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

export default function App() {
  const { name, image, about, posts } = blogData;
  return (
    <div className="App">  
      <Header name={name}/>
      <About image={image} blog={about}/>
      <ArticleList posts={posts} />
    </div>
  );
}
