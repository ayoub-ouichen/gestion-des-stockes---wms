import React, { useState } from 'react'
import API from '../../../services/api'
import { CSpinner } from '@coreui/react';

export default function ListTransfert() {
    const URL = 'http://localhost:3642/'
    const [tampons, setTampons] = useState([]);
    const [entrepots, setEntrepots] = useState([]);
    const [transfert, setTransferts] = useState([]);
    const [displaySpinner, setDisplaySpinner] = useState(false);
    let p = {
        tampon_id : '',
        entrepot_id : '',
        date_heure : ''
    }
    const [parametres, setParametres] = useState(p)

    if(tampons.length == 0) {
        API.get(URL + 'staticdata/getTampons')
        .then(function (response) {
        // handle success
        setTampons(response.data);
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .finally(function () {
        // always executed
        });
    }

    if (entrepots.length == 0) {
        API.get(URL + 'staticdata/getEntrepots')
        .then(function (response) {
            // handle success
            setEntrepots(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    }

    function getTransferts() {
        setDisplaySpinner(true)
        API.post(URL + 'transfert/getTransferts',parametres)
        .then(function (response) {
            // handle success
            setTransferts(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            setDisplaySpinner(false)
        });
    }

    function handleSelectClick(value, index) {
        let parametresCopy = parametres
        parametresCopy[index] = value
        setParametres(parametresCopy)
        getTransferts()
    }

    if (parametres === p) {
        const date_option = new Date();
        const formattedDate = date_option.toISOString().split('T')[0];
        let parametresCopy = parametres
        parametresCopy['date_heure'] = formattedDate
        setParametres(parametresCopy)
        getTransferts()
    }

  return (
    <>
        <div className="row">
            <div className="col">
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Entrepot : </label>
                    <select onChange={(e) => handleSelectClick(e.target.value, 'entrepot_id')} className="form-select" id="inputGroupSelect01">
                        <option key={1111} value={''}>--- Vide ---</option>
                        {
                            entrepots.map(ientropt => {
                                return <option key={ientropt.id} value={ientropt.id}>{ientropt.name}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="col">
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupSelect02">Tampon : </label>
                    <select onChange={(e) => handleSelectClick(e.target.value, 'tampon_id')} className="form-select" id="inputGroupSelect02">
                        <option key={1111} value={''}>--- Vide ---</option>
                        {
                            tampons.map(itampon => {
                                return <option key={itampon.id} value={itampon.id}>{itampon.name}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="col">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                <span className="input-group-text">Journée : </span>
                </div>
                <input value={ parametres.date_heure } onChange={(e) => handleSelectClick(e.target.value, 'date_heure')} type="date" className="form-control" id="from-date" aria-describedby="date-design-prepend" />
            </div>
            </div>
        </div>
        <div className="table-responsive" style={{borderRadius: '5px'}}> 
            <table className="table table-hover table-bordered table-light border-dark" key={1}>
                <thead className=' table-dark'>
                    <tr>
                        <th scope={"col"}>Date</th>
                        <th scope={"col"}>ID Produit</th>
                        <th scope={"col"}>Produit</th>
                        <th scope={"col"}>Quantité</th>
                        <th scope={"col"}>Entrepot</th>
                        <th scope={"col"}>Tampon</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        displaySpinner === true ?
                        <tr><td colSpan={6}><CSpinner /></td></tr>
                        :
                        transfert.map((transfert, index) => {
                            return (
                                <tr key={index}>
                                    <td>{transfert.date_heure}</td>
                                    <td>{transfert.id}</td>
                                    <td>{transfert.name}</td>
                                    <td>{transfert.quantite}</td>
                                    <td>{transfert.itampons[0].name}</td>
                                    <td>{transfert.ientrepots[0].name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}
