import React, { useState } from 'react'
import AddReception from './addReception'
import ListReception from './listReception'

export default function Tabs() {
    const [visibelty, setVisibelty] = useState(true)
    return (
        <>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className={"nav-link" + (visibelty ? " active" : "")}  style={{cursor: 'pointer'}} onClick={() => setVisibelty(!visibelty)}>Nouveau</a>
            </li>
            <li className="nav-item">
                <a className={"nav-link" + (!visibelty ? " active" : "")} style={{cursor: 'pointer'}} onClick={() => setVisibelty(!visibelty)}>Historique</a>
            </li>
        </ul>
        <div className={"card  border-top-0" + (!visibelty ? " visually-hidden" : "")}>
            <div className="card-body pt-4">
                <AddReception />
            </div>
        </div>
        <div className={"card border-top-0" + (visibelty ? " visually-hidden" : "")}>
            <div className="card-body">
                <ListReception />
            </div>
        </div>
        </>
    )
}
