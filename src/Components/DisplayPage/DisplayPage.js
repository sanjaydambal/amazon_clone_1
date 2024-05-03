import React from 'react';
import LeftsideContent from '../LeftsideContent/LeftsideContent';
import RightsideContent from '../RightsideContent/RightsideContent';

function DisplayPage(props) {
    return (
        <div style={{display:'flex'}}>
            <div>
                <LeftsideContent/>
            </div>
            <div>
                <RightsideContent/>
            </div>
        </div>
    );
}

export default DisplayPage;
