// import { render } from '@testing-library/react';
import React from 'react';
import HelpPopup from './helpPopup';
import LoginControl from './loginControl'


const Screen = () =>{


return(
    <div>
        <div class='container'>
            {/* <h3>This will return a password from the Ethereum blockchain <br/>that is certifiably random.</h3> */}
            <LoginControl />
            <div id="test"></div>

            <h1>Web3 Random Password Generator</h1>
            
        </div>
        <HelpPopup />


    </div>


)

}

export default Screen