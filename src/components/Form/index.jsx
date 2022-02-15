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
      <input {...register("email", {required:true}) } />
      <input {...register("password", {required:true})} />
      <input className="submit-button" type="submit" />
    </form>
  );
}