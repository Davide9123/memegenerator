import React from "react";
import memesData from "../memesData";

export default function Meme() {
    // const [memeImage, setMemeImage]=React.useState("https://i.imgflip.com/1g8my4.jpg")

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)



    function getMemeImage() {

        const memesArray = allMemeImages.data.memes

        //!funzione per fare numeri randomici
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        // const url = memesArray[randomNumber].url

    }
    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))

    }
    return (
        <main>
            <div className="form">
                <input
                    className="form--input"
                    type="text"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    className="form--input"
                    type="text"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}

                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new Meme Image
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}