'use client';
import React, { useEffect, useRef, useState } from 'react';
import Transition from '@/components/Transition';
import { secretPlaylist } from '@/utils/consts';
import Image from 'next/image';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import useStore from '@/utils/store';
import SecretPlaylistCard from '@/components/SecretPlaylistCard';

const ExlcusiveMusic = () => {
  const [selected, setSelected] = useState(0);
  const audioRef = useRef();

  const { showModal, setShowModal, setCurrentPointer, currentPointer } = useStore();

  const checkIfMailSent = () => {
    return new Promise(async (resolve, reject) => {
      let item = localStorage.getItem('email');
      console.log('item  a', item);
      if (item) {
        reject();
      } else {
        resolve();
      }
    });
  };

  useEffect(() => {
    checkIfMailSent()
      .then(() => {
        setTimeout(() => {
          useStore.setState({ showModal: true });
        }, 2500);
      })
      .catch((err) => {
        console.log('err items', err);
      });
  }, []);

  return (
    <Transition>
      <div
        id='exclusive'
        className='flex flex-col max-w-screen min-h-screen w-screen overflow-y-scroll relative items-center justify-start py-[5vh] overflow-hidden'
      >
        <div className='w-[90vw] flex flex-row justify-between items-center lg:items-start mt-[10vh]'>
          <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start'>
            <h2 className='text-white text-[2.5rem] lg:text-[4rem] leading-[4rem] font-bold '>EXCLUSIVE MUSIC</h2>
          </div>
        </div>
        <div className='w-[90vw] flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center lg:items-start mt-[5vh]'>
          <div className='w-full mt-2 lg:mt-0 lg:w-1/2 flex flex-col items-center lg:max-h-[70vh] overflow-y-scroll'>
            {secretPlaylist.map((song, index) => {
              return (
                <SecretPlaylistCard
                  key={index}
                  index={index}
                  title={song.title}
                  artist={song.artist}
                  onClick={() => {
                    setSelected(index);
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    });
                  }}
                  selected={selected == index}
                />
              );
            })}
          </div>
          <div className=' w-full lg:w-1/2 flex flex-col items-center max-h-[70vh] justify-center'>
            <div className='h-[30vh] w-[30vh] group mt-4 relative'>
              <div className='h-[30vh] w-[30vh]  mt-4 absolute z-20'>
                <Image
                  // onMouseEnter={() => {
                  //   setCurrentPointer("i");
                  // }}
                  // onMouseLeave={() => {
                  //   setCurrentPointer("");
                  // }}
                  src={process.env.NEXT_PUBLIC_API_URL + `/exclusive${2}.jpeg`}
                  layout='fill'
                  loading='lazy'
                  objectFit='cover'
                />
              </div>
              <div className='h-[30vh] w-[30vh] z-10 absolute transition-all translate-x-[10vw]   mt-4 '>
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + '/asset1.png'}
                  layout='fill'
                  objectFit='cover'
                  loading='lazy'
                  className='rotate-45'
                />
              </div>
            </div>
            <div className='flex flex-row justify-between items-center mt-[5vh] w-full lg:w-[25vw] lg:ml-[10vw]'>
              <div className='flex flex-col items-start'>
                <p className='text-base text-red-700'>Song</p>
                <p className='text-xl text-white'>{secretPlaylist[selected].title}</p>
              </div>
              <div className='flex flex-col items-start'>
                <p className='text-base text-red-700'>Artist</p>
                <p className='text-xl text-white'>{secretPlaylist[selected].songName}</p>
              </div>
            </div>
            <div
              id='audio-player-div'
              className='flex flex-row justify-center mt-[2.5vh] lg:ml-[11.5vw] w-10/12 lg:w-[30vw] relative items-center z-10'
            >
              <AudioPlayer
                id='audio-player'
                className='w-full'
                style={{
                  width: '100%',
                  backgroundColor: 'black',
                  color: 'white',
                }}
                src={secretPlaylist[selected].url}
                onPlay={(e) => console.log('onPlay')}
              />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default ExlcusiveMusic;
