import React from 'react'

function ProductCard({ product }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="bg-white p-8 flex items-center justify-center h-96">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-6 text-center border-t border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 min-h-[3rem] text-base">
          {product.title}
        </h3>
        <p className="text-lg font-semibold text-gray-900 mb-4">
          ${product.price} USD
        </p>
        <button className="w-full bg-black text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-800 transition-colors duration-200">
          View Details
        </button>
      </div>
    </div>
  )
}

export default ProductCard