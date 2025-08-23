const mongoose = require('mongoose');

const measureSchema = new mongoose.Schema({
    busto: { type: Number, required: false },
    cintura: { type: Number, required: false },
    quadril: { type: Number, required: false },
    comprimento: { type: Number, required: false },
    largura: { type: Number, required: false },
    manga: { type: Number, required: false },
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
    enum: ['feminino', 'masculino', 'infantil', 'outros', 'esportivo', 'acessorios', 'calçados'],
    required: true
    },
    criadoEm: { type: Date, default: Date.now },
    imagens: [String]
});

module.exports = mongoose.model('Product', productSchema);
