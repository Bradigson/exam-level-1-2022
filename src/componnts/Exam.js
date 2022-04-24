import {useState} from 'react';
import '../assets/style/Exam.scss';
import { preguntas } from '../contenido/Preguntas';
import Alert from 'sweetalert';
import app from '../firebase/Credenciales';
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore';
const dataBase = getFirestore(app);

const Exam = (props)=>{
 
    const [question, setQuestion] = useState({});
    const [puntos, setPuntos] = useState()
   
    const handleChange = (e)=>{
        setQuestion({
            ...question,
            [e.target.name] : e.target.value
        })


                
    }
 
    
  
    const handleSubmit = async(e)=>{
        e.preventDefault();

        let acumulado = 0;
        let result;
        if(question.q1 === 'b'){
            acumulado++;
            
        }

        if(question.q2 === 'a'){
            acumulado++;
            
        }

        if(question.q3 === 'c'){
            acumulado++;
        }

        if(question.q4 === 'd'){
            acumulado++;
        }

        if(question.q5 === 'c'){
            acumulado++
        }

        if(question.q6 === 'b'){
            acumulado++;
        }
        
        if(question.q7 === 'c'){
            acumulado++;
        }


        if(question.q8 === 'c'){
            acumulado++;
        }


        if(question.q9 === 'd'){
            acumulado++;
        }


        if(question.q10 === 'a'){
            acumulado++;
        }

        if(question.q11 === 'b'){
            acumulado++;
        }

        if(question.q12 === 'a'){
            acumulado++;
        }

        if(question.q13 === 'b'){
            acumulado++;
        }

        if(question.q14 === 'a'){
            acumulado++;
        }

        if(question.q15 === 'c'){
            acumulado++;
        }

        if(question.q16 === 'c'){
            acumulado++;
        }


        if(question.q17 === 'a'){
            acumulado++;
        }

        if(question.q18 === 'd'){
            acumulado++;
        }

        if(question.q19 === 'd'){
            acumulado++;
        }

        if(question.q20 === 'a'){
            acumulado++;
        }

        
        setPuntos(acumulado);
        console.log(acumulado)

        try{
            await addDoc(collection(dataBase, 'nicolas'),{
                puntos
            })
        }catch(err){
            console.log(err)
        }

    }


    
    return(
        <form className='container exam-form' onSubmit={handleSubmit}>
            
            <div className='prguntas-contenedor'>
                <div className="exam__opciones" >
                    <p>{preguntas.q1}</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q1'value='a' onChange={handleChange}/>
                    A. Los dedos que se les asignan a los número.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q1'value='b' onChange={handleChange}/>
                    B. Los número que se les asignan a los dedos de las manos.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q1'value='c' onChange={handleChange}/>
                    C. Escribir en el teclado de un computador.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q1'value='d' onChange={handleChange}/>
                    D. A B y C son correctas.</p>
                </div>

                
                <div className="exam__opciones" >
                    <p>{preguntas.q2}</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q2'value='a' onChange={handleChange}/>
                    A. La representación grafica de un acorde.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q2'value='b' onChange={handleChange}/>
                    B. La sucesión de tres sonidos.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q2'value='c'onChange={handleChange}/>
                    C. Una escala musical.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q2'value='d'onChange={handleChange}/>
                    D. Todo lo que nuestro oido puede percibir.</p>
                </div>


                <div className="exam__opciones" >
                    <p>{preguntas.q3}</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q3'value='a'onChange={handleChange}/>
                    A. Ambas son figuas musicales.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q3'value='b'onChange={handleChange}/>
                    B. No existe diferencia entre ambas.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q3'value='c'onChange={handleChange}/>
                    C. Los cifrados representas los acordes, y las notas los sonidos musicales.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q3'value='d'onChange={handleChange}/>
                    D. Loas cifrados pertenecen a las escalas musicales, y las notas a las figuras musicales.</p>
                </div>


                <div className="exam__opciones" >
                    <p>{preguntas.q4}</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q4'value='a'onChange={handleChange}/>
                    A. Gm.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q4'value='b'onChange={handleChange}/>
                    B. F#°.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q4'value='c'onChange={handleChange}/>
                    C. Abm.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q4'value='d'onChange={handleChange}/>
                    D. E°.</p>
                </div>


                <div className="exam__opciones" >
                    <p>{preguntas.q5}</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q5'value='a'onChange={handleChange}/>
                    A. Lo que nos indican cuando una escala es mayor o menor.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q5'value='b'onChange={handleChange}/>
                    B. La sucesión de 12 sonidos musicales.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q5'value='c'onChange={handleChange}/>
                    C. El orden jerárquico de los acordes de una escala musical, y nos indican cuales serian mayores y cuales menores.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q5'value='d'onChange={handleChange}/>
                    D. Los acordes musicales.</p>
                </div>




                <div className="exam__opciones" >
                    <p>{preguntas.q6}</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q6'value='a'onChange={handleChange}/>
                    A. A la mano derecha.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q6'value='b'onChange={handleChange}/>
                    B. A la mano izquierda.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q6'value='c'onChange={handleChange}/>
                    C. A y B son correctas.</p>
                </div>



                <div className="exam__opciones" >
                    <p>{preguntas.q7}</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q7'value='a' onChange={handleChange}/>
                    A. Do#.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q7'value='b'onChange={handleChange}/>
                    B. Re.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q7'value='c'onChange={handleChange}/>
                    C. Fa.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q7'value='d'onChange={handleChange}/>
                    D. Mi#.</p>
                </div>


                <div className="exam__opciones" >
                    <p>{preguntas.q8}</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q8'value='a'onChange={handleChange}/>
                    A. 8 tiempos.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q8'value='b'onChange={handleChange}/>
                    B. 2 tiempos.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q8'value='c'onChange={handleChange}/>
                    C. 3 teimpos.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q8'value='d'onChange={handleChange}/>
                    D. Todas estan correctas.</p>
                </div>


                <div className="exam__opciones" >
                    <p>{preguntas.q9}</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q9'value='a'onChange={handleChange}/>
                    A. Do Re Mi.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q9'value='b'onChange={handleChange}/>
                    B. Do Mi Sol.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q9'value='c'onChange={handleChange}/>
                    C. Do Fa La.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q9'value='d'onChange={handleChange}/>
                    D. Do Sol Do.</p>
                </div>


                <div className="exam__opciones" >
                    <p>{preguntas.q10}</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q10'value='a'onChange={handleChange}/>
                    A. Re Fa# Si.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q10'value='b'onChange={handleChange}/>
                    B. Si Fa# La.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q10'value='c'onChange={handleChange}/>
                    C. Fa# Si Re.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q10'value='d'onChange={handleChange}/>
                    D. Si Fa#  Re.</p>
                </div>



                <div className="exam__opciones" >
                    <p>{preguntas.q11}</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q11'value='a'onChange={handleChange}/>
                    A. Fa# La Do#.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q11'value='b'onChange={handleChange}/>
                    B. No existe.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q11'value='c'onChange={handleChange}/>
                    C. Mi Fa# La Do#.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q11'value='d'onChange={handleChange}/>
                    D. A y C son correctas.</p>
                </div>


                <div className="exam__opciones" >
                    <p>{preguntas.q12}</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q12'value='a'onChange={handleChange}/>
                    A. Sol Sib Re.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q12'value='b'onChange={handleChange}/>
                    B. Do Mi Sol.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q12'value='c'onChange={handleChange}/>
                    C. La Do# Mi.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q12'value='d'onChange={handleChange}/>
                    D. Sib Re Sol.</p>
                </div>


                <div className="exam__opciones" >
                    <p>{preguntas.q13}</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q13'value='a'onChange={handleChange}/>
                    A. Dm.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q13'value='b'onChange={handleChange}/>
                    B. D primera inversion.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q13'value='c'onChange={handleChange}/>
                    C. G prmera inversion .</p>
                </div>


                <div className="exam__opciones" >
                    <p>{preguntas.q14}</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q14'value='a'onChange={handleChange}/>
                    A. La sucesión de 7 sonidos donde se repite el primero.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q14'value='b'onChange={handleChange}/>
                    B. El conjunto de 8 notas.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q14'value='c'onChange={handleChange}/>
                    C. Una sucesión de tres sonidos.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q14'value='d'onChange={handleChange}/>
                    D. Todas son correctas.</p>
                </div>


                <div className="exam__opciones" >
                    <p>{preguntas.q15}</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q15'value='a'onChange={handleChange}/>
                    A. La escala menor de mi.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q15'value='b'onChange={handleChange}/>
                    B. La escala mayor de re.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q15'value='c'onChange={handleChange}/>
                    C. La escala de mi mayor.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q15'value='d'onChange={handleChange}/>
                    D. La escala de F mayor.</p>
                </div>


                <div className="exam__opciones" >
                    <p>{preguntas.q16}</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q16'value='a'onChange={handleChange}/>
                    A. C#m.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q16'value='b'onChange={handleChange}/>
                    B. A.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q16'value='c'onChange={handleChange}/>
                    C. C.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q16'value='d'onChange={handleChange}/>
                    D. Bb.</p>
                </div>


                <div className="exam__opciones" >
                    <p>{preguntas.q17}</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q17'value='a'onChange={handleChange}/>
                    A. F.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q17'value='b'onChange={handleChange}/>
                    B. G.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q17'value='c'onChange={handleChange}/>
                    C. Bm.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q17'value='d'onChange={handleChange}/>
                    D. Todas son correctas.</p>
                </div>

                
                <div className="exam__opciones" >
                    <p>{preguntas.q18}</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q18'value='a'onChange={handleChange}/>
                    A. Em.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q18'value='b'onChange={handleChange}/>
                    B. Cm.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q18'value='c'onChange={handleChange}/>
                    C. G#m.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q18'value='d'onChange={handleChange}/>
                    D. F#m.</p>
                </div>


                <div className="exam__opciones" >
                    <p>{preguntas.q19}</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q19'value='a'onChange={handleChange}/>
                    A. 5 sonidos.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q19'value='b'onChange={handleChange}/>
                    B. Por una escala musical.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q19'value='c'onChange={handleChange}/>
                    C. Por las notas y figuras musicales.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q19'value='d'onChange={handleChange}/>
                    D. Por tres sonidos.</p>
                </div>


                <div className="exam__opciones" >
                    <p>{preguntas.q20}</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q20'value='a'onChange={handleChange}/>
                    A. A la representacion grafica de los acordes.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q20'value='b'onChange={handleChange}/>
                    B. A la sucesión de tres acordes.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q20'value='c'onChange={handleChange}/>
                    C. A los grados musicales.</p>
                    <p className='form-check'><input type='radio' className='form-check-input' name='q20'value='d'onChange={handleChange}/>
                    D. Todas son correctas.</p>
                </div>
            <div className=' pb-4'>
                <button className='btn btn-success'>Terminar</button>
            </div>
            </div>

        </form>
    )
}

export default Exam;