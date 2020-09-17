import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div
            className="journal__entry-picture"
            style={{
                backgroundSize:"cover",
                backgroundImage:'url(https://ep00.epimg.net/cultura/imagenes/2015/12/23/babelia/1450892280_876379_1450893775_noticia_normal.jpg)'
                
            }}
            >
            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                    </p>
                    <p  className="journal__entry-content">
                        asdasdas dasd asd asdasd asd asds
                    </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>23</h4>
            </div>
        </div>
    )
}
