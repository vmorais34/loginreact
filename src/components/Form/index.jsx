import React from "react";
import { useForm } from "react-hook-form";
import Typography from '@material-ui/core/Typography';
import './index.css'

import { connect } from 'react-redux'
import { useState } from "react";

// action
function userLogin(email, password) {
    return {
        // chave ação única
        type: 'USER_LOGIN',
        email,
        password,
    };
} 


function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  const [passwordShow, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShow);
  };
   
  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <Typography component="h2">
        Faça seu Login
      </Typography>
      <div>
        <label className="label-input" htmlFor="email">E-mail</label>
        <input {...register("email", {required:true}) } />
      </div>
      <div>
        <label className="label-input" htmlFor="password">Senha</label>
        <input type={passwordShow ? "text" : "password"} {...register("password", {required:true})} />
        <button className="button-password" onClick={togglePassword}>Show Password</button>
        {/* <input type="checkbox" onClick={showPassword()} />Show Password */}
      </div>
      <input className="submit-button" type="submit" />
    </form>
  );
}

export default connect(state => ({login: state.login}))(App);