import React from "react";
import memesData from "../memesData";

export default function Meme() {
    return (
        <main>
            <div className="form">
                <input
                    className="form--input"
                    type="text"
                    placeholder="Top text"
                />
                <input
                    className="form--input"
                    type="text"
                    placeholder="Bottom text"
                />
                <button
                    className="form--button">
                    Get a new Meme Image
                </button>
            </div>
        </main>
    )
}