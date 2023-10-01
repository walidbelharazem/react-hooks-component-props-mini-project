import React from "react";
function TimeEmojis(minutes) {
    const coffee = "☕️";
    const box = "🍱";
    const emojis = [];

    if (minutes < 30) {
        let preMinutes = minutes;
        while (preMinutes > 0) {
            emojis.push(coffee);
            preMinutes -= 5;
        }
    } else {
        let preMinutes = minutes;
        while (preMinutes > 0) {
            emojis.push(box);
            preMinutes -= 10;
        }
    }

    return emojis.join("") + ` ${minutes} min read`;
}

export default function Article({title,date="January 1, 1970",preview,minutes}){
    const emoji = TimeEmojis(minutes);

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} {emoji}</small>
            <p>{preview} </p>
        </article>
    )
}
