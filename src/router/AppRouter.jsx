import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
  } from 'react-router-dom';
import {firebase} from "../firebase/firebase-config"
import {JournalScreen} from "../components/journal/JournalScreen"
import {AuthRouter} from "./AuthRouter"
import {useDispatch} from "react-redux"
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
  export const AppRouter = () => {
    const dispatch = useDispatch();

    const [checking,setChecking] = useState(true)

    const [isloggedIm, setIsloggedIm] = useState(false)


    useEffect(()=>{
        //Se dispara cada vez que el estado de la utentificacion cambia
        firebase.auth().onAuthStateChanged( (user)=>{
            
            if(user?.uid){
                 dispatch((login(user.uid,user.displayName)))
                 setIsloggedIm(true)
            }else{
                setIsloggedIm(false)
            }
            setChecking(false)

        } )
    },[dispatch , setChecking])

    if(checking){
        return(
            <h1>Espere....</h1>
        )
    }
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth"
                        component={ AuthRouter }  
                        isAuthenticated={isloggedIm}
                    />

                    <PrivateRoute
                        exact   
                        path="/"
                        isAuthenticated={isloggedIm}
                        component={ JournalScreen }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}