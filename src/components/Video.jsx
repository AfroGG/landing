import video from '../assets/images/video.mp4';

function Video() {
    return (
        <div className='flex justify-center'>
            <video autoPlay muted loop id="myVideo" className='object-cover w-full h-full'>
                <source src={video} type="video/mp4" /> 
            </video>
            <p className="text-2xl absolute bottom-48 tracking-widest">
                Meme Pepe <span className="mx-10">+</span> AI-generated <span className="mx-10">+</span> Community <span className="mx-10">=</span> <span className="text-6xl align-middle">AIPEPE</span>
            </p>
        </div> 
    )
}

export default Video;