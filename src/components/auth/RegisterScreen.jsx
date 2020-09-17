import React from 'react'
import{ Link } from "react-router-dom"
import { useForm } from '../../Hook/useForm'
import validator from 'validator'
import {useDispatch, useSelector} from "react-redux"
import { setError, removeError } from '../../actions/ui'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'
export const RegisterScreen = () => {

    const dispatch = useDispatch();

    //Para agarrar una parte del state;
    const state = useSelector(state=>state.ui.msgError) 
    const [ formValues,handleInputChange] = useForm({
        name:"Gaston",
        email:"dasdas@adsda.com",
        password:"123123",
        password2:"123123"
    })
    const handleSubmit = (e)=>{
        e.preventDefault(e)
        //Validacion del formulario
        if ( isFormValid() ) {
            dispatch( startRegisterWithEmailPasswordName(email, password, name) );
            console.log("Formulario Correcto")
        }
    }

    const isFormValid =()=>{
        if(name.trim().length===0){
            dispatch(setError("Name is Required"))
            return false
        }else if(!validator.isEmail(email)){
            //Aca usamos la libreria validator
            dispatch(setError("Email is not valid"))
            return false
        }else if(password !== password2  || password.length < 6){
            dispatch(setError("Password shoul be at least 6 characters and match each othe"))
            return false
        }
        dispatch(removeError())
            return true
        }
    
    const {name,email,password,password2}= formValues
    return (
        <>
        <h3 className="auth__title">Register</h3>
        <form
        onSubmit={handleSubmit}>
            {
                state &&(
                <div className="auth__alert-error">
                    {state}
                </div>
                )
            }
            
        <input 
            type="text"
            placeholder="Nombre"
            name="name"
            className="auth__input"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
            />
            <input 
            type="text"
            placeholder="Mail"
            name="email"
            className="auth__input"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
            />
             <input 
            type="password"
            placeholder="Contraseña"
            name="password"
            className="auth__input"
            value={password}
            onChange={handleInputChange}
            />
            <input 
            type="password"
            placeholder="Repetir Contraseña"
            name="password2"
            className="auth__input"
            value={password2}
            onChange={handleInputChange}
            />
             <button
                type="submit"
                className="btn btn-primary btn-block mb-5"
               /*  disabled={ loading } */
            >
                Register
            </button>

                <Link 
                    to="/auth/login"
                    className="link">
                        Alredy register?
                </Link>                
        </form>
    </>
    )
}
