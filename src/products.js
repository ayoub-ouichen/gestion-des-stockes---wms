const PRODUCTS = [
        {
            "id": "E178456",
            "name": "FEUILLARD BLEU",
            "entrepot": "AL_EM_PCCF",
            "unite": "M",
            "taille": {
                "x": 10,
                "y": 0.05,
                "z": null    
            },
            "poids": null,
            "prix": 9.56,
            "quantite": 236,
            "categorie": "Emballage",
            "fournisseur": "Billerud"
        },
        {
            "id": "E178457",
            "name": "FEUILLARD BLANC",
            "entrepot": "AL_EM_PCCF",
            "unite": "M",
            "taille": {
                "x": 15,
                "y": 0.07,
                "z": null    
            },
            "poids": null,
            "prix": 8.50,
            "quantite": 130,
            "categorie": "Emballage",
            "fournisseur": "Billerud"
        },
        {
            "id": "E178458",
            "name": "FILM PALETTE ETIRABLE",
            "entrepot": "AL_EM_PCCF",
            "unite": "KG",
            "taille": {
                "x": 450,
                "y": 0.01,
                "z": 1    
            },
            "poids": 10,
            "prix": 23,
            "quantite": 324,
            "categorie": "Emballage",
            "fournisseur": "Billerud"
        },
        {
            "id": "E178459",
            "name": "PALETTE BOIS 3CH",
            "entrepot": "AL_EM_PCCF",
            "unite": "M^2",
            "taille": {
                "x": 1.2,
                "y": 1,
                "z": null    
            },
            "poids": null,
            "prix": 207.61,
            "quantite": 334,
            "categorie": "Emballage",
            "fournisseur": "RMS ROTOMOULAGE"
        },
        {
            "id": "E178461",
            "name": "PALETTE BOIS 6PL",
            "entrepot": "AL_EM_PCCF",
            "unite": "M^2",
            "taille": {
                "x": 1.18,
                "y": 1.03,
                "z": null    
            },
            "poids": null,
            "prix": 129.34,
            "quantite": 233,
            "categorie": "Emballage",
            "fournisseur": "RMS ROTOMOULAGE"
        },
        {
            "id": "E178460",
            "name": "PALETTE PLASTIQUE 3CH",
            "entrepot": "AL_EM_PCCF",
            "unite": "M^2",
            "taille": {
                "x": 1.2,
                "y": 1,
                "z": null    
            },
            "poids": null,
            "prix": 63.00,
            "quantite": 233,
            "categorie": "Emballage",
            "fournisseur": "RMS ROTOMOULAGE"
        },
        {
            "id": "E178462",
            "name": "PALETTE PLASTIQUE 6PL",
            "entrepot": "AL_EM_PCCF",
            "unite": "M^2",
            "taille": {
                "x": 1.18,
                "y": 1.03,
                "z": null    
            },
            "poids": null,
            "prix": 45.00,
            "quantite": 146,
            "categorie": "Emballage",
            "fournisseur": "RMS ROTOMOULAGE"
        },
        {
            "id": "C178461",
            "name": "MINERALE SEL STDR",
            "entrepot": "AL_CH_AMPS",
            "unite": "KG",
            "taille": {
                "x": null,
                "y": null,
                "z": null    
            },
            "poids": 25,
            "prix": 15.00,
            "quantite": 53,
            "categorie": "Chimique",
            "fournisseur": "Labomoderne"
        },
        {
            "id": "C178462",
            "name": "MINERALE SULFATE FER",
            "entrepot": "AL_CH_AMPS",
            "unite": "KG",
            "taille": {
                "x": null,
                "y": null,
                "z": null    
            },
            "poids": 25,
            "prix": 30.00,
            "quantite": 64,
            "categorie": "Chimique",
            "fournisseur": "Labomoderne"
        },
        {
            "id": "C178463",
            "name": "MINERALE MAGNESIE SEMOULETTE",
            "entrepot": "AL_CH_AMPS",
            "unite": "KG",
            "taille": {
                "x": null,
                "y": null,
                "z": null    
            },
            "poids": 50,
            "prix": 55.00,
            "quantite": 42,
            "categorie": "Chimique",
            "fournisseur": "Labomoderne"
        },
        {
            "id": "C032864",
            "name": "MINERALE POTASSIUM CARBONATE",
            "entrepot": "AL_CH_AMPS",
            "unite": "KG",
            "taille": {
                "x": null,
                "y": null,
                "z": null    
            },
            "poids": 25,
            "prix": 33.50,
            "quantite": 36,
            "categorie": "Chimique",
            "fournisseur": "Labomoderne"
        },
        {
            "id": "C032865",
            "name": "ACIDE AMINE AVAILA ZINC",
            "entrepot": "AL_CH_AMPS",
            "unite": "KG",
            "taille": {
                "x": null,
                "y": null,
                "z": null    
            },
            "poids": 25,
            "prix": 13.50,
            "quantite": 56,
            "categorie": "Chimique",
            "fournisseur": "Labomoderne"
        },
        {
            "id": "C032866",
            "name": "ACIDE AMINE AVAILA ZMC",
            "entrepot": "AL_CH_AMPS",
            "unite": "KG",
            "taille": {
                "x": null,
                "y": null,
                "z": null    
            },
            "poids": 25,
            "prix": 12.50,
            "quantite": 65,
            "categorie": "Chimique",
            "fournisseur": "Labomoderne"
        },
        {
            "id": "C032867",
            "name": "ACIDE AMINE AVAILA 0.4",
            "entrepot": "AL_CH_AMPS",
            "unite": "KG",
            "taille": {
                "x": null,
                "y": null,
                "z": null    
            },
            "poids": 27,
            "prix": 9.30,
            "quantite": 47,
            "categorie": "Chimique",
            "fournisseur": "Labomoderne"
        },
        {
            "id": "T232532",
            "name": "ETIQUETTE THERMIQUE L",
            "entrepot": "AL_TC_ESBH",
            "unite": "M^2",
            "taille": {
                "x": 0.038,
                "y": 0.020,
                "z": null    
            },
            "poids": null,
            "prix": 0.01,
            "quantite": 33856,
            "categorie": "conditionnement",
            "fournisseur": "Zebra"
        },
        {
            "id": "T232533",
            "name": "ETIQUETTE THERMIQUE L2",
            "entrepot": "AL_TC_ESBH",
            "unite": "M^2",
            "taille": {
                "x": 0.068,
                "y": 0.043,
                "z": null    
            },
            "poids": null,
            "prix": 0.02,
            "quantite": 56823,
            "categorie": "conditionnement",
            "fournisseur": "Zebra"
        },
        {
            "id": "T232534",
            "name": "ETIQUETTE THERMIQUE LxL",
            "entrepot": "AL_TC_ESBH",
            "unite": "M^2",
            "taille": {
                "x": 0.08,
                "y": 0.08,
                "z": null    
            },
            "poids": null,
            "prix": 0.05,
            "quantite": 10943,
            "categorie": "conditionnement",
            "fournisseur": "Zebra"
        },
        {
            "id": "T232535",
            "name": "ETIQUETTE THERMIQUE BLANCHE",
            "entrepot": "AL_TC_ESBH",
            "unite": "M^2",
            "taille": {
                "x": 0.1,
                "y": 0.15,
                "z": null    
            },
            "poids": null,
            "prix": 0.12,
            "quantite": 7315,
            "categorie": "conditionnement",
            "fournisseur": "Zebra"
        },
        {
            "id": "T232536",
            "name": "SCOTCH TRANSPARENT",
            "entrepot": "AL_TC_ESBH",
            "unite": "M^2",
            "taille": {
                "x": 100,
                "y": 0.5,
                "z": null    
            },
            "poids": null,
            "prix": 4.56,
            "quantite": 2497,
            "categorie": "conditionnement",
            "fournisseur": "Touvis"
        },
        {
            "id": "T232537",
            "name": "SCOTCH BLEU",
            "entrepot": "AL_TC_ESBH",
            "unite": "M^2",
            "taille": {
                "x": 100,
                "y": 0.5,
                "z": null    
            },
            "poids": null,
            "prix": 8.40,
            "quantite": 264,
            "categorie": "conditionnement",
            "fournisseur": "Touvis"
        },
        {
            "id": "T232538",
            "name": "SCOTCH ROUGE",
            "entrepot": "AL_TC_ESBH",
            "unite": "M^2",
            "taille": {
                "x": 500,
                "y": 0.5,
                "z": null    
            },
            "poids": null,
            "prix": 51.75,
            "quantite": 3622,
            "categorie": "conditionnement",
            "fournisseur": "Touvis"
        },
        {
            "id": "T232539",
            "name": "SCOTCH VERT",
            "entrepot": "AL_TC_ESBH",
            "unite": "M^2",
            "taille": {
                "x": 500,
                "y": 0.5,
                "z": null    
            },
            "poids": null,
            "prix": 22.48,
            "quantite": 910,
            "categorie": "conditionnement",
            "fournisseur": "Touvis"
        }
    ]

export default PRODUCTS