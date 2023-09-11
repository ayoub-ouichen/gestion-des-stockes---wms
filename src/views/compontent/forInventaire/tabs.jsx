import React, { useState } from 'react'
import AddInventaire from './addInventaire'
import ListInventaire from './listInventaire'

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
                <AddInventaire />
            </div>
        </div>
        <div className={"card border-top-0" + (visibelty ? " visually-hidden" : "")}>
            <div className="card-body">
                <ListInventaire />
            </div>
        </div>
        </>
    )
}
