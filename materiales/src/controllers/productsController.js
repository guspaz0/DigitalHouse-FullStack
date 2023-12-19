const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productService = require('../data/productService.js')

const controller = {
	// Root - Show all products
	index: (req, res) => {
		// Do the magic
		res.render('products', {title: 'update', products: products})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic
		let {id} = req.params
		res.render('detail', { product: products.find((x) => x.id == id)})
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
		let response = productService.create(req.body)
		res.status(200).json(response)
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
		res.render('product-edit-form', {productToEdit: productService.edit(req.params)})
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
		let { id } = req.params
		const editProduct = productService.update(id, req.body)
		res.send(editProduct)
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;