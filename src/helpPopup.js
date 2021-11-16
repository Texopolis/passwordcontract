import React, {useState} from "react"
import metaMaskIcon from './metamask.png'
import {AwesomeButton} from 'react-awesome-button'
import 'react-awesome-button/dist/themes/theme-c137.css';


const HelpPopup = () =>{

    const [helpDisplay, setHelpDisplay]= useState(false)

    const toggleHelp= () =>{
    helpDisplay ? setHelpDisplay(false) : setHelpDisplay(true)
}

    const showHelp = () =>{
    return(
    <div id='helpContainer'>
        <div>this is where all the helpful info goes</div>
        <div class="metamaskLink">
            <p>A free wallet extension for your browser is available from Metamask</p>
            <a href='https://metamask.io/'><img src={metaMaskIcon} alt='link to MetaMask'/></a>
        </div>
    </div>
    )
}

    const hideHelp = () =>{
        return(
        <div></div>
     )
}

const helpBtn= () =>{
    return(
        <div id="helpButton">
            <AwesomeButton
                    type="primary"
                    size='small'
                    ripple={true}

                    action={toggleHelp}>HELP
            </AwesomeButton>
            {helpDisplay?showHelp():hideHelp()}
        </div>
    )
}
    return(
        helpBtn()
    )
}

export default HelpPopup

