
import { useContext } from 'react';
import { ContextData } from '../context/Context';
// import arrow from '../../src/components/img/arrov.svg'
import { Link } from 'react-router-dom';


function CardComponent({ item }) {
    const {
        products,

    } = useContext(ContextData);
    return (
        <div className='grid grid-cols-4 gap-96  flex-wrap'>
            {
                products.map(item => (
                    <div className=''>
                        <div className="w-48 h-96 flex justify-between flex-col items-baseline p-2">
                            <header>
                                <img className="w-48 h-48 rounded-[15px] bg-[#F2F2F2]" src={item.img} alt={item.title} />
                            </header>
                            <h4>{item.title}</h4>
                            <div>
                                {
                                    item.status ? <Link className='shopBtn' to={item.id}>Выбрать вид +</Link> : <Link className='shopBtn' to={item.id}>Выбрать вид +</Link>
                                }
                            </div>
                        </div>
                    </div >
                ))
            }

        </ div>
    );
}

export default CardComponent;
