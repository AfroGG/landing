function Footer() {
    return (
        <div className="bg-dark pt-24">
            <div className="container mx-auto max-w-screen-lg pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="col-span-1 text-left">
                        <p className="text-main text-lg mb-1 text-center lg:text-left">AIPEPE</p>
                        <p className="text-white opacity-40 text-xs text-center lg:text-left">© 2023 by AIPEPE. All rights reserved!</p>
                    </div>
                    <div className="col-span-1 text-center mt-1 lg:mt-2 lg:text-right">
                        <a className="text-white opacity-60 text-sm mr-12" href="https://github.com/zkpepe-ai/landing/blob/0e2d80f40e840496e0a915dec8aa81b71f287cef/src/assets/files/AIPepe_Manifesto.pdf" target="_blank" rel="noreferrer">
                            Whitepaper
                        </a>
                        <a className="text-white opacity-60 text-sm mr-12" href="https://twitter.com/zkpepe_ai" target="_blank" rel="noreferrer">
                            Twitter
                        </a>
                        <a className="text-white opacity-60 text-sm" href="#" target="_blank" rel="noreferrer">
                            Terms of Use
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
