import React from "react";
const Article = ({url}) => {
  return (
    <>
      <div >
        <img src={url}></img>
      <div className="gpt_article">
      <p>
      Sep 26, 2021
      </p>  
      <h1>
      GPT-3 and Open  AI is the future. Let us exlore how it is?
      </h1>
      <p>
      Read Full Article
      </p>
      </div>
      </div>
    </>
  );
};

export default Article;
