function Footer() {
    return (
        <div className="bg-dark pt-24">
            <div className="container mx-auto max-w-screen-lg pb-12">
                <div className="grid grid-cols-2">
                    <div className="col-span-1 text-left">
                        <p className="text-main text-lg mb-1">AIPEPE</p>
                        <p className="text-white opacity-40 text-xs">© 2023 by AIPEPE. All rights reserved!</p>
                    </div>
                    <div className="col-span-1 text-right mt-2">
                        <a className="text-white opacity-60 text-xs mr-12" href="#" target="_blank" rel="noreferrer">
                            Whiterpaper
                        </a>
                        <a className="text-white opacity-60 text-xs mr-12" href="#" target="_blank" rel="noreferrer">
                            Docs
                        </a>
                        <a className="text-white opacity-60 text-xs" href="#" target="_blank" rel="noreferrer">
                            Terms of Use
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;