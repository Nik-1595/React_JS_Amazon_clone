import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShopppingBasketIcon from "@material-ui/icons/ShoppingBasket";


function Header(){
    return (
    <nav className="header">
        <Link to="/login">
        <img  className="amazon_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
        alt=""/>
        </Link>

        <div className="search_div">
        <input type="text" className="search_input" />
        <SearchIcon className="search_icon"/>
        </div>

        <div className="header_items">

            <Link to="/login" className="items_link">
                <div className="header_option">
                <span className="header_line_one">Hello</span>
                <span className="header_line_two">Sign</span>
                </div>
            </Link>

            <Link to="/login" className="items_link">
                <div className="header_option">
                <span className="header_line_one">Returns</span>
                <span className="header_line_two">Orders</span>
                </div>
            </Link>

            <Link to="/login" className="items_link">
                <div className="header_option">
                <span className="header_line_one">Your</span>
                <span className="header_line_two">Prime</span>
                </div>
            </Link>

            <Link to="/checkout" className="items_link">
                <div className="header_basket">
                <ShopppingBasketIcon/>  
                <span className="header_line_two basket_count"> 0</span>
                </div>
            </Link>

      </div>

        </nav>
    )
}

export default Header;