const produtoService = require('../services/produtoService');

function listarProdutos(req, res) {
    const produtos = produtoService.listarTodos();

    if (produtos.length === 0) {
        return res.status(404).json({ sucesso: false, mensagem: "não há produtos cadastrados" });
    }

    return res.status(200).json({ sucesso: true, produtos });
}

function listarProdutoPorId(req, res) {
    const id = parseInt(req.params.id);
    const produto = produtoService.buscarPorId(id);

    if (!produto) {
        return res.status(404).json({ sucesso: false, mensagem: "produto não encontrado" });
    }

    return res.status(200).json({ sucesso: true, produto });
}

function criarProduto(req, res) {
    const { nome, preco } = req.body;
    const novoProduto = produtoService.criar(nome, preco);

    if (!novoProduto) {
        return res.status(400).json({ mensagem: "um ou mais campos estão inválidos" });
    }

    return res.status(201).json({ sucesso: true, produto: novoProduto });
}

function atualizarProduto(req, res) {
    const id = parseInt(req.params.id);
    const { nome, preco } = req.body;
    const produtoAtualizado = produtoService.atualizar(id, nome, preco);

    if (!produtoAtualizado) {
        return res.status(404).json({ sucesso: false, mensagem: "produto não encontrado" });
    }

    return res.status(200).json({ sucesso: true, mensagem: "produto atualizado com sucesso", produto: produtoAtualizado });
}

function deletarProduto(req, res) {
    const id = parseInt(req.params.id);
    const deletado = produtoService.deletar(id);

    if (!deletado) {
        return res.status(404).json({ sucesso: true, mensagem: "produto não encontrado" });
    }

    return res.status(200).json({ sucesso: false, mensagem: "produto excluído com sucesso" });
}

module.exports = {
    listarProdutos,
    listarProdutoPorId,
    criarProduto,
    atualizarProduto,
    deletarProduto
};
