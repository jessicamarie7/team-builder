import React from "react";

export default function NewPerson(props) {
    const { details } = props

    if (!details) {
        return <h3>Working on fetching your list of coworkers...</h3>
    }

    return (
        <div className='coworker container'>
            <h2>{details.coworker}</h2>
            <p>Department: {details.department}</p>
        </div>
    )
}