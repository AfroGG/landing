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
                        <a className="text-white opacity-60 text-sm mr-12" href="https://github.com/zkpepe-ai/landing/blob/02cf9afe28d65f489f26d745892d877272b52e2a/src/assets/files/AIPepe_Story_Whitepaper.pdf" target="_blank" rel="noreferrer">
                            Whitepaper
                        </a>
                        <a className="text-white opacity-60 text-sm mr-12" href="#" target="_blank" rel="noreferrer">
                            Docs
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
