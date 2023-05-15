import token from '../assets/images/token.png';

function Token() {
    return (
        <div className="bg-dark pt-32">
            <div className="container mx-auto max-w-screen-xl">
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 p-6 tracking-wider">
                        <p className="text-5xl">999,999,999,999,999</p>
                        <p className="mt-4 text-4xl">//AIPEPE//</p>
                        <p className="text-4xl">TOKENOMICS</p>
                        <p className="mt-16 pr-8 text-white leading-8">The number 999,999,999,999,999 represents a theoretical limit of computational power in the quest for superintelligence and serves as a satirical symbol of the impending AI Singularity, raising ethical considerations in the development of AI systems.</p>
                    </div>
                    <div className="col-span-1">
                        <img className='pl-3' src={token} alt="AIPEPE Token" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Token;
