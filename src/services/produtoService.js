const produtoModel = require('../models/produtoModel');

function listarTodos() {
  return produtoModel.listarProdutos();
}

function buscarPorId(id) {
  return produtoModel.buscarPorId(id);
}

function criar(nome, preco) {
  if (!nome || preco == null) return null;
  return produtoModel.criarProduto(nome, preco);
}

function atualizar(id, nome, preco) {
  return produtoModel.atualizarProduto(id, nome, preco);
}

function deletar(id) {
  return produtoModel.deletarProduto(id);
}

module.exports = {
  listarTodos,
  buscarPorId,
  criar,
  atualizar,
  deletar
};
