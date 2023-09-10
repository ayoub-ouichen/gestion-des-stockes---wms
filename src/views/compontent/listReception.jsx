import React, { useState } from 'react'
import API from '../../services/api'

export default function ListReception() {
    const URL = 'http://localhost:3642/'
    const [fournisseurs, setFournisseurs] = useState([]);
    const [entrepots, setEntrepots] = useState([]);
    const [receptions, setReceptions] = useState([]);
    let p = {
        fournisseur_id : '',
        entrepot_id : '',
        date_heure : ''
    }
    const [parametres, setParametres] = useState(p)

    if(fournisseurs.length == 0) {
        API.get(URL + 'staticdata/getFournisseurs')
        .then(function (response) {
        // handle success
        setFournisseurs(response.data);
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

    function getReceptions() {
        API.post(URL + 'reception/getReceptions',parametres)
        .then(function (response) {
            // handle success
            setReceptions(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    }

    function handleSelectClick(value, index) {
        let parametresCopy = parametres
        parametresCopy[index] = value
        setParametres(parametresCopy)
        getReceptions()
    }

    if (parametres === p) {
        const date_option = new Date();
        const formattedDate = date_option.toISOString().split('T')[0];
        let parametresCopy = parametres
        parametresCopy['date_heure'] = formattedDate
        setParametres(parametresCopy)
        getReceptions()
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
                    <label className="input-group-text" htmlFor="inputGroupSelect02">Fournisseur : </label>
                    <select onChange={(e) => handleSelectClick(e.target.value, 'fournisseur_id')} className="form-select" id="inputGroupSelect02">
                        <option key={1111} value={''}>--- Vide ---</option>
                        {
                            fournisseurs.map(ifournisseur => {
                                return <option key={ifournisseur.id} value={ifournisseur.id}>{ifournisseur.name}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <div class="col">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                <span class="input-group-text">Journée : </span>
                </div>
                <input onChange={(e) => handleSelectClick(e.target.value, 'date_heure')} formControlName="date_publication" type="date" class="form-control" id="from-date" aria-describedby="date-design-prepend" />
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
                        <th scope={"col"}>Prix</th>
                        <th scope={"col"}>Valeur</th>
                        <th scope={"col"}>Entrepot</th>
                        <th scope={"col"}>Fournisseur</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        receptions.map((reception, index) => {
                            return (
                                <tr key={index}>
                                    <td>{reception.date_heure}</td>
                                    <td>{reception.id}</td>
                                    <td>{reception.name}</td>
                                    <td>{reception.quantite}</td>
                                    <td>{reception.prix}</td>
                                    <td>{reception.valeur}</td>
                                    <td>{reception.ifournisseurs[0].name}</td>
                                    <td>{reception.ientrepots[0].name}</td>
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
