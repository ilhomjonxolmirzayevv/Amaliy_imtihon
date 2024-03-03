import { useContext, useEffect, useState } from 'react';
import { ContextData } from '../context/Context';
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from 'react-router-dom';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import honw from '../components/img/homeimg.png';
import { FaTimes } from 'react-icons/fa';


function Home() {

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [colorFilter, setColorFilter] = useState('');
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const {
    products,
  } = useContext(ContextData);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const filterProductsByCategory = (category) => {
    const filtered = products.filter(product => product.category === category);
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const showAllProducts = () => {
    setFilteredProducts(products);
    setCurrentPage(1);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filtered = products.filter(product => product.title.toLowerCase().includes(event.target.value.toLowerCase()));
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
    let sortedProducts = [...filteredProducts];
    if (event.target.value === 'price') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (event.target.value === 'discount') {
      sortedProducts.sort((a, b) => b.discount - a.discount);
    }
    setFilteredProducts(sortedProducts);
  };

  const filterProductsByColor = (color) => {
    const filtered = color === 'all' ? products : products.filter(product => product.color === color);
    setFilteredProducts(filtered);
    setColorFilter(color);
    setCurrentPage(1);
  };
  const filterProductsByPriceRange = () => {
    const filtered = products.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);


  // const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(filteredProducts.length / itemsPerPage); i++) {
  //   pageNumbers.push(i);
  // }
  const pageNumbers = [];
  for (let i = currentPage - 1; i <= currentPage + 1; i++) {
    if (i > 0 && i <= Math.ceil(filteredProducts.length / itemsPerPage)) {
      pageNumbers.push(i);
    }
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const sortByPrice = () => {
    const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
    setFilteredProducts(sorted);
    setSortBy('price');
  };

  return (
    <div>
      <div className="container mx-auto py-8 halim">
        <div className="h_one container flex justify-center pt-6 pb-10">
          <img src={honw} alt="" />
        </div>
        <div className='pb-10'>
          <div className='flex justify-between items-center pb-5 flex-wrap gap-10'>
            <h1 className='text-3xl font-bold'>Отфильтрованный объект {filteredProducts.length} штук</h1>
            <button className='salom p-3 rounded-md' onClick={showAllProducts}>Очистить фильтр</button>
          </div>

          <div className=' flex justify-between items-center pt-3 flex-wrap gap-6'>
            <input className='salom p-3 rounded-md' type="text" placeholder="Поиск по товарам..." value={searchTerm} onChange={handleSearch} />
            <div className="modal ">
              <button onClick={openModal} className="bg-blue-500 flex justify-end hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Открыть фильтр
              </button>
              {isOpen && (
                <div  className="fixed inset-0 bg-gray-200 bg-opacity-50 flex justify-end items-center">
                  <div className="bg-white rounded-lg p-8 max-w-md">
                    <div onClick={() => setIsOpen(false)} className="flex justify-end">
                      <button onClick={closeModal}>
                        <FaTimes />
                      </button>
                    </div>
                    <div className='flex justify-between flex-col  items-start gap-8 pt-3'>
                      <select className='salom p-3 rounded-md' value={sortBy} onChange={handleSortByChange}>
                        <option value="">По умолчанию</option>
                        <option value="price">Цена</option>
                        <option value="discount">Скидка</option>
                      </select>
                      <select className='salom p-3 rounded-md' onChange={(e) => filterProductsByColor(e.target.value)}>
                        <option value="all">Все цвета</option>
                        <option value="red">Красный</option>
                        <option value="blue">Синий</option>
                        <option value="green">Зеленый</option>
                        <option value="yellow">Желтый</option>
                        <option value="black">Черный</option>
                        <option value="white">Белый</option>
                      </select>
                      <div className='flex items-center'>
                        <select className='salom p-3 rounded-md' onChange={(e) => filterProductsByCategory(e.target.value)}>
                          <option value="all" onClick={showAllProducts}>Бренд</option>
                          <option value="iphone">iPhone</option>
                          <option value="samsung">Samsung</option>
                          <option value="ruchka">Ручка</option>
                          <option value="xiaomi">Xiaomi</option>
                          <option value="lg">LG</option>
                        </select>
                      </div>
                      <div>
                        <div className='flex justify-  items-start flex-col gap-10'>
                          <Slider
                            value={priceRange}
                            onChange={(event, newValue) => setPriceRange(newValue)}
                            valueLabelDisplay="auto"
                            min={0}
                            max={3000}
                            step={10}
                          />
                          <Button className='' variant="contained" onClick={filterProductsByPriceRange}>Фильтр по цене</Button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              )}
            </div>
            <select className='jinni salom p-3 rounded-md' value={sortBy} onChange={handleSortByChange}>
              <option value="">По умолчанию</option>
              <option value="price">Цена</option>
              <option value="discount">Скидка</option>
            </select>
            <select className='jinni salom p-3 rounded-md' onChange={(e) => filterProductsByColor(e.target.value)}>
              <option value="all">Все цвета</option>
              <option value="red">Красный</option>
              <option value="blue">Синий</option>
              <option value="green">Зеленый</option>
              <option value="yellow">Желтый</option>
              <option value="black">Черный</option>
              <option value="white">Белый</option>
            </select>
            <div className='jinni flex items-center'>
              <select className='salom p-3 rounded-md' onChange={(e) => filterProductsByCategory(e.target.value)}>
                <option value="all" onClick={showAllProducts}>Бренд</option>
                <option value="iphone">iPhone</option>
                <option value="samsung">Samsung</option>
                <option value="ruchka">Ручка</option>
                <option value="xiaomi">Xiaomi</option>
                <option value="lg">LG</option>
              </select>
            </div>
            <div>
              <div className='jinni flex justify-between items-center gap-20'>
                <Slider
                  value={priceRange}
                  onChange={(event, newValue) => setPriceRange(newValue)}
                  valueLabelDisplay="auto"
                  min={0}
                  max={3000}
                  step={10}
                />
                <Button className='w-[450px]' variant="contained" onClick={filterProductsByPriceRange}>Фильтр по цене</Button>
              </div>
            </div>

          </div>
          <div className='flex justify-between flex-wrap gap-8 pt-10'>
            {filteredProducts.length > 0 ? currentItems.map(product => (
              <div key={product.id}>
                <div className="w-80 h-96 flex justify-between flex-col items-baseline p-2">
                  <header>
                    <img className="w-80 h-60 rounded-lg bg-gray-200" src={product.img > 0 ? <h1>loading</h1> : product.img} alt={product.title} />
                  </header>
                  <h4>{product.price}₽</h4>
                  <h4>{
                    product.title.length > 0 ? product.title.slice(0, 20) + "..." : product.title
                  }</h4>
                  <p>{
                    product.description.length > 0 ? product.description.slice(0, 20) + "..." : product.description
                  }</p>
                  <div>
                    <button className='salom p-2 rounded-md'> <Link to={product.id}>Настроить</Link></button>
                  </div>
                </div>
              </div >
            )) : <div className="flex justify-center pl-32 font-semibold text-2xl">Товар не найден!</div>}
          </div>

          <div className='flex justify-center gap-8 pt-28 items-center'>
            <button className='flex items-center gap-1 salom p-3 rounded-md' onClick={goToPreviousPage} disabled={currentPage === 1}> <GrFormPrevious />Предыдущий</button>
            <ul className='flex gap-8 items-center '>
              {pageNumbers.map(number => (
                <li key={number}>
                  <button className=' p-2 transition-all ease-in-out duration-300 hover:bg-[#DCE2EF] rounded-full ' onClick={() => paginate(number)}>{number}</button>
                </li>
              ))}
            </ul>
            <button className='flex items-center gap-1 salom p-3 rounded-md' onClick={goToNextPage} disabled={currentPage === Math.ceil(filteredProducts.length / itemsPerPage)}>Дальше<MdOutlineNavigateNext /></button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home;
