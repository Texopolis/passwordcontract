// import { getContractAddress } from '@ethersproject/address'
import { ethers } from 'ethers'
import React, {useState} from 'react'
import abi from './abi.json'

const PasswordGenerator=()=>{


    const contractAddress='0x5c587a0ace97d103c6f81ec1bb5e75deb1725803'
    const contractAbi= abi

    const [errorMessage, setErrorMessage] = useState(null)
    const [defaultAccount, setDefaultAccount] = useState(null)
    const [connButtonText, setConnButtonText] = useState('Connect Wallet')
    // const [currentContractVal, setCurrentContractVal] = useState(null)
    const [provider, setProvider] = useState(null)
    const [signer, setSigner] = useState(null)
    const [contract, setContract] = useState(null)

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
        updateEthers()
    }

    const updateEthers= () =>{
        let tempProvider = new ethers.providers.Web3Provider(window.ethereum)
        setProvider(tempProvider)

        let tempSigner= tempProvider.getSigner()
        setSigner(tempSigner)

        let tempContract = new ethers.Contract(contractAddress, contractAbi, tempSigner)
        setContract(tempContract)
    }

    
    let randomNum
    let previousRandomNum

    const fetchRandomNumer= async() =>{
        // randomNum=null
        await contract.getRandomNumber()
        randomNum = await contract.randomResult()

    }

    // const fulfillRandomness=async() =>{
    //     contract.rawFulfillRandomness()
    // }

    const showRandomNumber= () =>{
        if(randomNum===previousRandomNum){
            console.log('still waiting')
        }else {
            console.log(randomNum.toString())
        
        // randomNum===previousRandomNum ? console.log('still waiting') : console.log(randomNum.toString())
        previousRandomNum=randomNum
    }}

    // console.log(contractAddress)
    // console.log(contractAbi)


    return(
        <div>
            <div>hello world</div>
            <button onClick={connectWalletHandler}>{connButtonText}</button>
            <h2>address:{defaultAccount}</h2>
            <button onClick={fetchRandomNumer}>Get random number</button>
            {/* <button onClick={fulfillRandomness}>Fulfill</button> */}
            <button onClick={showRandomNumber} id="showRandomNum">show random number</button>

            {errorMessage}
        </div>
    )
}

export default PasswordGenerator




// {
// 	"0": "uint256: 99594311339190715265329100583871655864357444634339043771916989482034079733890"
// }