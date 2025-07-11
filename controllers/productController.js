const Product = require('../models/Product');

exports.criarProduto = async (req, res) => {
    try {
        const produto = new Product(req.body);
        await produto.save();
        res.status(201).json(produto);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};

exports.listarProdutosPorCategoria = async (req, res) => {
    try {
        const produtos = await Product.find({ categoria: req.params.categoria });
        res.json(produtos);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

exports.listarTodosProdutos = async (req, res) => {
    try {
        const produtos = await Product.find();
        res.json(produtos);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao buscar produtos' });
    }
};
