import React from 'react'
import { JournalEntry } from './JournalEntry'

export const JournalEntries = () => {
    const entries = [1323,15424,5,125,,2]
    return (
        <div className="journal__entries">
            {
                entries.map(e=>(
                    <JournalEntry key={e}/>
                ))
            }
        </div>
    )
}
