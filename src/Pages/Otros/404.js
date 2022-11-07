import { motion } from 'framer-motion';
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Page() {

    return (
        <div
            className="w-full h-full flex justify-center items-center flex-col"
        >
            <div
                className='w-full flex justify-center items-center mb-3'
            >
                <div
                    className='bg-indigo-900 rounded-full w-8 h-8 flex justify-center items-center mr-6'
                >
                    <Link to="/">
                        <FaChevronLeft className='text-white text-2xl' />
                    </Link>
                </div>
                <div
                    className="text-indigo-900 text-4xl text-center"
                >
                    Error 404: No encontrado
                </div>
            </div>
        </div>
    )
}