import { ReactNode, useContext } from 'react';
import { Main } from './Main';
import { Modal } from './Modal';
const Project = () => {
    return (
        <div className='w-full min-h-screen'>
            <Main />
            <Modal />
        </div>
    )
}

function Button({ children, isModalBtn = false }: { children: string | ReactNode, isModalBtn: boolean }) {
    const style = isModalBtn ? 'hidden lg:block' : '';
    return (
        <>
            <button className={`border-2 group ${style} border-black border-solid bg-black text-white px-2 py-1
                duration-300 ease-in-out rounded-md hover:text-black hover:bg-white`}>
                {children}
            </button>
        </>
    )
}

export { Project, Button }
