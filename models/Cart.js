const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    produto: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantidade: { type: Number, default: 1 }
});

const cartSchema = new mongoose.Schema({
    itens: [cartItemSchema],
    criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cart', cartSchema);
