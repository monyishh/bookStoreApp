


// import React from 'react'

const Cards = ({item}) => {
    console.log(item);
  return (
    <div className="mb-7 mt-7 ">
        <div className="card bg-base-100 w-80 shadow-xl  dark:bg-slate-900 dark:text-white hover:scale-105 duration-200">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-400 px-3 py-2 rounded">Buy Now!</div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Cards;