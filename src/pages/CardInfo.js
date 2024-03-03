import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextData } from "../context/Context";
import axios from "axios";

function CardInfo() {
  const { handleEdit, handleDelete } = useContext(ContextData);
  const { id } = useParams();
  const [targetCard, setTargetCard] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`)
      .then(res => setTargetCard(res.data))
      .catch(err => console.log(err.response.data))
  }, [id]);

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-between p-10">
          <img className="w-1/6 h-auto" src={targetCard.img} alt={targetCard.title} />
          <img className="w-1/4 h-auto" src={targetCard.imgle} alt={targetCard.title} />
          <img className="w-1/4 h-auto" src={targetCard.imgse} alt={targetCard.title} />
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-gray-800">{targetCard.title}</h1>
          <p className="text-gray-600 mt-2">{targetCard.description}</p>
          <div className="flex justify-between items-center mt-4">
            <h2 className="text-xl font-bold text-gray-700">{targetCard.price}₽</h2>
            <div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4" onClick={() => handleEdit(targetCard)}>Edit</button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md" onClick={() => handleDelete(id)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardInfo;
