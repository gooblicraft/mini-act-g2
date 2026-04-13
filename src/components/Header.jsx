import React from 'react'
import g2Icon from '../assets/g2_icon.png'

const Header = ({ text = 'Testing Header', bgColor = '#1e3a8a', textColor = '#ffffff' }) => {
  return (
    <div
      className='w-full px-6 py-4 text-2xl font-bold shadow-md'
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className='grid grid-cols-[auto_1fr_auto] items-center'>
        <img src={g2Icon} alt='G2 icon' className='h-10 w-10 object-contain' />
        <div className='text-center'>{text}</div>
        <div className='h-10 w-10' aria-hidden='true'></div>
      </div>
    </div>
  )
}

export default Header