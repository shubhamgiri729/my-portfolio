import React,{useState,useEffect} from 'react';
import './Home.css';
import myphoto from './icons/myphoto.png';
import insta from '../src/icons/instagram.png';
import github from '../src/icons/github.png';
import linkedin from '../src/icons/linkedin.png';
import youtube from '../src/icons/youtube.png';


export default function Myport(props) {
  const [showImage,setShowImage]=useState(false);

  useEffect(()=>{
    const visibility=setTimeout(()=>{
      setShowImage(true);
    },500);
    return()=>clearTimeout(visibility);
  },[]);
  return (
    <>
    <section id='home'>
    <div className='info-container'>
      <div className='img-container'>
        {showImage && (
          <img src={myphoto} alt='shubham' className='img'></img>
        )}
      </div>
      <div className="info">
        <p className='name'>Hello, I’m {props.name}</p>
        <h1>{props.role}</h1>
        <p className='intro'>I’m a web developer focused on building responsive frontends and scalable backends. With practical experience in HTML, CSS, JavaScript, and React on the frontend, and Python, SQL, and basic Java on the backend, I enjoy creating web solutions that are both functional and user-friendly. Passionate about turning ideas into real-world applications, I thrive on solving problems, learning new technologies, and delivering end-to-end experiences that provide real value.</p>
      </div>  
    </div>
    <div className="social">
      <a className='insta link' href='https://www.instagram.com/shubhamgiri729/' target='_blank' rel="noreferrer"><img src={insta} alt='insta' height={50} width={50}/></a>
      <a className='linkedin link' href='https://www.linkedin.com/in/shubham-giri-96931628a/' target='_blank' rel="noreferrer"><img src={linkedin} alt='linkedin' height={50} width={50}/></a>
      <a className='github link' href='https://github.com/shubhamgiri729' target='_blank' rel="noreferrer"><img src={github} alt='facebook'height={50} width={50}/></a>
      <a className='youtube link' href='https://www.youtube.com/@ShubhamGiriAcademy/featured' target='_blank' rel="noreferrer"><img src={youtube} alt='youtube' height={50} width={50}/></a>
    </div>
    </section>
    </>
  );
}
