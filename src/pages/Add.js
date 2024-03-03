import { useContext } from "react"
import { ContextData } from "../context/Context"

function Add() {
    const {
        newProduct,
        getInputValue,
        addFunction,
    } = useContext(ContextData);

    return (
        <main className="container mx-auto pt-8 pb-7">
            <form onSubmit={(e) => addFunction(e)} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6">Добавить новый продукт</h1>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="title" className="text-sm font-semibold mb-1">Название продукта</label>
                        <input value={newProduct.title} onChange={(e) => getInputValue(e)} type="text" name="title" id="title" className="input" required placeholder="Название продукта" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="description" className="text-sm font-semibold mb-1">Описание продукта</label>
                        <input value={newProduct.description} onChange={(e) => getInputValue(e)} type="text" name="description" id="description" className="input" required placeholder="Описание продукта" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="price" className="text-sm font-semibold mb-1">Цена</label>
                        <input value={newProduct.price} onChange={(e) => getInputValue(e)} type="number" name="price" id="price" className="input" required placeholder="Цена продукта" />
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="img" className="text-sm font-semibold mb-1">Изображение продукта</label>
                        <input value={newProduct.img} onChange={(e) => getInputValue(e)} type="text" name="img" id="img" className="input" required placeholder="Изображение продукта" />
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="imgle" className="text-sm font-semibold mb-1">Изображение продукта</label>
                        <input value={newProduct.imgle} onChange={(e) => getInputValue(e)} type="text" name="imgle" id="imgle" className="input" required placeholder="Изображение продукта" />
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="imgse" className="text-sm font-semibold mb-1">Изображение продукта</label>
                        <input value={newProduct.imgse} onChange={(e) => getInputValue(e)} type="text" name="imgse" id="imgse" className="input" required placeholder="Изображение продукта" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="category" className="text-sm font-semibold mb-1">Категория</label>
                        <select onChange={(e) => getInputValue(e)} name="category" id="category" className="input" required>
                            <option value="">Выберите категорию</option>
                            <option value="iphone">Iphone</option>
                            <option value="samsung">Samsung</option>
                            <option value="xiaomi">Xiaomi</option>
                            <option value="shivaki">Shivaki</option>
                            <option value="lg">Lg</option>
                            <option value="lenovo">Lenovo</option>
                            <option value="hp">Hp</option>
                        </select>
                    </div>
                </div>
                <button className="bg-blue-400 w-full py-3 mt-6 rounded-md " type="submit">Добавить</button>
            </form>
        </main>
    )
}

export default Add
