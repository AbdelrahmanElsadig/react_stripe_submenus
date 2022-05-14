import React, { useContext, useState } from 'react';
import { sublinks } from '../data/sublinks';
import { FaBars } from 'react-icons/fa';
import { ModalContextProp } from '../types/global';
import { ModalContext } from './Contexts';
import { Button } from './Project';

const Main = () => {
  const { isModalOpen, setModal } = useContext(ModalContext) as ModalContextProp;
  const [index, setIndex] = useState(-1)
  return (
    <>
      <header className="container w-[80%]  mx-auto flex items-center py-3 justify-between lg:justify-between">
        <img src={require('../img/logo.svg').default} alt="" className="" />
        <div onMouseLeave={() => setIndex(-1)} className="flex cursor-pointer gap-6 relative py-2">
          <p onMouseEnter={() => setIndex(0)} className="text-white text-xl hidden lg:block">Products</p>
          <p onMouseEnter={() => setIndex(1)} className="text-white text-xl hidden lg:block">Developers</p>
          <p onMouseEnter={() => setIndex(2)} className="text-white text-xl hidden lg:block">Company</p>
          <HoverSlider index={index} />
        </div>
        <Button isModalBtn={true}>
          <span className='hidden lg:block'>Sign In</span>
        </Button>
        <FaBars onClick={() => setModal(true)}
          className='w-8 h-8 border-2 border-black border-solid
                     cursor-pointer p-1 duration-300 ease-in-out bg-black fill-white rounded-md
                     hover:bg-white lg:hidden hover:fill-black' />

      </header>
      <div className="container px-2 mb-16 lg:text-left w-[80%] gap-6 items-center flex mx-auto text-center ">
        <div className="container lg:text-left gap-6 mt-24 lg:mt-12 items-center lg:items-start flex flex-col mx-auto">
          <img src={require("../img/hero.svg").default} alt="" className="absolute w-full -z-20 h-full object-cover top-0 left-0" />
          <h1 className="text-5xl sm:text-6xl font-bold">
            Payments
            <br />
            infrastructure
            <br />
            for the internet
          </h1>
          <p className="text-xl text-slate-600">Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
          <Button isModalBtn={false}>Start Now</Button>
        </div>
        <img src={require('../img/phone.svg').default} alt="" className="hidden lg:block" />

      </div>
    </>
  )
}

function HoverSlider({ index }: { index: number }) {
  if (index == -1) return (
    <div className="hidden"></div>
  )
  const style = index === 0 ? 'left-[14%]' : index === 1 ? 'left-1/2' : 'left-[87%]';
  return (
    <div className={`${style} -translate-x-1/2  absolute top-full flex gap-6 bg-neutral-50
     p-4 shadow-lg rounded-md before:absolute  before:w-0 before:h-0 duration-300 ease-in-out
     before:border-neutral-900 before:z-50 before:border-t-transparent  transition-all
     before:border-r-transparent before:border-l-transparent before:border-b-neutral-50
     before:left-1/2 before:bottom-full before:-translate-x-1/2 before:border-[8px]`}>
      {sublinks[index].links.map((sublink, i) => {
        return (
          <span key={i} className="flex items-center gap-2 text-gray-600">
            {sublink.icon}
            <p className="text-lg capitalize cursor-pointer">{sublink.label}</p>
          </span>
        )

      })}
    </div>
  )
}

export { Main }
