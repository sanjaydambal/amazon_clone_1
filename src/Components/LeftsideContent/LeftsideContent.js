import React from 'react';
import "./LeftsideContent.css"

function LeftsideContent(props) {
    return (
        <div className='left_content'>
          <div style={{margin:"10px"}}>
            <strong>Brand</strong>
          </div>
          <div >
            <label style={{display:"block",width:"100px"}}>
                <input type="checkbox" value="Apple"/>Apple
            </label>
            <label style={{display:"block",width:"100px"}}>
            <input type="checkbox" value="RedMi"/>RedMi
            </label>
            <label style={{display:"block",width:"100px"}}>
            <input type="checkbox" value="Samsung"/>Samsung
            </label>
            <label style={{display:"block",width:"100px"}}>
            <input type="checkbox" value="Motorola"/>Motorola
            </label>
            <label style={{display:"block",width:"100px"}}>
            <input type="checkbox" value="Realme"/>Realme
            </label>
          </div>
        </div>
    );
}

export default LeftsideContent;