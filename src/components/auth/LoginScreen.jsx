import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import{ Link } from "react-router-dom"
import { useForm } from '../../Hook/useForm'
import { setError, removeError } from '../../actions/ui'
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth'
import validator from 'validator'
export const LoginScreen = () => {

    const state = useSelector(state=>state.ui.msgError) 
    const loading = useSelector(state=>state.ui.loading)
    //Este es un hook de react-redux, sirve para hacer dispatch de acciones
    const dispatch = useDispatch();
    const [ formValues,handleInputChange] = useForm({
        email:"dasdas@adsda.com",
        password:"123123",
    })
    const handleSubmit = (e)=>{
        e.preventDefault(e)
        isFormValid() &&
        dispatch(startLoginEmailPassword(email,password))
        
    }
    const isFormValid =()=>{
        if(!validator.isEmail(email)){
        //Aca usamos la libreria validator
        dispatch(setError("Email is not valid"))
        console.log("no")
        return false
    }else if( password.length < 6){
        dispatch(setError("Password shoul be at least 6 characters"))
        return false
    }
    dispatch(removeError())
        return true
    }
    
    const handleGoogleLogin=()=>{
        dispatch(startGoogleLogin())
    }

    const {email,password}= formValues
    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={handleSubmit}>
                {
                state &&(
                <div className="auth__alert-error">
                    {state}
                </div>
                )
                }
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
                 <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={ loading } 
                >
                    Login
                </button>

                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                        onClick={ handleGoogleLogin } 

                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                    <Link 
                        to="/auth/register"
                        className="link">
                            Create New Account
                    </Link>                
            </form>
        </>
    )
}
