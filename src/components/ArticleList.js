import React from "react";
import Article from "./Article";
export default function ArticleList({posts}){
    const artcl = posts.map((art)=>(
         <Article title={art.title} date={art.date} preview={art.preview} key={art.id} minutes={art.minutes} />
    ))
    return (
        <main> {artcl} </main>
    )
}
