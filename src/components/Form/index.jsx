import React from "react";
import { useForm } from "react-hook-form";
import Typography from '@material-ui/core/Typography';
import './index.css'

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
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
        <input {...register("password", {required:true})} />
      </div>
      <input className="submit-button" type="submit" />
    </form>
  );
}