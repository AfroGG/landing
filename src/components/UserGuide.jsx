import SyncSwap from '../assets/images/SyncSwap.png';
import iZUMI from '../assets/images/iZUMI.png';
import darrow from '../assets/images/darrow.png';
import arrow from '../assets/images/arrow.png';
import {useEffect, useState} from 'react';

function UserGuide() {
    const [showStep, setShowStep] = useState('create');
    const [stepContent, setStepContent] = useState('');

    useEffect(() => {
        setShowStep('create')
        setStepContent(
            <p className='text-sm text-white px-2 mt-4 text-left'>To create a MetaMask wallet, visit MetaMask.io, install the extension, set a password, jot down the seed phrase, confirm it, choose a network, and voila! You're all set to start using your wallet.</p>
        )
    },[]);

    const handleClick = (e) => {
        e.preventDefault();
        const id = e.target.id;
        if (id === 'create') {
            setShowStep('create')
            setStepContent(
                <p className='text-sm text-white px-2 mt-4 text-left'>To create a MetaMask wallet, visit MetaMask.io, install the extension, set a password, jot down the seed phrase, confirm it, choose a network, and voila! You're all set to start using your wallet.</p>
            )
        } else if (id === 'get') {
            setShowStep('get')
            setStepContent(
                <p className='text-sm text-white px-2 mt-4 text-left'>To get Ethereum (ETH) in your MetaMask wallet, either purchase ETH directly within MetaMask or transfer ETH from a cryptocurrency exchange or another wallet by copying your MetaMask wallet address and initiating the transfer.</p>
            )
        } else if (id === 'bridge') {
            setShowStep('bridge')
            setStepContent(
                <p className='text-sm text-white px-2 mt-4 text-left'>To bridge Ethereum (ETH) to the zkSync network, visit <a className="underline text-main"
                    href="https://bridge.zksync.io/">https://bridge.zksync.io/</a>, connect your MetaMask wallet, deposit ETH, confirm in MetaMask, and wait for confirmation on both networks.</p>
            )
        } else if (id === 'swap') {
            setShowStep('swap')
            setStepContent(
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
            )
        }
    }

    return (
        <div className="bg-dark pt-48">
            <div className="container mx-auto max-w-screen-lg">
                <div className="text-center">
                    <h1 className='mb-16 text-4xl'>//USER GUIDE//</h1>

                    <div>
                        <div className="grid grid-cols-7 text-lg px-4">
                            <div className="col-span-1">
                                <span id="create" className={`text-left cursor-pointer ${showStep === 'create' ? '' : 'opacity-50'}`} onClick={handleClick}>Create Wallet</span>
                            </div>
                            <div className="col-span-1">
                                <img src={darrow} className={`mt-1 h-4 mx-auto ${showStep === 'create' ? '' : 'opacity-50'}`} />
                            </div>
                            <div className="col-span-1">
                                <span id="get" className={`text-left cursor-pointer ${showStep === 'get' ? '':'opacity-50'}`} onClick={handleClick}>Get ETH</span>
                            </div>
                            <div className="col-span-1">
                                <img src={darrow} className={`mt-1 h-4 mx-auto ${showStep === 'get' ? '' : 'opacity-50'}`} />
                            </div>
                            <div className="col-span-1">
                                <span id="bridge" className={`text-left cursor-pointer ${showStep === 'bridge' ? '' : 'opacity-50'}`} onClick={handleClick}>Bridge</span>
                            </div>
                            <div className="col-span-1">
                                <img src={darrow} className={`mt-1 h-4 mx-auto ${showStep === 'bridge' ? '' : 'opacity-50'}`} />
                            </div>
                            <div className="col-span-1">
                                <span id="swap" className={`text-left cursor-pointer ${showStep === 'swap' ? '' : 'opacity-50'}`} onClick={handleClick}>Swap</span>
                            </div>
                        </div>
                        {stepContent}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserGuide;
