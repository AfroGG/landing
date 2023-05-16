import stage1 from '../assets/images/stage1.png';
import stage2 from '../assets/images/stage2.png';
import stage3 from '../assets/images/stage3.png';
import line from '../assets/images/line.png';
import Wave from './Wave.jsx';

function Roadmap() {
    return (
        <div className="bg-dark lg:pt-48 pt-12">
            <div className="container mx-auto max-w-screen-xl">
                <div className="text-center">
                    <h1 className='mt-4 text-4xl'>//Roadmap//</h1>

                    <div className="stage1">
                        <img className='lg:-ml-24 -ml-4 my-16' src={stage1} alt="Stage one" />
                        <p className='mt-8 mb-6 text-2xl px-6'>Stage 1 - AIPEPE Madness</p>
                        <div className="grid grid-cols-6 gap-4">
                            <ul className='text-sm lg:text-base lg:col-start-3 lg:col-span-3 col-span-6 mt-4 text-white text-center lg:text-left lg:list-disc'>
                                <li>Craft AIPEPE token & unleash chaos</li>
                                <li>Prepare for the March: AI toolings & Pepe patriots</li>
                                <li>Stir up AIPEPE's degenerate tribe</li>
                                <li>Fair launch & token frenzy</li>
                            </ul>
                        </div>
                        <Wave />
                        <div className="flex w-full justify-center items-center mt-8 mb-6">
                            <img className='lg:mt-8 lg:h-full h-16 content-center animate-pulse' src={line} alt="Line" />
                        </div>
                    </div>

                    <div className="stage2">
                        <img className='lg:-mt-48 -mt-10 mb-10 px-4' src={stage2} alt="Stage two" />
                        <p className='mt-2 mb-6 text-2xl px-6'>Stage 2 - Infect Crypto, Rule Market</p>
                        <div className="grid grid-cols-6 gap-4">
                            <ul className='text-sm lg:text-base lg:col-start-3 lg:col-span-3 col-span-6 mt-4 text-white text-center lg:text-left lg:list-disc'>
                                <li>Forge unholy alliances</li>
                                <li>Invade decentralized exchanges</li>
                                <li>Spread frog plague in dog coin communities</li>
                                <li>Unleash marketing pandemonium</li>
                                <li>Storm major CEX with AIPEPE invasion</li>
                            </ul>
                        </div>
                        <Wave />
                        <div className="flex w-full justify-center items-center lg:mt-8 mb-6">
                            <img className='lg:mt-8 lg:h-full h-16 content-center animate-pulse' src={line} alt="Line" />
                        </div>
                    </div>

                    <div className="stage3">
                        <img className='mt-12 mb-10 px-8 mx-auto' src={stage3} alt="Stage three" />
                        <p className='mt-2 mb-6 text-2xl px-6'>Stage 3 - PepeAI's Reckoning & Reconstruction</p>
                        <div className="grid grid-cols-6 gap-4">
                            <ul className='text-sm lg:text-base lg:col-start-3 lg:col-span-3 col-span-6 mt-4 lg:px-20 text-white text-center lg:text-left lg:list-disc'>
                                <li>Decentralized AI anarchy</li>
                                <li>PepeAI's chaotic crypto insights</li>
                                <li>Found the AIPEPE's Madhouse</li>
                                <li>Champion unhinged crypto</li>
                                <li>Educate the degenerates</li>
                            </ul>
                        </div>
                        <Wave />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap;
