import React from 'react'
import img from '../img/Property 1=Default.png'
import img1 from '../img/Property 1=Default.png'
import img2 from '../img/Property 1=Default (1).png'
import img3 from '../img/Property 1=Default (2).png'

function Footer() {
  return (
    <div className='pad footer1 padd' >
      <div className="flex  jumg  padd">
        <h4>Главная</h4>
        <h4>Услуги</h4>
        <h4>Доставка и оплата</h4>
        <h4>О нас</h4>
        <h4>Акции</h4>
        <h4>Блог</h4>
        <h4>Контакты</h4>
      </div>
      <div className="folar">
        <div className="fb1">
          <h4>Воздушные шары из латекса</h4>
          <p>Круглые без рисунка</p>
          <p>Круглые с рисунком</p>
          <p>Для моделирования</p>
          <p>Сердца</p>
          <p>Для упаковки</p>
          <p>Линколуны</p>
        </div>
        <div className="">
          <h4>Воздушные шары из фольги</h4>
          <p>Decco Bubble</p>
          <p>3D-фигуры</p>
          <p>Шары-самодувы</p>
          <p>Оформительские без рисунка</p>
          <p>Сердца, круги, звёзды</p>
          <p>Цифры</p>
          <p>Буквы, надписи</p>
        </div>
        <div className="">
          <h4>Товары для праздника</h4>
          <p>Посуда</p>
          <p>Свечи</p>
          <p>Хлопушки</p>
          <p>Гирлянды</p>
          <p>Фотозона</p>
          <p>Конфетти, пенопласт, серпантин</p>
          <p>Карнавальная косметика</p>
        </div>
        <div className="">
          <h4>Оборудование, инструменты</h4>
          <p>Клей для шаров</p>
          <p>Светодиодная подсветка</p>
          <p>Печать на шарах</p>
          <p>Компрессоры, насосы</p>
          <p>Полироль для шаров</p>
        </div>


      </div>
      <div className="">
        <h4>Упаковка</h4>
        <p>Пакеты</p>
        <p>Коробки</p>
        <p>Банты</p>
        <p>Ленты</p>
        <p>Упаковочная бумага</p>
      </div>

      <div className="fillar">
        <div className="dd">
          <p>© 2022 ООО «Салон Сюрприз». ОГРН 39483948320. Политика обработки персональных данных</p>
        </div>
        <div className="">
          <div className="flex gap-4">
            <img src={img} alt="erhgwerh" />
            <img src={img1} alt="hrehw" />
            <img src={img2} alt="rewhe" />
            <img src={img3} alt="hrehwh" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer