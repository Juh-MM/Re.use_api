// controllers/cartController.js
const Cart = require('../models/Cart');

exports.adicionarAoCarrinho = async (req, res) => {
    try {
        const { produtoId, quantidade } = req.body;

        let carrinho = await Cart.findOne();
        if (!carrinho) {
        carrinho = new Cart({ itens: [] });
        }

        const itemExistente = carrinho.itens.find(i => i.produto.equals(produtoId));
        if (itemExistente) {
        itemExistente.quantidade += quantidade;
        } else {
        carrinho.itens.push({ produto: produtoId, quantidade });
        }

        await carrinho.save();
        res.json(carrinho);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};

exports.verCarrinho = async (req, res) => {
    const carrinho = await Cart.findOne().populate('itens.produto');
    res.json(carrinho || { itens: [] });
};

exports.removerDoCarrinho = async (req, res) => {
    try {
        const { produtoId } = req.body;

        let carrinho = await Cart.findOne();
        if (!carrinho) return res.status(404).json({ erro: 'Carrinho não encontrado' });

        carrinho.itens = carrinho.itens.filter(item => !item.produto.equals(produtoId));
        await carrinho.save();

        res.json(carrinho);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};