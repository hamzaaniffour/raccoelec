"use client";
import React from 'react';
import { GoPlay } from 'react-icons/go';
import { SlClose } from 'react-icons/sl';

const Video = () => {

    const [openvideo, setOpenVideo] = React.useState(false);

    const handleOpen = () => {
        setOpenVideo(true);
    }

  return (
    <div className="relative mt-24 mb-20">
      <div className="w-full bg-cover bg-center h-[475px] min-h-[475px] flex bg-fixed justify-center items-center" style={{ backgroundImage: 'url("https://raccoelec.fr/wp-content/uploads/2024/06/video-popup-img-2.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <button onClick={handleOpen} className="playbtn relative z-10 flex justify-center items-center h-28 w-28 bg-white rounded-full shadow-md">
          <GoPlay className="text-[#1523dc] size-14" />
        </button>
      </div>

    {openvideo && (
        <>
        <div className='bg-black/90 fixed z-10 top-0 left-0 w-full h-full flex justify-center items-center text-white'>
            <div className='absolute right-8 top-8'>
                <SlClose className='size-9 text-zinc-400 cursor-pointer' onClick={() => setOpenVideo(false)} />
            </div>

            <div className='mfp-content'>
                <div className='w-full max-w-[900px]'>
                    <iframe src="https://www.youtube.com/embed/a6bBbTWgxCU?feature=oembed?playlist=a6bBbTWgxCU&mute=0&autoplay=0&loop=no&controls=0&start=0&end=" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
        </>
    )}

    </div>
  );
}

export default Video;
