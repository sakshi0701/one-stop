import React from 'react';
import './sidebar.css';
import { FaMobileAlt, FaShoppingCart, FaBell, FaUserCircle } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="sidebar-menu">
            <input type="checkbox" id="menu" />
            <label for="menu" class="icon">
                <div class="menu"></div>
            </label>

            <div className="side-nav">
                <ul>
                    <li>
                        <Link to="/"><i class="material-icons"><FaMobileAlt /></i>Trending and Offers</Link>
                    </li>
                    <li>
                        <Link to="/cart"><i class="material-icons"><FaShoppingCart /></i>Cart</Link>
                    </li>
                    <li>
                        <Link to="/chat"><i class="material-icons"><BsFillChatDotsFill /></i>Chats</Link>
                    </li>
                    <li>
                        <Link to="/your-events"><i class="material-icons"><FaBell /></i>Event Reminder</Link>
                    </li>
                    <li>
                        <Link to="/profile"><i class="material-icons"><FaUserCircle /></i> Account</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
