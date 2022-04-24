import Header from "../componnts/Header";
import Exam from "../componnts/Exam";
import '../assets/style/Page.css';
import {useState} from 'react';
import Alert from 'sweetalert';
const Page = ()=>{


    const [start, setStart] = useState();
    const [gotQuestion, setGotQuestion] = useState(0)
    const [gotQuestion2, setGotQuestion2] = useState(0)
    const [gotQuestion3, setGotQuestion3] = useState(0)
    const [gotQuestion4, setGotQuestion4] = useState(0)
    const [gotQuestion5, setGotQuestion5] = useState(0)
    const [gotQuestion6, setGotQuestion6] = useState(0)
    const [gotQuestion7, setGotQuestion7] = useState(0)
    const [gotQuestion8, setGotQuestion8] = useState(0)
    const [gotQuestion9, setGotQuestion9] = useState(0)
    const [gotQuestion10, setGotQuestion10] = useState(0)
    const [gotQuestion11, setGotQuestion11] = useState(0)
    const [gotQuestion12, setGotQuestion12] = useState(0)
    const [gotQuestion13, setGotQuestion13] = useState(0)
    const [gotQuestion14, setGotQuestion14] = useState(0)
    const [gotQuestion15, setGotQuestion15] = useState(0)
    const [gotQuestion16, setGotQuestion16] = useState(0)
    const [gotQuestion17, setGotQuestion17] = useState(0)
    const [gotQuestion18, setGotQuestion18] = useState(0)
    const [gotQuestion19, setGotQuestion19] = useState(0)
    const [gotQuestion20, setGotQuestion20] = useState(0)
    const [mark, setMark] = useState([])

    const getQuestion = (question)=>{
       
        setMark([...mark, question])
        mark.map(data=> data  === 'q1' ? setGotQuestion( 1) : '')
        mark.map(data=> data  === 'q2' ? setGotQuestion2( 2) : '')
        mark.map(data=> data  === 'q3' ? setGotQuestion3( 3) : '')
        mark.map(data=> data  === 'q4' ? setGotQuestion4( 4) : '')
        mark.map(data=> data  === 'q5' ? setGotQuestion5( 5) : '')
        mark.map(data=> data  === 'q6' ? setGotQuestion6( 6) : '')
        mark.map(data=> data  === 'q7' ? setGotQuestion7( 7) : '')
        mark.map(data=> data  === 'q8' ? setGotQuestion8( 8) : '')
        mark.map(data=> data  === 'q9' ? setGotQuestion9( 9) : '')
        mark.map(data=> data  === 'q10' ? setGotQuestion10( 10) : '')
        mark.map(data=> data  === 'q11' ? setGotQuestion11( 11) : '')
        mark.map(data=> data  === 'q12' ? setGotQuestion12( 12) : '')
        mark.map(data=> data  === 'q13' ? setGotQuestion13( 13) : '')
        mark.map(data=> data  === 'q14' ? setGotQuestion14( 14) : '')
        mark.map(data=> data  === 'q15' ? setGotQuestion15( 15) : '')
        mark.map(data=> data  === 'q16' ? setGotQuestion16( 16) : '')
        mark.map(data=> data  === 'q17' ? setGotQuestion17( 17) : '')
        mark.map(data=> data  === 'q18' ? setGotQuestion18( 18) : '')
        mark.map(data=> data  === 'q19' ? setGotQuestion19( 19) : '')
        mark.map(data=> data  === 'q20' ? setGotQuestion20( 20) : '')
        console.log(gotQuestion)
        console.log(mark)
        
        
    }
    
    

    const handleExam = ()=>{
     
        Alert({
            title : 'Empezar',
            text : 'Esta seguro que quiere empezar su examen',
            icon : 'warning',
            buttons : ['No','Si']
        }).then(respuesta=>{
            if(respuesta){
                Alert({
                    text : 'Start',
                    icon : 'success',
                    buttons : false,
                    timer : '825',
                    
                })
                setStart(!start)
            }else{
                Alert({
                    text : 'Asegurate de estar listo',
                    icon : 'info'
                })
            }
        })
    }
    return(
        <div className='page'>
           {/* {mark} */}
           <div className={`${start ? 'close p-2' : 'exam-documentacion p-3'}`}>
               <div className="exam-documentacion__intro">
                   <h1>Prof. Bradigson nuñez</h1>
                   <h2>Este es el examen teorico de piano </h2>
                   <p>Esete examen consta de 20 preguntas sobre lo que se ha impartido,
                        el mismo tiene un valor
                       de 20p. 
                   </p>
               </div>
               <div>
                   <button className="btn btn-primary" onClick={handleExam}>Empezar Examen</button>
               </div>
           </div>

            {
                start ? (<Exam getQuestion={getQuestion}/> ) : ('')

            }{
                start ? (<Header  state={gotQuestion} q2={gotQuestion2}
                    q3={gotQuestion3} q4={gotQuestion4} q5={gotQuestion5}
                    q6={gotQuestion6} q7={gotQuestion7} q8={gotQuestion8}
                    q9={gotQuestion9} q10={gotQuestion10} q11={gotQuestion11}
                    q12={gotQuestion12} q13={gotQuestion13} q14={gotQuestion14}
                    q15={gotQuestion15} q16={gotQuestion16} q17={gotQuestion17}
                    q18={gotQuestion18} q19={gotQuestion19} q20={gotQuestion20}/>) : ('')
            }
            

        </div>
    )
    
}

export default Page;