import React from "react";
export default function About({image='https://via.placeholder.com/215',about}){
    return (
        <aside>
            <img alt="blog logo" src={image}></img>
            <p>{about}</p>
        </aside>
    )
}
