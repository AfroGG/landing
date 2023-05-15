import { TypeAnimation } from "react-type-animation";

function Banner() {
    return (
        <div className="banner h-full">
            <h1 className="flex justify-center h-screen">
                <p className="text-2xl absolute bottom-48 tracking-widest">
                    Meme Pepe <span className="mx-10">+</span>
                    AI-generated <span className="mx-10">+</span>
                    Community <span className="mx-10">=</span> 
                    <span className="text-6xl align-middle">
                        <TypeAnimation
                            sequence={[
                                "PEPE",
                                1000,
                                "AIPEPE",
                                2000,
                            ]}
                            speed={1}
                        />
                    </span>
                </p>
            </h1>
        </div> 
    )
}

export default Banner;