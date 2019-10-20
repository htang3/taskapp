import React from 'react'

const task = (props) => {
    return (
        <div className="card text-black bg-light mb-3" 
        Style="max-width: 20rem;"
         >
        <h3 className="card-header">{props.title}</h3>
        <div className="card-body">
         <p className="card-title">Description:{props.description}</p>
        <p className="card-text">Duration: {props.duration}</p>
        <p className="card-text">Assignee: {props.name}</p>
        </div>
        <button type="button" className="btn btn-secondary" onClick={props.edittask}>Edit</button>
        <button type="button" className="btn btn-danger" onClick={props.delete}>Delete</button>
        </div>
    )

}

export default task;