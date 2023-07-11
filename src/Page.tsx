import React from 'react'

const Page = () => {
    return (
        <html>
            <head>
                <link rel="stylesheet" href="https://use.typekit.net/gin4aty.css" />
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="index.css" />
                <script src="index.js"></script>
            </head>
            <body id="BODY">
                <div className="nav" id="nav">
                    <div className="nav-closed">
                        <img className="pink-logo-no-text" src="assets/pink-amy-no-title.svg" />
                        <button onClick={() => {}}>
                            <span className="material-icons md-48" id="hamburger">
                                menu
                            </span>
                        </button>
                    </div>
                    <div className="menu" id="menu">
                        <div className="menuitem">Home</div>
                        <div className="menuitem">About Me</div>
                        <div className="menuitem">Page 1</div>
                    </div>
                </div>
                <div className="homepagecontainer">
                    <div className="black-letters row1" id="row1">
                        <img
                            className="black-letter-child"
                            src="assets/Amy Design and Photo_black.png"
                        />
                        <img
                            className="black-letter-child"
                            src="assets/Amy Design and Photo_black.png"
                        />
                        <img
                            className="black-letter-child"
                            src="assets/Amy Design and Photo_black.png"
                        />
                        <img
                            className="black-letter-child"
                            src="assets/Amy Design and Photo_black.png"
                        />
                    </div>
                    <div className="black-letters row2" id="row2">
                        <img
                            className="black-letter-child"
                            src="assets/Amy Design and Photo_black.png"
                        />
                        <img
                            className="black-letter-child"
                            src="assets/Amy Design and Photo_black.png"
                        />
                        <img
                            className="black-letter-child"
                            src="assets/Amy Design and Photo_black.png"
                        />
                        <img
                            className="black-letter-child"
                            src="assets/Amy Design and Photo_black.png"
                        />
                    </div>
                    <img className="pink-logo" src="assets/Amy Design and Photo_color.png" />
                    <div className="black-letters row4" id="row4">
                        <img
                            className="black-letter-child"
                            src="assets/Amy Design and Photo_black.png"
                        />
                        <img
                            className="black-letter-child"
                            src="assets/Amy Design and Photo_black.png"
                        />
                        <img
                            className="black-letter-child"
                            src="assets/Amy Design and Photo_black.png"
                        />
                        <img
                            className="black-letter-child"
                            src="assets/Amy Design and Photo_black.png"
                        />
                    </div>
                    <div className="black-letters row5" id="row5">
                        <img
                            className="black-letter-child"
                            src="assets/Amy Design and Photo_black.png"
                        />
                        <img
                            className="black-letter-child"
                            src="assets/Amy Design and Photo_black.png"
                        />
                        <img
                            className="black-letter-child"
                            src="assets/Amy Design and Photo_black.png"
                        />
                        <img
                            className="black-letter-child"
                            src="assets/Amy Design and Photo_black.png"
                        />
                    </div>
                    <div className="black-letters row6" id="row6">
                        <img
                            className="black-letter-child"
                            src="assets/Amy Design and Photo_black.png"
                        />
                        <img
                            className="black-letter-child"
                            src="assets/Amy Design and Photo_black.png"
                        />
                        <img
                            className="black-letter-child"
                            src="assets/Amy Design and Photo_black.png"
                        />
                        <img
                            className="black-letter-child"
                            src="assets/Amy Design and Photo_black.png"
                        />
                    </div>
                </div>
                <img
                    id="homepagecontent"
                    src="assets/20211201_ATH_MBB vs BYU 2_IH_0538_Toned.jpg"
                    alt=""
                />
                <img
                    id="homepagecontent"
                    src="assets/20211201_ATH_MBB vs BYU 2_IH_0538_Toned.jpg"
                    alt=""
                />
                <img
                    id="homepagecontent"
                    src="assets/20211201_ATH_MBB vs BYU 2_IH_0538_Toned.jpg"
                    alt=""
                />
            </body>
        </html>
    )
}

export default Page
