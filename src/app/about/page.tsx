"use client"

import { useState } from "react"

export default function About() {

    const [text, setText] = useState("I'M OUT OF IDEAS SORRY")

    function newText() {
        setText('FUCK YOU!')
    }

    return (
        <section className="flex flex-col justify-center items-center p-12 h-screen bg-[#040b22] text-white">
            <h1 className="text-6xl">{text}</h1>
            <p>2 + 2 = {2+2}</p>
            <div>
                PRESS THIS BUTTON ➡ 
                <button onClick={() => newText()} className="border border-white rounded-md p-1">CLICK ME</button>
            </div>
        </section>
    )
}
