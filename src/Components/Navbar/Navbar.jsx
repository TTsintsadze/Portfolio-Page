import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Andew</div>
                <span>toogle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyle: 'none'}}>
                        <li>მთავარი</li>
                        <li>სერვისები</li>
                        <li>გამოცდილება</li>
                        <li>პორტფოლიო</li>
                    </ul>
                </div>
                <button className="button n-button">კონტაქტი</button>
            </div>
        </div>
    )
}

export default Navbar;