import React from 'react'
import "./Catagories.css"

function Catagories() {
    return (
        <div className="mainpage">
      <div className="catagories_section">
        <div className="catagories_title">
          <div className="catagories_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </div>
          <p className="catagories_name"> Catagories</p>
        </div>
        <div className="catagories_list">
          <button>All Mobiles</button>
          <button>Apple</button>
          <button>Oneplus</button>
          <button>Men's Fashion</button>
          <button>Women's Fashion</button>
          <button>Sports</button>
          <button>Books</button>
          <button>Movies</button>
          <button>Electronics</button>
          <button>Home</button>
          <button>Gift Cards</button>
          <button>Toys</button>
          <button>Fitness</button>
          <button>Bags</button>
          <button>Luggages</button>
          <button>Kid's Fashion</button>
          <button>Car</button>
          <button>Motor Bike</button>
        </div>
      </div>
      
        
      </div>
    
    )
}

export default Catagories
