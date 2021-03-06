//Aca van las acciones de auth, que son simple funciones
import {types} from "../types/types"
import {firebase, googleAuthProvider} from "../firebase/firebase-config"
import { startLoiding, finishLoiding } from "./ui"
//Libreria sweetaler2 para las alertas 
import Swal from 'sweetalert2'


//Accion Asincrona
export const startLoginEmailPassword = (email,password)=>{
    return (dispatch)=>{
        dispatch(startLoiding())
        firebase.auth().signInWithEmailAndPassword(email,password)
             .then(async({user}) =>{
                dispatch(login(user.uid,user.displayName))
                dispatch(finishLoiding())
            })
            .catch(err=>{
                console.log(err)
                dispatch(finishLoiding())
                Swal.fire("Error",err.message,"error")
            })
        
    }
}

export const startRegisterWithEmailPasswordName = (email,password,name) =>{
    return(dispatch)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
             .then(async({user}) =>{
                await user.updateProfile({
                    displayName:name
                })
                dispatch(login(user.uid,user.displayName))
            })
            .catch(err=>{
                console.log(err)
                Swal.fire("Error",err.message,"error")
            })
    }
}
export const startGoogleLogin = ()=>{
    return(dispatch)=>{
        //Este codigo retorna una promesa
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) =>{
                dispatch(login(user.uid,user.displayName))
            })
    }
}
export const login= (uid,displayName)=>{
    return{
        type: types.login,
        payload:{
            uid,
            displayName
        }
    }
}


export  const startLogout = ()=>{
    return async(dispatch)=>{
        await firebase.auth().signOut()
        dispatch(logout())
    }
}

export const logout = ()=>(
    {
        type: types.logout
    }
)