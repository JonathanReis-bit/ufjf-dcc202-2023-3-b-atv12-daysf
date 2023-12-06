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


function transacao(origem, destino, tipo, quantidade){
    if(destino === "pomar"){
            const pessoa = estoque[origem];
            for(let i=0; i<pessoa.length; i++){
                const monte = pessoa[i];
                if(monte.tipo === tipo){
                    monte.qtd -= Math.min(quantidade, monte.qtd);
                }
            }
    }


    if(origem === "pomar"){
            const pessoa = estoque[destino];
            for(let i=0; i<pessoa.length; i++){
                const monte = pessoa[i];
                if(monte.tipo === tipo){
                    monte.qtd += Math.max(quantidade, 0);
                }
            }
    }
}

export {getEstoque, transacao};