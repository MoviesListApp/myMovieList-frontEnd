import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Header.css';

function header({setData}) {
  return (
    <header className="main-header shadow">
             <div className="top-header">
                    <div className='container top-header-wrapper'>
                        <div className="logo header-logo">
                            <h5>MY MOVIE LIST</h5>
                        </div>
                        <NavBar setData={setData} />
                    </div>
                    
                </div>
        </header>  
  )
}

export default header