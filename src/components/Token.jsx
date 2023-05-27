import CountUp from 'react-countup';
import tokenomics from '../assets/videos/tokenomics.mp4';

function Token() {
    return (
        <div className="bg-dark lg:pt-32 pt-10">
            <div className="container mx-auto max-w-screen-lg" data-aos="fade-up">
                <div className="grid lg:grid-cols-5 grid-cols-1 gap-4 text-center">
                    <div className="col-span-5 p-2 tracking-wider">
                        <p className="lg:text-5xl text-2xl">
                            <CountUp
                                duration={5}
                                start={99999999999999}
                                end={999999999999999}
                            />
                        </p>
                        <p className="mt-4 lg:text-5xl text-xl">// AIPEPE TOKENOMICS //</p>
                    </div>
                    <div className="lg:col-span-3 col-span-5">
                        <video autoPlay muted loop id="token" className='lg:w-5/6 w-full lg:mt-16 mt-6 px-6'>
                            <source src={tokenomics} type="video/mp4" />
                        </video>
                    </div>
                    <div className="lg:col-span-2 col-span-5">
                        <p className="lg:-ml-32 lg:px-16 px-4 text-sm lg:text-sm lg:mt-16 mt-6 text-white lg:leading-8 text-left font-mono">The number 999,999,999,999,999 represents a theoretical limit of computational power in the quest for superintelligence and serves as a satirical symbol of the impending AI Singularity, raising ethical considerations in the development of AI systems.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Token;
