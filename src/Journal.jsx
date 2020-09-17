import React from 'react'
import { AppRouter } from './router/AppRouter'
import { Provider } from "react-redux"
import { store } from './store/store'
//Provider provee informacion a todos sus hijos

export const Journal = () => {
    return (
      <Provider store={store}>
            <AppRouter/>
      </Provider>
    )
}
