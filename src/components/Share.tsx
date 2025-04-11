import React from 'react'
import Image from './Image'

const Share = () => {
  return (
    <div className='flex p-4 gap-4'>
      {/* Aavtar */}
      <div className='relative w-10 h-10 rounded-full overflow-hidden'>
        <Image path='general/avatar.jpg' w={100} h={100} tr={true} alt='sina koushki' />
      </div>
      {/* Others */}
      <div className='flex-1 flex flex-col gap-4'>
        <input className='bg-transparent outline-none placeholder:text-textGray text-xl' type="text" placeholder='Whats happening ?!' />
        <div className='flex items-center justify-between flex-wrap gap-4'>
          <div className='flex flex-wrap gap-4'>
          <Image className='cursor-pointer' path='icons/image.svg' w={20} h={20} tr={false} alt='post-icon'/>
          <Image className='cursor-pointer' path='icons/gif.svg' w={20} h={20} tr={false} alt='post-icon'/>
          <Image className='cursor-pointer' path='icons/poll.svg' w={20} h={20} tr={false} alt='post-icon'/>
          <Image className='cursor-pointer' path='icons/emoji.svg' w={20} h={20} tr={false} alt='post-icon'/>
          <Image className='cursor-pointer' path='icons/schedule.svg' w={20} h={20} tr={false} alt='post-icon'/>
          <Image className='cursor-pointer' path='icons/location.svg' w={20} h={20} tr={false} alt='post-icon'/>
          </div>
          <button className='bg-white text-black font-bold rounded-full py-2 px-4'>Post</button>
        </div>
      </div>
    </div>
  )
}

export default Share