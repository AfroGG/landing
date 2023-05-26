import SyncSwap from '../assets/images/SyncSwap.png';
import iZUMI from '../assets/images/iZUMI.png';
import arrow from '../assets/images/arrow.png';
import {useEffect, useState} from 'react';
import stage_1_wallet from '../assets/videos/stage_1_wallet.mp4';
import step1 from '../assets/images/step1.jpg';
import step1_active from '../assets/images/step1_active.jpg';

function UserGuide() {
    const [showStep, setShowStep] = useState('create');
    const [stepContent, setStepContent] = useState('');

    useEffect(() => {
        setShowStep('create')
        setStepContent(
            <div>
                <h2 className="lg:text-3xl text-xl">Step1 - Create Wallet</h2>
                <p className='text-sm text-white mt-4 text-left'>To create a MetaMask wallet, visit MetaMask.io, install the extension, set a password, jot down the seed phrase, confirm it, choose a network, and voila! You're all set to start using your wallet.</p>
            </div>
        )
    },[]);

    const handleClick = (e) => {
        e.preventDefault();
        const id = e.target.id;
        console.log(e)
        if (id === 'create') {
            setShowStep('create')
            setStepContent(
                <div>
                    <h2 className="lg:text-3xl text-xl">Step1 - Create Wallet</h2>
                    <p className='text-sm text-white mt-4 text-left'>To create a MetaMask wallet, visit MetaMask.io, install the extension, set a password, jot down the seed phrase, confirm it, choose a network, and voila! You're all set to start using your wallet.</p>
                </div>
            )
        } else if (id === 'get') {
            setShowStep('get')
            setStepContent(
                <div>
                    <h2 className="lg:text-3xl text-xl">Step2 - Get ETH</h2>
                    <p className='text-sm text-white mt-4 text-left'>To get Ethereum (ETH) in your MetaMask wallet, either purchase ETH directly within MetaMask or transfer ETH from a cryptocurrency exchange or another wallet by copying your MetaMask wallet address and initiating the transfer.</p>
                </div>
            )
        } else if (id === 'bridge') {
            setShowStep('bridge')
            setStepContent(
                <div>
                    <h2 className="lg:text-3xl text-xl">Step3 - Bridge</h2>
                    <p className='text-sm text-white mt-4 text-left'>To bridge Ethereum (ETH) to the zkSync network, visit <a className="underline text-main" href="https://bridge.zksync.io/">https://bridge.zksync.io/</a>, connect your MetaMask wallet, deposit ETH, confirm in MetaMask, and wait for confirmation on both networks.</p>
                </div>
            )
        } else if (id === 'swap') {
            setShowStep('swap')
            setStepContent(
                <div className="grid grid-cols-2">
                    <div className="col-span-2">
                        <h2 className="lg:text-3xl text-xl">Step4 - Swap!</h2>
                        <p className='text-sm text-white mt-4 text-left'>To swap Ethereum (ETH) to AIPEPE tokens, connect your MetaMask wallet, select the tokens to swap, enter the desired amount, confirm the transaction, and follow the prompts to complete the swap.</p>
                    </div>
                    <div className="col-span-1 text-white text-sm text-left">
                        <a href="https://syncswap.xyz/" className='flex'>
                            <img src={SyncSwap} alt="SyncSwap" className="mt-3 h-8"/>
                            <img src={arrow} className="ml-2 mt-6 h-4"/>
                        </a>
                    </div>
                    <div className="col-span-1 text-white text-sm text-left">
                        <a href="https://izumi.finance/" className='flex'>
                            <img src={iZUMI} alt="iZUMI" className="mt-4 h-8"/>
                            <img src={arrow} className="ml-2 mt-6 h-4"/>
                        </a>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="bg-dark lg:pt-48 pt-12">
            <div className="container mx-auto max-w-screen-lg">
                <h1 className='mb-16 lg:text-5xl text-2xl text-center'>//USER GUIDE//</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
                    <div className="col-span-1">
                        <video autoPlay muted loop id="myVideo"
                               className='w-full border-2 border-main'>
                            <source src={stage_1_wallet} type="video/mp4" />
                        </video>
                    </div>
                    <div className="col-span-1 mt-12 lg:mt-10">
                        <div className="grid grid-cols-4 text-lg">
                            <div className="col-span-1 mb-6">
                                <div className="text-left cursor-pointer -mt-10" onClick={handleClick}>
                                    <img id="create" src={showStep === 'create' ? step1_active : step1} className="w-24" />
                                </div>
                            </div>
                            <div className="col-span-1 mb-6">
                                <div className="text-left cursor-pointer" onClick={handleClick}>
                                    <img id="get" src={showStep === 'get' ? step1_active : step1} className="w-24" />
                                </div>
                            </div>
                            <div className="col-span-1 mb-6">
                                <div className="text-left cursor-pointer -mt-10" onClick={handleClick}>
                                    <img id="bridge" src={showStep === 'bridge' ? step1_active : step1} className="w-24" />
                                </div>
                            </div>
                            <div className="col-span-1 mb-6">
                                <div className="text-left cursor-pointer" onClick={handleClick}>
                                    <img id="swap" src={showStep === 'swap' ? step1_active : step1} className="w-24" />
                                </div>
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
