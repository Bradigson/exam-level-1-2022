import {useState} from 'react';
import '../assets/style/Header.scss';
import Logo from '../assets/imgs/b.png';

const Header = (props)=>{
  
  // console.log(props.state + 'well')
  



    return(
        <header>
          <div className='header-title'>
              <img src={Logo} alt='logo'/>
              <h1>Examen</h1>
          </div>
          <div className='header__exmans-number'>
              <div className='exams'>
                <a className={props.state === 1? 'bg-success text-light' : ''} href='#'>1</a>
                <a  className={props.q2 === 2? 'bg-success text-light' : ''} href='#'>2</a>
                <a className={props.q3 === 3? 'bg-success text-light' : ''}href='#'>3</a>
                <a className={props.q4 === 4? 'bg-success text-light' : ''}href='#'>4</a>
                <a className={props.q5 === 5? 'bg-success text-light' : ''}href='#'>5</a>
                <a className={props.q6 === 6? 'bg-success text-light' : ''}href='#'>6</a>
                <a className={props.q7 === 7? 'bg-success text-light' : ''}href='#'>7</a>
                <a className={props.q8 === 8? 'bg-success text-light' : ''}href='#'>8</a>
                <a className={props.q9 === 9? 'bg-success text-light' : ''}href='#'>9</a>
                <a className={props.q10 === 10? 'bg-success text-light' : ''}href='#'>10</a>
                <a className={props.q11 === 11? 'bg-success text-light' : ''}href='#'>11</a>
                <a className={props.q12 === 12? 'bg-success text-light' : ''}href='#'>12</a>
                <a className={props.q13 === 13? 'bg-success text-light' : ''}href='#'>13</a>
                <a className={props.q14 === 14? 'bg-success text-light' : ''}href='#'>14</a>
                <a className={props.q15 === 15? 'bg-success text-light' : ''}href='#'>15</a>
                <a className={props.q16 === 16? 'bg-success text-light' : ''}href='#'>16</a>
                <a className={props.q17 === 17? 'bg-success text-light' : ''}href='#'>17</a>
                <a className={props.q18 === 18? 'bg-success text-light' : ''}href='#'>18</a>
                <a className={props.q19 === 19? 'bg-success text-light' : ''}href='#'>19</a>
                <a className={props.q20 === 20? 'bg-success text-light' : ''}href='#'>20</a>
              </div>
          </div>

          
        </header>
    )
}

export default Header;