import Hack_PEPE from '../assets/videos/Hack_PEPE.mp4';
import AIPepe_doge from '../assets/videos/AIPepe_doge.mp4';
import stage3_bg from '../assets/images/stage3_bg.png';

function Roadmap() {
    return (
        <div className="bg-dark lg:pt-48 pt-12">
            <div className="relative mx-auto max-w-screen-lg z-10">
                <h1 className='pb-6 lg:text-5xl text-2xl text-center'>//Roadmap//</h1>

                <div className="stage1 bg-main w-4/5 mx-auto">
                    <p className='mt-8 lg:text-2xl px-6 py-3 text-black'>Stage 1 - AIPEPE Madness</p>
                    <div className="px-4 ml-4 -mr-8 grid grid-cols-6 gap-4 bg-dark border-2 border-main">
                        <ul className='text-sm lg:text-base col-span-6 mt-4 text-white '>
                            <li className="mb-4">
                                <p className="text-lg">Unleashing Chaos:</p>
                                <p className="text-main font-mono">Craft the AIPEPE token, a volatile blend of AI and meme culture, primed to disrupt the current meme coin scene.</p>
                            </li>
                            <li className="mb-4">
                                <p className="text-lg">The March Begins:</p>
                                <p className="text-main font-mono">Harness cutting-edge AI tools and rally the Pepe patriots, it's time to assemble the degenerate army.</p>
                            </li>
                            <li className="mb-4">
                                <p className="text-lg">Stirring the Tribe:</p>
                                <p className="text-main font-mono">Light up the internet on Discord, Twitter, and Telegram, rallying a wild, loyal community of AIPEPE enthusiasts.</p>
                            </li>
                            <li className="mb-4">
                                <p className="text-lg">Fair Launch:</p>
                                <p className="text-main font-mono">Distribute AIPEPE tokens in a wild, yet fair way that stirs up a token frenzy and offers everyone a chance to join the party.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-main w-4/5 mx-auto">
                    <p className="-mt-10 bg-dark h-10">
                        <p className="ml-4 -mt-10 border-b-2 border-l-2 h-10"></p>
                    </p>
                </div>
                <div className="w-4/5 mx-auto my-20 lg:mb-40">
                    <video autoPlay muted loop id="hack_pepe" className='bg-dark' data-aos="zoom-in-up">
                        <source src={Hack_PEPE} type="video/mp4" />
                    </video>
                </div>

                <div className="stage2 bg-main w-4/5 mx-auto">
                    <p className='mt-8 lg:text-2xl px-6 py-3 text-black'>Stage 2 - Infect Crypto, Rule Market</p>
                    <div className="px-4 ml-4 -mr-8 grid grid-cols-6 gap-4 bg-dark border-2 border-main">
                        <ul className='text-sm lg:text-base col-span-6 mt-4 text-white '>
                            <li className="mb-4">
                                <p className="text-lg">Unholy Alliances:</p>
                                <p className="text-main font-mono">Team up with the most notorious players in the crypto world to plot total market domination.</p>
                            </li>
                            <li className="mb-4">
                                <p className="text-lg">DEX Invasion:</p>
                                <p className="text-main font-mono">Spread the AIPEPE token on decentralized exchanges, flooding the market with our chaotic brand.</p>
                            </li>
                            <li className="mb-4">
                                <p className="text-lg">Frog Plague:</p>
                                <p className="text-main font-mono">Infect the dog coin communities, injecting a virulent frog plague into their circles, shaking the very foundation of the meme coin scene.</p>
                            </li>
                            <li className="mb-4">
                                <p className="text-lg">Major CEX Storm:</p>
                                <p className="text-main font-mono">Break into the world of centralized exchanges, listing AIPEPE tokens, and spreading our meme-fueled madness.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-main w-4/5 mx-auto">
                    <p className="-mt-10 bg-dark h-10">
                        <p className="ml-4 -mt-10 border-b-2 border-l-2 h-10"></p>
                    </p>
                </div>
                <div className="w-4/5 mx-auto mb-20 lg:mb-40">
                    <video autoPlay muted loop id="hack_pepe" className='bg-dark' data-aos="zoom-in-up">
                        <source src={AIPepe_doge} type="video/mp4" />
                    </video>
                </div>

                <div className="stage3 bg-main w-4/5 mx-auto">
                    <p className='mt-8 lg:text-2xl px-6 py-3 text-black'>Stage 3 - PepeAI's Reckoning & Reconstruction</p>

                    <div className="px-4 ml-4 -mr-8 grid grid-cols-6 gap-4 bg-dark border-2 border-main">
                        <ul className='text-sm lg:text-base col-span-6 mt-4 text-white '>
                            <li className="mb-4">
                                <p className="text-lg">AI Anarchy:</p>
                                <p className="text-main font-mono">Deploy PepeAI-powered governance, the community will call the shots in our decentralized chaos.</p>
                            </li>
                            <li className="mb-4">
                                <p className="text-lg">Chaotic Crypto Insights:</p>
                                <p className="text-main font-mono">Offer AI-driven market analysis and predictions, providing tools for reckless investing.</p>
                            </li>
                            <li className="mb-4">
                                <p className="text-lg">Unhinged Crypto Champion:</p>
                                <p className="text-main font-mono">Join forces with industry renegades to completely revolutionize the crypto ecosystem.</p>
                            </li>
                            <li className="mb-4">
                                <p className="text-lg">Degenerate Education:</p>
                                <p className="text-main font-mono">Share the dark arts of AI and blockchain, crafting a wilder, more unpredictable crypto future.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-main w-4/5 mx-auto">
                    <p className="-mt-10 bg-dark h-10">
                        <p className="ml-4 -mt-10 border-b-2 border-l-2 h-10"></p>
                    </p>
                </div>
            </div>
            <div className="lg:-mt-40 z-0 relative">
                <img src={stage3_bg} className="w-full lg:w-2/3 mx-auto" />
            </div>
        </div>
    )
}

export default Roadmap;
