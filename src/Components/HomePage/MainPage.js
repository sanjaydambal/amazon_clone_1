import React, { Component } from 'react';
import AdvertisementOne from './AdvertisementOne/AdvertisementOne';
import "./Mainpage.css"
import AdvertisementFour from './AdvertisementFour/AdvertisementFour';
class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
   
    render() { 
        return (
            <div className='mainpage'>
               
                <div style={{paddingTop: "260px",display:"flex",flexWrap:"wrap"}}>
                    <AdvertisementOne/>
                    <AdvertisementFour/>
                    <AdvertisementOne/>
                    <AdvertisementOne/>
                    <AdvertisementOne/>
                    <AdvertisementOne/>
                    <AdvertisementFour/>
                    <AdvertisementOne/>
                </div>
               
            </div>
          );
    }
}
 
export default MainPage;
