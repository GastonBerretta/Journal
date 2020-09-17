import {createStore, combineReducers, applyMiddleware,compose} from 'redux'; 
import { authReducer } from '../reducers/authReduce';
import thunk from 'redux-thunk';
import { uiReducer } from '../reducers/uiReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui:uiReducer
})

//CreateStore crea el store, solo puede recibir un reducer, por eso se manda combineReducer para poder mandar muchos reducers
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    ))

//El segundo argunmento lo saque de google chrome para usar la dependencia de redux, despues para usar thunk, tuvimos que sacar este 2do argumento y lo pusimos mas arriba como una constante,la llamamos ahora y le pasamos el middleware pedido para utlizar thunk
//Thunk se usa para manejar acciones asincronas en nuestor store