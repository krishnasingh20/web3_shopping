import React from 'react'
import Apicalling from './Apicalling'
import ProductCard from './ProductCard'

function ProductList({ searchTerm, isSearchActive, onClearSearch }) {
  const { allInventory, loading, error } = Apicalling()

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-gray-800 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Loading products...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center bg-red-50 p-8 rounded-lg">
          <p className="text-xl text-red-600">❌ Error: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  // Filter products based on search
  const filteredProducts = isSearchActive && searchTerm
    ? allInventory.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allInventory

  return (
    <div className="bg-white">
      {/* Store Header Section */}
      <div className="text-center py-12 bg-gray-50">
        <h2 className="text-5xl font-bold text-gray-900 mb-2">Store</h2>
        <p className="text-gray-600 text-lg">Buy with web3 wallet!</p>
        
        {/* Search Results Info */}
        {isSearchActive && searchTerm && (
          <div className="mt-4">
            {filteredProducts.length > 0 ? (
              <p className="text-gray-700">
                Found <span className="font-semibold">{filteredProducts.length}</span> product(s) for "{searchTerm}"
              </p>
            ) : (
              <p className="text-red-600">
                No products found for "{searchTerm}"
              </p>
            )}
          </div>
        )}
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6 py-12">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : isSearchActive && searchTerm ? (
          <div className="text-center py-16">
            <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500 mb-4">Try searching with different keywords</p>
            <button 
              onClick={onClearSearch}
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Clear Search
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ProductList