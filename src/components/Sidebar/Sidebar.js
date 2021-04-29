import React from 'react';
import './sidebar.css';
import { FaTshirt, FaShoppingCart, FaBell, FaUserCircle } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";

const Navbar = () => {
    return (
        <div className="sidebar-menu">
            <input type="checkbox" id="menu" />
                <label for="menu" class="icon">
                    <div class="menu"></div>
                </label>

                <div className="nav">
                    <ul>
                    <li>
                        <a href="/"><i class="material-icons"><FaTshirt /></i>Trending and Offers</a>
                    </li>
                    <li>
                        <a href="/chat"><i class="material-icons"><BsFillChatDotsFill /></i>Chats</a>
                    </li>
                    <li>
                        <a href="/cart"><i class="material-icons"><FaShoppingCart /></i>Cart</a>
                    </li>
                    <li>
                        <a href="/your-events"><i class="material-icons"><FaBell /></i>Event Reminder</a>
                    </li>
                    <li>
                        <a href="/profile"><i class="material-icons"><FaUserCircle /></i> Account</a>
                    </li>
                    </ul>
                </div>
        </div>
    )
}

export default Navbar
