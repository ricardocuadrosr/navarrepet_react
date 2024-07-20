import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../state/Auth/Action';

const LoginForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event)=>{

        event.preventDefault()

        const data = new FormData(event.currentTarget);

        const userData = {
            email:data.get("email"),
            password:data.get("password"),
        }
        dispatch(login(userData))
        console.log("userData", userData);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField required id='email' name='email' label='Correo' fullWidth autoComplete='email'/>
                </Grid>
                <Grid item xs={12}>
                    <TextField required id='password' name='password' label='Contraseña' fullWidth autoComplete='password'/>
                </Grid>
                <Grid item xs={12}>
                    <Button className='bg-[#383c44] w-full' type='submit' variant='contained' size='large' sx={{padding: ".8rem 0", bgcolor:"#383c44"}}>
                        Ingresar
                    </Button>
                </Grid>
            </Grid>
        </form>
        <div className='flex justify-center flex-col items-center'>
            <div className='py-3 flex items-center'>
                <p>¿No tienes cuenta? </p>
                <Button onClick={()=>navigate("/register")} className='ml-5' size='small'>
                    Registrar
                </Button>
            </div>
        </div>
    </div>
  )
}

export default LoginForm