import React from "react";
let name = "Yahya";
export  default function MyButton() {
    return (
        <div>
            <button onClick={buttonClicked}>Click Me !</button>
            <p>{name}</p>
        </div>
    );
}

function buttonClicked({name}) {
   name = "Clicked !";
}