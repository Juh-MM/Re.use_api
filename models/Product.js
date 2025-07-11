const mongoose = require('mongoose');

const measureSchema = new mongoose.Schema({
    busto: Number,
    cintura: Number,
    quadril: Number,
    comprimento: Number,
    entrepernas: Number,
    largura: Number,
    manga: Number,
}, { _id: false });

const productSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String,
    preco: { type: Number, required: true },
    tamanho: String,
    cor: String,
    composicao: String,
    medidas: measureSchema,
    categoria: {
    type: String,
    enum: ['feminino', 'masculino', 'infantil', 'outros', 'esportivo', 'acessórios', 'calçados'],
    required: true
    },
    criadoEm: { type: Date, default: Date.now },
    imagems: [String]
});

module.exports = mongoose.model('Product', productSchema);
