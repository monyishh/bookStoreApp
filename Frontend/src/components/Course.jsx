import React from 'react'
import list from "../../public/list.json"
import Cards from "./Cards"
import {Link} from "react-router-dom"
const Course = () => {
  return (
    <div className='`max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-3xl font-bold text-gray-900'>We're delighted to have you <span className='text-pink-500'>Here:)</span></h1>
       
        <p className='mt-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam autem suscipit laboriosam facere. Nostrum optio doloremque tempora esse magnam ratione dolorem dolor quibusdam mollitia nulla nam repellat et, vel eligendi!</p>
<Link to="/">
<button className="mt-4 bg-pink-500 text-white px-4 py-3 rounded">Back</button></Link>
</div>
<div className='mt-4 grid grid-cols-1 md:grid-cols-3'>
  {
    list.map((item)=>(
      <Cards key={item.id} item={item}/>
    ))
  }
</div>
    </div>
  )
}

export default Course