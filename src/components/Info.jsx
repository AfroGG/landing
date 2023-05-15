import yo from '../assets/images/yo.png';

function Info() {
    return (
        <div className="bg-dark pt-16">
            <div className="container mx-auto max-w-screen-xl">
                <div className="grid grid-cols-5 gap-4">
                    <div className="col-span-2">
                        <img src={yo} alt="Yo" />
                    </div>
                    <div className="col-span-3 p-6 tracking-wider">
                        <p className="text-white">Yo, welcome to AIPepe!</p>
                        <p className="mt-4 text-white">What is AIPepe?</p>
                        <p>//We&apos;re the raddest, baddest meme coin on the blockchain, combining Pepe the Frog, AI, and degenerate finance. AIPepe is not your average crypto; we're here to disrupt the meme coin world. Everything you see here is 100% AI-generated!</p>
                        <p className="mt-4 text-white">Who is our creator?</p>
                        <p>//</p>
                        <p className="mt-4 text-white">What is our vision?</p>
                        <p>//</p>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Info;