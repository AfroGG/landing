import wave from '../assets/images/wave.png';
import stage1 from '../assets/images/stage1.png';
import stage2 from '../assets/images/stage2.png';
import stage3 from '../assets/images/stage3.png';
import line from '../assets/images/line.png';

function Roadmap() {
    return (
        <div className="bg-dark pt-24">
            <div className="container mx-auto max-w-screen-xl">
                <div className="text-center">
                    <h1 className='mt-4 text-4xl'>//Roadmap//</h1>

                    <div className="stage1">
                        <p className='mt-8 mb-6 text-2xl'>Stage 1</p>
                        <p className='mt-2 text-2xl'>AIPEPE Madness</p>
                        <img className='mt-8' src={wave} alt="Wave" />
                        <img className='-ml-24 my-16' src={stage1} alt="Stage one" />
                        <div className="grid grid-cols-6 gap-4">
                            <ul className='col-start-3 col-span-3 mt-4 text-white text-left list-disc'>
                                <li>Craft AIPEPE token & unleash chaos</li>
                                <li>Prepare for the March: AI toolings & Pepe patriots</li>
                                <li>Stir up AIPEPE's degenerate tribe</li>
                                <li>Fair launch & token frenzy</li>
                            </ul>
                        </div>
                        <div className="flex w-full justify-center items-center mt-12 mb-6">                
                            <img className='mt-8 content-center' src={line} alt="Line" />
                        </div>
                    </div>

                    <div className="stage2">
                        <p className='mt-2 mb-6 text-2xl'>Stage 2</p>
                        <p className='mt-2 text-2xl'>Infect Crypto, Rule Market</p>
                        <img className='mt-8' src={wave} alt="Wave" />
                        <img className='-mt-48 mb-10' src={stage2} alt="Stage two" />
                        <div className="grid grid-cols-6 gap-4">
                            <ul className='col-start-3 col-span-3 mt-4 text-white text-left list-disc'>
                                <li>Forge unholy alliances</li>
                                <li>Invade decentralized exchanges</li>
                                <li>Spread frog plague in dog coin communities</li>
                                <li>Unleash marketing pandemonium</li>
                                <li>Storm major CEX with AIPEPE invasion</li>
                            </ul>
                        </div>
                        <div className="flex w-full justify-center items-center mt-12 mb-6">                
                            <img className='mt-8 content-center' src={line} alt="Line" />
                        </div>
                    </div>
                    
                    <div className="stage3">
                        <p className='mt-2 mb-6 text-2xl'>Stage 3</p>
                        <p className='mt-2 text-2xl'>PepeAI's Reckoning & Reconstruction</p>
                        <img className='mt-8' src={wave} alt="Wave" />
                        <img className='-mt-24 mb-10 mx-auto' src={stage3} alt="Stage three" />
                        <div className="grid grid-cols-6 gap-4">
                            <ul className='col-start-3 col-span-3 mt-4 text-white text-left list-disc ml-20'>
                                <li>Decentralized AI anarchy</li>
                                <li>PepeAI's chaotic crypto insights</li>
                                <li>Found the AIPEPE's Madhouse</li>
                                <li>Champion unhinged crypto</li>
                                <li>Educate the degenerates</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Roadmap;