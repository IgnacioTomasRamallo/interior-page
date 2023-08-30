import React from 'react'
import './navBar.css';
export const NavBar = () => {
    return (
        <>
            <div className='container'>
                <div className='logo-container'>
                    <h1 className='logo'>This Interior</h1>
                </div>
                <div>
                    <ul className='NavBar'>
                        <a href='#'><li>Home</li></a>
                        <a href='#'><li>Collection</li></a>
                        <a href='#'><li>About</li></a>
                        <a href='#'><li>Contact</li></a>
                    </ul>
                </div>
            </div>
        </>
    )
}
