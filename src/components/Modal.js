import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Open Modal
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-8 max-w-md">
                        <div className="flex justify-end">
                            <button onClick={closeModal}>
                                <FaTimes />
                            </button>
                        </div>
                        <h1 className="text-xl font-bold mb-4">Modal Title</h1>
                        <p className="text-gray-700">Modal content goes here...</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;
