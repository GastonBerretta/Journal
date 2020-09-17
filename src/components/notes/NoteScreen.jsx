import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar/>

            <div className="note__content">
            <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                   
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name="body"
                    
                ></textarea>

                        <div className="notes__image">
                            <img 
                                src="https://ep00.epimg.net/cultura/imagenes/2015/12/23/babelia/1450892280_876379_1450893775_noticia_normal.jpg"
                                alt="imagen"
                            />
                        </div>
               
                </div>
            </div>
       
    )
}
