import React, { useContext } from 'react'
import { ModalContext } from './Contexts'
import { FaTimes } from 'react-icons/fa';
import { ModalContextProp } from '../types/global';
import { sublinks } from '../data/sublinks';
const Modal = () => {
    const { isModalOpen, setModal } = useContext(ModalContext) as ModalContextProp;
    const styleOverlay = isModalOpen ? 'opacity-50' : 'opacity-0 pointer-events-none';
    const style = isModalOpen ? 'scale-100' : 'scale-0'
    return (
        <div>
            <div className={`absolute left-0 ${styleOverlay} duration-300 transition-all ease-in-out bg-black z-10 top-0 w-full h-full`}></div>
            <div className={`absolute ${style} px-3 rounded-lg flex flex-col gap-6 bg-white duration-300 transition-all ease-in-out top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2`}>
                <div className="flex justify-between px-2">
                    <FaTimes onClick={() => setModal(false)} className='fill-gray-600 absolute right-2 top-2 cursor-pointer w-6 h-6 duration-300 ease-in-out hover:fill-red-600' />
                    <div className="flex py-8 w-72 flex-col gap-6">
                        {sublinks.map((link, i) => {
                            return (
                                <div key={i} className='flex flex-col gap-6'>
                                    <h1 className="text-xl font-semibold capitalize">{link.page}</h1>
                                    <div className="grid pl-4 grid-cols-2 gap-x-6 gap-y-6">
                                        {link.links.map((sublink, j) => {
                                            return (
                                                <span key={j} className="flex items-center gap-2 text-gray-600">
                                                    {sublink.icon}
                                                    <p className="text-lg capitalize cursor-pointer">{sublink.label}</p>
                                                </span>
                                            )

                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Modal } 
