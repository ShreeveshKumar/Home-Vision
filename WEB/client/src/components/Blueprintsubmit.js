import React from 'react'

const Blueprintsubmit = () => {
  return (
      <div className='flex justify-center '>
          <div>
              <img src='sss.jpg'  alt='' />
          </div>

          <div className='flex flex-col flex-wrap '>
              <input type='file' alt='file_upload' />
              <button type='submit '  className='p-2 bg-black text-white '>Send</button>
          </div>
    </div>
  )
}

export default Blueprintsubmit