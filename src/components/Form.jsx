import React, { useState } from 'react'
import style from '../style/form.module.css'
import ViewDarta from './ViewDarta'
import { useNavigate } from 'react-router-dom';

export default function Form() {

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const navigate =  useNavigate();

  const handleForm = (e) =>{
    e.preventDefault();

    if(password == '12345'){
      navigate('/ViewDarta')
    }else{
      alert(' no dio chavo')
    }



  }


    
  return (
    <div className={style.container}>
    <div className={style.formCard}>
      <div className={style.profileIcon}>
        <i className="fas fa-user"></i>
      </div>
      <form>
        <label htmlFor="usuario">Usuario</label>
        <input type="text" id="usuario" 
        onChange={(e)=> setUsuario(e.target.value)}
        placeholder="Ingresa tu usuario" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" 
        onChange={(e)=> setPassword(e.target.value)}
        placeholder="Password" />

        <button  onClick={handleForm} type="submit" className={style.loginButton}>Login</button>
      </form>
    </div>
  </div>
  )
}
