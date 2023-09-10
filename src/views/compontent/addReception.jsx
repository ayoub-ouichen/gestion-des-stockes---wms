import PRODUCTS from 'src/products'
import API from '../../services/api'
import React, { useState } from 'react'
import Swal from 'sweetalert2/src/sweetalert2.js'
import { Product } from 'src/classes/product'

export default function AddReception() {
    const URL = 'http://localhost:3642/'
    let tab = []
    for (let index = 0; index < 5; index++) {
       let product = new Product()
        tab.push(product)
    }
    const [tableData, setTableData] = useState(tab);
    const [productList, setProductList] = useState([]);
    const [fournisseurs, setFournisseurs] = useState([]);
    const [entrepots, setEntrepots] = useState([]);

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


    function handleChanges(e, column, index2) {
        if (column == 'id' || column == 'name') {
            if(productList.find(predicate => predicate[column] == e)){
                let antiColumn = (column == 'id' ? 'name' : 'id')
                let tableDataCopy = tableData.slice()
                tableDataCopy[index2][column] = productList.find(predicate => predicate[column] == e)[column]
                tableDataCopy[index2][antiColumn] = productList.find(predicate => predicate[column] == e)[antiColumn]
                setTableData(tableDataCopy)
                setProductList(tab)
            } else {
                setProductList(PRODUCTS.filter(predicate => predicate[column].includes(e.toUpperCase() || e.toLowerCase())))
            }
        }
        let tableDataCopy = tableData.slice()
        tableDataCopy[index2][column] = e
        tableDataCopy[index2]['valeur'] = tableDataCopy[index2]['prix'] * tableDataCopy[index2]['quantite']
        setTableData(tableDataCopy)
    }

    function addLine(i) {
        let product =  new Product()
        if (i == -1) {
            let tableDataCopy = tableData.slice()
            tableDataCopy.pop()
            setTableData(tableDataCopy)
        } else {
            setTableData([...tableData, product])
        }
        
    }

    function handleValidation() {
        var go = true;
        let tableDataCopy = tableData.filter(predicate => predicate.id !== "")
        tableDataCopy.forEach(value => {
            if(value.id !== '' && value.valeur == 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'La valeur du ' + value.name + ' égale à zéro'
                  })
                go = false
            }
        })
        if (go) {
            const dateActuelle = new Date();
            const format = dateActuelle.toLocaleString();
            tableDataCopy.forEach(value => value.date_heure = format)
            tableDataCopy.forEach(value => {
                if (value.fournisseur == '') {
                    value.fournisseur = fournisseurs[0]['id']
                }

                if (value.entrepot == '') {
                    value.entrepot = entrepots[0]['id']
                }
            })
            API.post(URL + 'reception/addReception', tableDataCopy)
            .then(function (response) {
                if(response.status == 200) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'La réception est bien enregistrée',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                let tab = []
                for (let index = 0; index < 5; index++) {
                   let product =  new Product()
                    tab.push(product)
                }
                setTableData(tab)
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    function handleSelectClick(value, index) {
        let tableDataCopy = tableData.slice()
        tableDataCopy.forEach(obj => obj[index] = value)
        setTableData(tableDataCopy)
    }

    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Entrepot : </label>
                        <select onChange={(e) => handleSelectClick(e.target.value, 'entrepot')} className="form-select" id="inputGroupSelect01">
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
                        <select onChange={(e) => handleSelectClick(e.target.value, 'fournisseur')} className="form-select" id="inputGroupSelect02">
                            {
                                fournisseurs.map(ifournisseur => {
                                    return <option key={ifournisseur.id} value={ifournisseur.id}>{ifournisseur.name}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className="table-responsive" style={{borderRadius: '5px'}}> 
                <table className="table table-hover table-bordered table-light border-dark" key={1}>
                    <thead className=' table-dark'>
                        <tr>
                            <th scope={"col"}>ID</th>
                            <th scope={"col"}>Produit</th>
                            <th scope={"col"}>Quantité</th>
                            <th scope={"col"}>Prix</th>
                            <th scope={"col"}>Valeur</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((value, index, array) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <input key={index} onChange={e => handleChanges(e.target.value, 'id', index)} value={value.id} className="form-control border-0" type="text" list={'#01' + index}/>
                                            <datalist id={'#01' + index}>
                                                {
                                                    productList.map(product => {
                                                        return <option value={product.id}>{product.id}</option>
                                                    })
                                                }
                                            </datalist>
                                        </td>
                                        <td>
                                            <input key={index} onChange={e => handleChanges(e.target.value, 'name', index)} value={value.name} className="form-control border-0" type="text" list={'#02' + index} />
                                            <datalist id={'#02' + index}>
                                                {
                                                    productList.map(product => {
                                                        return <option value={product.name}>{product.name}</option>
                                                    })
                                                }
                                            </datalist>
                                        </td>
                                        <td><input key={index} onChange={e => handleChanges(e.target.value, 'quantite', index)} value={value.quantite} className="form-control border-0" type="number" /></td>
                                        <td><input key={index} onChange={e => handleChanges(e.target.value, 'prix', index)} value={value.prix} className="form-control border-0" type="number" /></td>
                                        <td><input key={index} value={value.valeur} className="form-control border-0" type="text" readOnly={true} /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="btn-group float-end m-3" role="group" aria-label="Basic example">
                <button onClick={() => addLine(-1)} type="button" className="btn btn-secondary float-end">
                    <i className="fa fa-minus" aria-hidden="true"></i>
                </button>
                <button onClick={() => addLine(1)} type="button" className="btn btn-secondary">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
            </div>
            <button type="button" className="btn btn-secondary float-end m-3" onClick={() => handleValidation()}>
                <i className="fa fa-check" aria-hidden="true"></i> Valider
            </button>
        </>
    )
}
