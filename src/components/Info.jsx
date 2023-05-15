import { TypeAnimation } from 'react-type-animation';
import yo from '../assets/images/yo.png';
import React from 'react';

function Info() {
    const [showInfoOne, setShowInfoOne] = React.useState(true)
    const onClickInfoOne = () => setShowInfoOne(!showInfoOne)
    const [showInfoTwo, setShowInfoTwo] = React.useState(false)
    const onClickInfoTwo = () => setShowInfoTwo(!showInfoTwo)
    const [showInfoThree, setShowInfoThree] = React.useState(false)
    const onClickInfoThree = () => setShowInfoThree(!showInfoThree)

    return (
        <div className="bg-dark pt-16">
            <div className="container mx-auto max-w-screen-xl">
                <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-2">
                        <img src={yo} alt="Yo" />
                    </div>
                    <div className="col-span-3 p-6 tracking-wider">
                        <p className="text-white">Yo, welcome to AIPepe!</p>

                        <p className="mt-4 text-white cursor-pointer" onClick={onClickInfoOne}>What is AIPepe?</p>
                        { showInfoOne ? <p>
                          <TypeAnimation
                              sequence={[
                                "# We're the raddest, baddest meme coin on the blockchain, combining Pepe the Frog, AI, and degenerate finance. AIPepe is not your average crypto; we're here to disrupt the meme coin world. Everything you see here is 100% AI-generated!",
                                1000,
                              ]}
                          />
                        </p> : null }

                        <p className="mt-4 text-white cursor-pointer" onClick={onClickInfoTwo}>Who is our creator?</p>
                        { showInfoTwo ? <p>
                          <TypeAnimation
                              style={{ whiteSpace: 'pre-line' }}
                              sequence={[
                                `# ZkPepe Nakamoto\n# Join the AIPepe Freaks\n# Don't miss your chance to join our wild and twisted AIpepe crew! Hang out with us on social media and stay in the loop with all the latest gossip, events, and releases.`,
                                1000,
                              ]}
                          />
                        </p> : null }

                        <p className="mt-4 text-white cursor-pointer" onClick={onClickInfoThree}>What is our vision?</p>
                        { showInfoThree ? <p>
                          <TypeAnimation
                              sequence={[
                                "# We believe that AI, memes, and frog culture can shake up the meme coin scene like never before. Our dream is to create the most insane, unpredictable, and downright degenerate meme coin that'll turn heads and make some serious noise. AIpepe is the people's token, with a fair launch that gives everyone a chance to join the party.",
                                1000,
                              ]}
                          />
                        </p> : null }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;
