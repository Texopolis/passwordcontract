import React, {useState} from 'react';
import { ethers } from 'ethers'
import ABI from './abi.json'
import {AwesomeButton} from 'react-awesome-button'
import 'react-awesome-button/dist/themes/theme-c137.css';



const Display= ()=>{

    const [pos1, setPos1] = useState('1')
    const [pos2, setPos2] = useState('2')
    const [pos3, setPos3] = useState('3')
    const [pos4, setPos4] = useState('4')
    const [pos5, setPos5] = useState('5')
    const [pos6, setPos6] = useState('6')
    const [pos7, setPos7] = useState('7')
    const [pos8, setPos8] = useState('8')
    const [pos9, setPos9] = useState('9')
    const [pos10, setPos10] = useState('10')
    const [pos11, setPos11] = useState('11')
    const [pos12, setPos12] = useState('12')
    const [pos13, setPos13] = useState('13')
    const [pos14, setPos14] = useState('14')
    const [pos15, setPos15] = useState('15')

    const contractAddress='0x5c587a0ace97d103c6f81ec1bb5e75deb1725803'
    const contractAbi= ABI

    const [errorMessage, setErrorMessage] = useState(null)
    const [defaultAccount, setDefaultAccount] = useState(null)
    const [connButtonText, setConnButtonText] = useState('Connect Wallet')
    // const [currentContractVal, setCurrentContractVal] = useState(null)
    const [provider, setProvider] = useState(null)
    const [signer, setSigner] = useState(null)
    const [contract, setContract] = useState(null)
    const [buttonClicked, setButton] = useState(false)
    const [buttonClicked2, setButton2] = useState(false)

    // const connectWalletHandler= ()=>{
    //     if (window.ethereum) {
    //         window.ethereum.request({method: 'eth_requestAccounts'})
    //         .then(result =>{
    //             accountChangeHandler(result[0])
    //             setConnButtonText('Wallet Connected')
    //         })
    //     }else {
    //         setErrorMessage('Need to Instal Metamask')
    //     }
    // }

    // const accountChangeHandler = (newAccount)=>{
    //     setDefaultAccount(newAccount)
    //     updateEthers()
    // }

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

    const fetchRandomNumber= async() =>{
        await contract.getRandomNumber()
        randomNum = await contract.randomResult()
    }

    const showRandomNumber= () =>{
        // if(randomNum===previousRandomNum){
        //     console.log('still waiting')
        // }else {
            console.log(randomNum.toString())
        // previousRandomNum=randomNum
    }

    const setDisabled = () =>{
        setButton(false)
    }

    const setDisabled2 = () =>{
        setButton2(false)
    }


    return(
        <div>
            <div id="helpButton">
                <AwesomeButton
                     id='generatePassBtn'
                     type="toggle"
                     size='large'
                     disabled={buttonClicked}
                     action= {()=>{updateEthers(); setDisabled();}} >Initiate Blockchain
                </AwesomeButton>
                <AwesomeButton
                     id='generatePassBtn'
                     type="toggle"
                     size='medium'
                     disabled={buttonClicked2}
                     action= {()=>{fetchRandomNumber(); setDisabled2()}} >get password
                </AwesomeButton>
                <AwesomeButton
                     id='generatePassBtn'
                     type="secondary"
                     size='medium'
                     action= {()=>{showRandomNumber()}} >show password
                </AwesomeButton>


            </div>

            {errorMessage}
        </div>
    )
}


    // return(
    //     <div>
    //         <div id='passDisplay'>
    //             <div class='passDisplay' id='pass0'>{pos1}</div>
    //             <div class='passDisplay' id='pass1'>{pos2}</div>
    //             <div class='passDisplay' id='pass2'>{pos3}</div>
    //             <div class='passDisplay' id='pass3'>{pos4}</div>
    //             <div class='passDisplay' id='pass4'>{pos5}</div>
    //             <div class='passDisplay' id='pass5'>{pos6}</div>
    //             <div class='passDisplay' id='pass6'>{pos7}</div>
    //             <div class='passDisplay' id='pass7'>{pos8}</div>
    //             <div class='passDisplay' id='pass8'>{pos9}</div>
    //             <div class='passDisplay' id='pass9'>{pos10}</div>
    //             <div class='passDisplay' id='pass10'>{pos11}</div>
    //             <div class='passDisplay' id='pass11'>{pos12}</div>
    //             <div class='passDisplay' id='pass12'>{pos13}</div>
    //             <div class='passDisplay' id='pass13'>{pos14}</div>
    //             <div class='passDisplay' id='pass14'>{pos15}</div>
    //         </div>
    //         <div id="helpButton">
    //         <AwesomeButton
    //                 id='generatePassBtn'
    //                 type="secondary"
    //                 size='large'
    //                 action= ''>Generate Password
    //         </AwesomeButton>
    //     </div>

    //     </div>
    // )    
    // }




export default Display