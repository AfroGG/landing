import SyncSwap from '../assets/images/SyncSwap.png';
import iZUMI from '../assets/images/iZUMI.png';
import darrow from '../assets/images/darrow.png';
import arrow from '../assets/images/arrow.png';

function UserGuide() {
    return (
        <div className="bg-dark pt-48">
            <div className="container mx-auto max-w-screen-lg">
                <div className="text-center">
                    <h1 className='mb-16 text-4xl'>//USER GUIDE//</h1>

                    <div className="create">
                        <div className="grid grid-cols-7 text-lg px-4">
                            <div className="col-span-1">
                                <span className="text-left">Create Wallet</span>
                            </div>
                            <div className="col-span-1">
                                <img src={darrow} className="mt-2 h-4 mx-auto"/>
                            </div>
                            <div className="col-span-1">
                                <span className="text-left opacity-50">Get ETH</span>
                            </div>
                            <div className="col-span-1">
                                <img src={darrow} className="mt-2 h-4 mx-auto opacity-50"/>
                            </div>
                            <div className="col-span-1">
                                <span className="text-left opacity-50">Bridge</span>
                            </div>
                            <div className="col-span-1">
                                <img src={darrow} className="mt-2 h-4 mx-auto opacity-50"/>
                            </div>
                            <div className="col-span-1">
                                <span className="text-left opacity-50">Swap</span>
                            </div>
                        </div>
                        <p className='text-sm text-white px-2 mt-4 text-left'>To create a MetaMask wallet, visit MetaMask.io, install the extension, set a password, jot down the seed phrase, confirm it, choose a network, and voila! You're all set to start using your wallet.</p>
                    </div>

                    <div className="get mt-32">
                        <div className="grid grid-cols-7 text-lg px-4">
                            <div className="col-span-1">
                                <span className="text-left opacity-50">Create Wallet</span>
                            </div>
                            <div className="col-span-1">
                                <img src={darrow} className="mt-2 h-4 mx-auto opacity-50"/>
                            </div>
                            <div className="col-span-1">
                                <span className="text-left">Get ETH</span>
                            </div>
                            <div className="col-span-1">
                                <img src={darrow} className="mt-2 h-4 mx-auto"/>
                            </div>
                            <div className="col-span-1">
                                <span className="text-left opacity-50">Bridge</span>
                            </div>
                            <div className="col-span-1">
                                <img src={darrow} className="mt-2 h-4 mx-auto opacity-50"/>
                            </div>
                            <div className="col-span-1">
                                <span className="text-left opacity-50">Swap</span>
                            </div>
                        </div>
                        <p className='text-sm text-white px-2 mt-4 text-left'>To get Ethereum (ETH) in your MetaMask wallet, either purchase ETH directly within MetaMask or transfer ETH from a cryptocurrency exchange or another wallet by copying your MetaMask wallet address and initiating the transfer.</p>
                    </div>

                    <div className="bridge mt-32">
                        <div className="grid grid-cols-7 text-lg px-4">
                            <div className="col-span-1">
                                <span className="text-left opacity-50">Create Wallet</span>
                            </div>
                            <div className="col-span-1">
                                <img src={darrow} className="mt-2 h-4 mx-auto opacity-50"/>
                            </div>
                            <div className="col-span-1">
                                <span className="text-left opacity-50">Get ETH</span>
                            </div>
                            <div className="col-span-1">
                                <img src={darrow} className="mt-2 h-4 mx-auto opacity-50"/>
                            </div>
                            <div className="col-span-1">
                                <span className="text-left">Bridge</span>
                            </div>
                            <div className="col-span-1">
                                <img src={darrow} className="mt-2 h-4 mx-auto"/>
                            </div>
                            <div className="col-span-1">
                                <span className="text-left opacity-50">Swap</span>
                            </div>
                        </div>
                        <p className='text-sm text-white px-2 mt-4 text-left'>To bridge Ethereum (ETH) to the zkSync network, visit https://bridge.zksync.io/, connect your MetaMask wallet, deposit ETH, confirm in MetaMask, and wait for confirmation on both networks.</p>
                    </div>

                    <div className="swap mt-32">
                        <div className="grid grid-cols-7 text-lg px-4">
                            <div className="col-span-1">
                                <span className="text-left opacity-50">Create Wallet</span>
                            </div>
                            <div className="col-span-1">
                                <img src={darrow} className="mt-2 h-4 mx-auto opacity-50"/>
                            </div>
                            <div className="col-span-1">
                                <span className="text-left opacity-50">Get ETH</span>
                            </div>
                            <div className="col-span-1">
                                <img src={darrow} className="mt-2 h-4 mx-auto opacity-50"/>
                            </div>
                            <div className="col-span-1">
                                <span className="text-left opacity-50">Bridge</span>
                            </div>
                            <div className="col-span-1">
                                <img src={darrow} className="mt-2 h-4 mx-auto opacity-50"/>
                            </div>
                            <div className="col-span-1">
                                <span className="text-left">Swap</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8 mt-6 px-2">
                            <div className="col-span-1 text-white text-sm text-left">
                                <p>
                                Using SyncSwap:
                                </p>
                                <p>
                                To swap Ethereum (ETH) to AIPEPE tokens on SyncSwap, connect your MetaMask wallet, select the tokens to swap, enter the desired amount, confirm the transaction, and follow the prompts to complete the swap.
                                </p>
                                <a href="https://syncswap.xyz/" className='flex mt-10'>
                                    <img src={SyncSwap} alt="SyncSwap" className="mt-4"/>
                                    <img src={arrow} className="ml-6 mt-8 h-4"/>
                                </a>
                            </div>
                            <div className="col-span-1 text-white text-sm text-left">
                                <p>
                                Using IziSwap:
                                </p>
                                <p>
                                To swap Ethereum (ETH) to AIPEPE tokens on IziSwap, connect your MetaMask wallet, select the tokens to swap, enter the amount you want to swap, review the details, confirm the transaction in MetaMask, and follow the prompts to complete the swap.
                                </p>
                                <a href="https://izumi.finance/" className='flex mt-6'>
                                    <img src={iZUMI} alt="iZUMI" className="mt-4"/>
                                    <img src={arrow} className="ml-6 mt-7 h-4"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserGuide;
