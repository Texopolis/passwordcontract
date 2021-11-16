import React , {useState} from 'react';
import metaMaskIcon from './metamask.png';
import {AwesomeButtonProgress} from 'react-awesome-button'
import 'react-awesome-button/dist/themes/theme-c137.css';
import Display from './display'



// import {ethers } from 'ethers';

const LoginControl = ()=> {

    const [errorMessage, setErrorMessage] = useState(null)
    const [defaultAccount, setDefaultAccount] = useState(null)
    const [user, setUserLogged] = useState(false)
    const [connButtonText, setConnButtonText] = useState('Connect Wallet')

    const connectWalletHandler= ()=>{
        if (window.ethereum) {
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result =>{
                accountChangeHandler(result[0])
                setConnButtonText('Wallet Connected')
            })
        }else {
            setErrorMessage('Need to Instal Metamask')
        }
    }

    const accountChangeHandler = (newAccount)=>{
        setDefaultAccount(newAccount)
        setUserLogged(true)
    }

    const userGreeting=()=>{
        return(<div>
                    <Display />
                    <h2 id='address'>YOU ARE CONNECTED FROM {defaultAccount}</h2>
                </div>)
    }

    const guestGreeting=()=>{
        return(
            <div>
                <p>To continue you must connect a wallet</p>
                <AwesomeButtonProgress
                    type="primary"
                    size='large'
                    action={connectWalletHandler}>
                {connButtonText}
                </AwesomeButtonProgress>
                {errorMessage}
                
            </div>)
    }

    return(user?userGreeting():guestGreeting())


}
export default LoginControl
