const estabelecimentosJson = []

// POST
const createEstabelecimento = (req,res) => {
    const bodyRequest = req.body;

    const novoEstabelecimento = {
        id:estabelecimentosJson.length +1,
        likes:bodyRequest.likes,
        nome:bodyRequest.nome,
        categoria:bodyRequest.categoria,
        endereco:bodyRequest.endereco,
        numero: 100,
        bairro: bodyRequest.bairro,
        cidade: bodyRequest.cidade,
        telefone: bodyRequest.telefone,
        pagamento:bodyRequest.pagamento
    }

    estabelecimentosJson.push(novoEstabelecimento)

    res.status(201).json({
        "message":"Estabelecimento cadastrado com sucesso",
        "estabelecimento": novoEstabelecimento
    });
}

// GET
const getAll = (req, res) => {
    res.status(200).send(estabelecimentosJson);
}

// GET CORRIGIR 
const getById = (req, res) => {
    idRequest = req.params.id;
    //const {id} = req.params

    estabelecimentoEncontrado = estabelecimentosJson.find( e => e.id === idRequest)

    if(estabelecimentoEncontrado == undefined) {
        res.status(404).send('Estabelecimento não encontrado')
    } else{
        res.status(200).send(estabelecimentoEncontrado)
    }
}

// PUT (Muda tudo) - CORRIGIR
const updateNomeEstabelecimento = (req, res) => {
    idRequest = req.params.idRequest;
    novoNome = req.body.nome;

    let indexEncontrado = estabelecimentosJson.findIndex( e => e.id == idRequest)

    estabelecimentosJson.splice(indexEncontrado, 1,novoNome);
    res.status(200).json({
        "message":"Estabelecimento atualizado com sucesso"
    })

}

// DELETE
const deleteEstabelecimento = (req, res) => {
    idRequest = req.params.id

    indexEncontrado = estabelecimentosJson.findIndex( e => e.id == idRequest)

    estabelecimentosJson.splice(indexEncontrado, 1)

    res.status(200).send("Estabelecimento excluído com sucesso")
}
module.exports = {
    createEstabelecimento,
    getAll,
    updateNomeEstabelecimento,
    deleteEstabelecimento,
    getById
}