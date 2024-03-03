import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const ContextData = React.createContext();

export function ContextFunction({ children }) {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });




    // Barcha mahsulotlar ro'yxati
    const [products, setProducts] = useState([]);



    // Input-lardan olingan barcha ma'lumotlar
    const [newProduct, setNewProduct] = useState({
        id: "",
        title: "",
        img: "",
        imgle: "",
        imgse: "",
        description: "",
        price: "",
        discount: "",
        status: true,
        count: 1,
        category: "",
        createdAt: "",
    });

    // Navigation hook
    const navigate = useNavigate();

    function handleClear() {
        setNewProduct({
            id: "",
            title: "",
            img: "",
            imgle: "",
            imgse: "",
            description: "",
            price: "",
            discount: "",
            status: true,
            count: 1,
            category: "",
            createdAt: "",
        });
    };


    // API-dan ma'lumot olish funksiyasi
    function getData() {
        axios.get("http://localhost:5000/products")
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => console.log(err.response.data))
    }


    useEffect(() => {
        getData();
    }, []);



    // Input-lardan ma'lumot olish
    function getInputValue(e) {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        });
    };

    // Mahsulot qo'shish va tahrirlash funksiyasi
    function addFunction(e) {
        e.preventDefault();
        if (newProduct.id === "") {
            axios.post("http://localhost:5000/products", { ...newProduct, id: Number, createdAt: new Date().getMinutes() });
            handleClear();

        }
        else {
            // Mahsulotni tahrirlash
            axios.put(`http://localhost:5000/products/${newProduct.id}`, newProduct);
            handleClear();

        }
        getData();
        handleClear();
        navigate('/')
    };

    // // Tahrirlash funksiyasi
    function handleEdit(product) {
        setNewProduct(product);
        navigate("add");

    };

    // Mahsulotni o'chirish funksiyasi
    function handleDelete(id) {
        axios.delete(`http://localhost:5000/products/${id}`)
            .then(() => {
                getData()
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <ContextData.Provider value={{
            products,
            newProduct,
            getInputValue,
            addFunction,
            handleDelete,
            handleEdit,
            navigate,
            Toast,
            setProducts,
        }}>
            {children}
        </ContextData.Provider>
    )
};