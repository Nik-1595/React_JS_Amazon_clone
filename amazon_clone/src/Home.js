import React from 'react';
import './Home.css';
import Product from "./Product.js";

function Home(){
    return (
        <div className="home">
           <img 
           className="home_image"
           alt="" 
           src="https://images-eu.ssl-images-amazon.com/images/G/03/digital/video/gateway/placement/launch/boratsubsequentmoviefilm/SENG_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_de-DE._CB417535921_.jpg"
            />

            <div className="product_row">
            <Product 
                id="1245"
                title="Books"
                price={10}
                rating={5}
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/102020/Bookbazaar/Category_card_Bb_379x304._SY304_CB417564552_.jpg"
            />

            <Product 
                id="1245"
                title="HP Monitor"
                price={10}
                rating={5}
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonBusiness/CC_Set1_379_304_2110._SY304_CB417556682_.jpg"
            />
            </div>

            <div className="product_row">
            <Product 
                id="1245"
                title="Mammon Women's Handbag"
                price={10}
                rating={5}
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/Jupiter_GW_Softlines/PC_QC_186X116._SY116_CB418928096_.jpg"
            />

            <Product 
                id="1245"
                title="Pillow"
                price={10}
                rating={5}
                image="https://images-eu.ssl-images-amazon.com/images/G/31/Launchpad/2019/FA/GW/JupiterPhase2/home_furnishing379X304._SY304_CB417425145_.jpg"
            />

            <Product 
                id="1245"
                title="Up to 60% off | Deals on electronics &amp; accessories"
                price={10}
                rating={5}
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Jupiter/GW/Phase-2/DesktopGateway_CategoryCard_758X608_GPS_Wave_20.5x._SY304_CB417417497_.jpg"
            />
            </div>

            <div className="product_row">
            <Product 
                id="1245"
                title="Gionee 10000mAh Li-Polymer Digital Display Power Bank with 2 Output Ports(Fast Charging, 12W) PB10K2S (Metallic Blue)"
                price={10}
                rating={5}
                image="https://m.media-amazon.com/images/I/31ZZzqSoW9L.__AC_SY200_.jpg"
            />
            </div>

           

            </div>
    )
}

export default Home;