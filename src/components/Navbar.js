import React from 'react';
import logo from './img/logo.svg';
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from 'react-router-dom';
import katalog1 from './img/Vector.svg'

function Navbar() {
    return (
        <div>
            <div className='pad padd' >
                <div className='silma p-3 flex justify-between items-center'>
                    <div >
                        <p className='flex items-center '><FaLocationDot className='text-[#315BB3]' /> г. Королёв, Лесная 12, ТРЦ Вертикаль</p>
                    </div>
                    <div className='flex text-xl items-center gap-4 text-[#315BB3]'>
                        <FaInstagramSquare />
                        <FaWhatsappSquare />
                        <FaTelegram />
                        <FaGithubSquare />
                    </div>
                    <div className='flex justify-between gap-6 text-[#315BB3]'>
                        <p className='flex items-center gap-5 '><FaPhoneAlt /> +7(903) 014-87-25</p>
                        <p className='flex items-center gap-5 '><FaPhoneAlt /> 8(800) 237-24-75</p>
                    </div>

                </div>

            </div>
            <div className='bg-[#FAFAFA] p-5 '>
                <div className= 'w-full p-5 flex justify-between  items-center pad '>
                    <div className="nav_logo">
                        <Link to={'/'}>   <img src={logo} alt="fewff" /></Link>
                    </div>
                    <div className='kilma flex flex-col gap-4'>
                        <div className='item flex items-center  justify-between gap-8'>
                            <h3 className='flex items-center gap-3'><img src={katalog1} alt="" /> Каталог</h3>
                            <h3>Услуги</h3>
                            <h3>Акции</h3>
                            <h3>Блог</h3>
                            <h3>Контакты</h3>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 '>
                        <Link to={'add'} className='flex items-center flex-col text-xl'><MdAddCircle />Добавление</Link>
                        <h3 className='flex items-center flex-col text-xl'> <LuShoppingCart />Корзина</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar