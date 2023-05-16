import token from '../assets/images/token.png';

function Token() {
    return (
        <div className="bg-dark lg:pt-32 pt-10">
            <div className="container mx-auto max-w-screen-xl">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                    <div className="col-span-1 lg:hidden block">
                        <img className='lg:px-3 px-8' src={token} alt="AIPEPE Token" />
                    </div>
                    <div className="col-span-1 p-6 tracking-wider">
                        <p className="lg:text-5xl text-2xl">999,999,999,999,999</p>
                        <p className="mt-4 lg:text-4xl text-2xl">//AIPEPE//</p>
                        <p className="lg:text-4xl text-2xl">TOKENOMICS</p>
                        <p className="text-sm lg:text-base lg:mt-16 mt-6 pr-8 text-white lg:leading-8">The number 999,999,999,999,999 represents a theoretical limit of computational power in the quest for superintelligence and serves as a satirical symbol of the impending AI Singularity, raising ethical considerations in the development of AI systems.</p>
                    </div>
                    <div className="col-span-1 lg:block hidden">
                        <img className='lg:px-3 px-8' src={token} alt="AIPEPE Token" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Token;
