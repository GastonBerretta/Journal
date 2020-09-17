import React from 'react'
import { JournalEntries } from './JournalEntries'
import {useDispatch} from "react-redux"
import { startLogout } from '../../actions/auth'

export const Sidebar = () => {
    const dispatch = useDispatch()
    const handelLogOut = ()=>{
       dispatch(startLogout())
    }

    return (        
        <aside className="journal__sideBar pointer">
            <div className="journal_sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> Gaston</span>
                </h3>
                <button 
                className="btn"
                onClick={handelLogOut}>
                    Logout
                </button>
            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    New Entry
                </p>
            </div>
            <JournalEntries/>
        </aside>
    )
}
