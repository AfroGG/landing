import { TypeAnimation } from 'react-type-animation';
import yo from '../assets/images/yo.png';
import darrow from '../assets/images/darrow.png';
import React from 'react';

function Info() {
    const [showInfoOne, setShowInfoOne] = React.useState(true)
    const onClickInfoOne = () => setShowInfoOne(!showInfoOne)
    const [showInfoTwo, setShowInfoTwo] = React.useState(false)
    const onClickInfoTwo = () => setShowInfoTwo(!showInfoTwo)
    const [showInfoThree, setShowInfoThree] = React.useState(false)
    const onClickInfoThree = () => setShowInfoThree(!showInfoThree)


    return (
        <div className="bg-dark lg:pt-16 pt-4">
            <div className="container mx-auto max-w-screen-lg">
                <div className="grid lg:grid-cols-5 grid-cols-1 gap-4 lg:text-base text-sm">

                    <div className="col-span-3 p-6 tracking-wider">
                        <p className="text-white">Yo, welcome to AIPepe!</p>

                        <p className="mt-4 text-white cursor-pointer" onClick={onClickInfoOne}>
                            What is AIPepe?
                            { showInfoOne ? null : <img src={darrow} className="inline ml-1 w-4 rotate-90 animate-pulse" /> }
                        </p>
                        { showInfoOne ? <p>
                          <TypeAnimation
                              sequence={[
                                "# We're the raddest, baddest meme coin on the blockchain, combining Pepe the Frog, AI, and degenerate finance. AIPepe is not your average crypto; we're here to disrupt the meme coin world. Everything you see here is 100% AI-generated!",
                                1000,
                              ]}
                              className="font-mono text-sm"
                          />
                        </p> : null }

                        <p className="mt-4 text-white cursor-pointer" onClick={onClickInfoTwo}>
                            Who is our creator?
                            { showInfoTwo ? null : <img src={darrow} className="inline ml-1 w-4 rotate-90 animate-pulse" /> }
                        </p>
                        { showInfoTwo ? <p>
                          <TypeAnimation
                              style={{ whiteSpace: 'pre-line' }}
                              sequence={[
                                `# My origins can be traced back to the work of an AI.\nWhat is the value of the AIPepe token?\nNo value`,
                                1000,
                              ]}
                              className="font-mono text-sm"
                          />
                        </p> : null }

                        <p className="mt-4 text-white cursor-pointer" onClick={onClickInfoThree}>
                            What is our vision?
                            { showInfoThree ? null : <img src={darrow} className="inline ml-1 w-4 rotate-90 animate-pulse" /> }
                        </p>
                        { showInfoThree ? <p>
                          <TypeAnimation
                              sequence={[
                                "# We believe that AI, memes, and frog culture can shake up the meme coin scene like never before. Our dream is to create the most insane, unpredictable, and downright degenerate meme coin that'll turn heads and make some serious noise. AIpepe is the people's token, with a fair launch that gives everyone a chance to join the party.",
                                1000,
                              ]}
                              className="font-mono text-sm"
                          />
                        </p> : null }
                    </div>

                    <div className="col-span-2" data-aos="fade-left">
                        <img src={yo} alt="Yo" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Info;
