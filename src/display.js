import react, {useState} from 'react';

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




    return(
        <div id='passDisplay'>
                <div class='passDisplay' id='pass0'>{pos1}</div>
                <div class='passDisplay' id='pass1'>{pos2}</div>
                <div class='passDisplay' id='pass2'>{pos3}</div>
                <div class='passDisplay' id='pass3'>{pos4}</div>
                <div class='passDisplay' id='pass4'>{pos5}</div>
                <div class='passDisplay' id='pass5'>{pos6}</div>
                <div class='passDisplay' id='pass6'>{pos7}</div>
                <div class='passDisplay' id='pass7'>{pos8}</div>
                <div class='passDisplay' id='pass8'>{pos9}</div>
                <div class='passDisplay' id='pass9'>{pos10}</div>
                <div class='passDisplay' id='pass10'>{pos11}</div>
                <div class='passDisplay' id='pass11'>{pos12}</div>
                <div class='passDisplay' id='pass12'>{pos13}</div>
                <div class='passDisplay' id='pass13'>{pos14}</div>
                <div class='passDisplay' id='pass14'>{pos15}</div>
        </div>
    )    
    }




export default Display