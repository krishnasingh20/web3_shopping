import React, { useState } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearchActive, setIsSearchActive] = useState(false)

  const handleSearch = () => {
    setIsSearchActive(true)
  }

  const handleClearSearch = () => {
    setSearchTerm('')
    setIsSearchActive(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
        onClearSearch={handleClearSearch}
      />
      <ProductList 
        searchTerm={searchTerm}
        isSearchActive={isSearchActive}
        onClearSearch={handleClearSearch}
      />
    </div>
  )
}

export default App