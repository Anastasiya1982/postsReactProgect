import {useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useState, useContext } from 'react';
import MyButton from '../components/MyButton/button';
import MyInput from '../components/MyInput/myInput';
import  '../App.css';

const LoginPage = () => {
  const [name,setName]=useState('');
  const [password,setPassword]=useState('')
  const  location=useLocation();
  const navigate=useNavigate()

  const {setIsAuth} =useContext(AuthContext);
  

  const fromPage=location.state?.from?.pathname;

  function onChangeUsername(e) {
    setName(e.target.value)
}

console.log(fromPage)

  const login=(e)=>{
     e.preventDefault();
    //  console.log({
    //   name, password
    //  });
     setIsAuth(true);
     console.log(name);
     localStorage.setItem('auth', name)
     navigate(fromPage)
  }

    return <div>
      <h1>Its LoginPage page. You need ti login 
      </h1>
   <form onSubmit={login} className='login-form'>
    <MyInput type='text' placeholder='Введите имя' value={name} onChange={onChangeUsername}/>
    <MyInput type='password' placeholder='Введите пароль'  value={password} onChange={e=>setPassword(e.target.value)}/>
    <MyButton >Login</MyButton>
   </form>

    </div>;

     
  };
  export default LoginPage;