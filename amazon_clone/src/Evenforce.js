import React from 'react';
import { Link } from 'react-router-dom';
import "./Evenforce.css";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';


function Evenforce(){
    return(
        <div className="eve_div">
            <img  className="eve_logo"
            src="http://evenforce.com/wp-content/uploads/2016/08/Evenforce.png" />

           
            <Link className="header_links">
            <span >How It Works</span>
            </Link>

            <Link className="header_links">
            <span >Features</span>
            </Link>
            
            <Link className="header_links">
            <span >Pricing</span>
            </Link>

            <Link className="header_links">
            <span >Integration</span>
            </Link>

            <Link className="header_links">
            <span >Blog</span>
            </Link>

            <Link className="header_links">
            <span >FAQ</span>
            </Link>

            <Link className="header_links">
            <span >Contact Us</span>
            
            </Link>
           
            
        </div>


    )
}

export default Evenforce;