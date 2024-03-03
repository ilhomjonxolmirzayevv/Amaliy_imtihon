import React from 'react';
import warning from '../components/img/h+pic.png';
import { Link } from 'react-router-dom';

function NotFound() {

  return (
    <div>
      <div className='padd pl-60'>
        <h1 className='text-4xl border-b-4 w-fit border-orange-400 '>Ошибка 404</h1>
      </div>
      <div className='flex flex-col justify-center items-center gap-7 pb-5'>
        <img width={''} className='' src={warning} alt="fef" />
        <Link to={'/'} className='salom1 pb-5'> На главную</Link>
      </div>
    </div>
  )
}

export default NotFound