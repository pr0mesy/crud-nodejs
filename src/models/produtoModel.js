const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/produtos.json');

function lerArquivo() {
  const data = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(data);
}

function salvarArquivo(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
}

function listarProdutos() {
  const data = lerArquivo();
  return data.produtos;
}

function buscarPorId(id) {
  const data = lerArquivo();
  return data.produtos.find(p => p.id === id);
}

function criarProduto(nome, preco) {
  const data = lerArquivo();
  const novoProduto = { id: data.nextId++, nome, preco };
  data.produtos.push(novoProduto);
  salvarArquivo(data);
  return novoProduto;
}

function atualizarProduto(id, nome, preco) {
  const data = lerArquivo();
  const produto = data.produtos.find(p => p.id === id);
  if (!produto) return null;

  if (nome) produto.nome = nome;
  if (preco) produto.preco = preco;

  salvarArquivo(data);
  return produto;
}

function deletarProduto(id) {
  const data = lerArquivo();
  const index = data.produtos.findIndex(p => p.id === id);
  if (index === -1) return false;

  data.produtos.splice(index, 1);
  salvarArquivo(data);
  return true;
}

module.exports = {
  listarProdutos,
  buscarPorId,
  criarProduto,
  atualizarProduto,
  deletarProduto
};
