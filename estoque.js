let estoque = {
    'joao': [
        {'tipo': 'maca', 'qnt': 1},
        {'tipo': 'pera', 'qnt': 2}

    ],
    'maria': [
        {'tipo': 'maca', 'qnt': 2},
        {'tipo': 'banana', 'qnt': 4}

    ]
};

function getEstoque(){
    return structuredClone(estoque);
}

export {getEstoque};