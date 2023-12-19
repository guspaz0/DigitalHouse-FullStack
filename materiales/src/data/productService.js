
//const products = require('./productsDataBase.json')
const fs = require('fs')
const path = require('path')

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productService = {
    edit: function (data) {
		let { id } = data
		let productToEdit = products.find((x) => x.id == id)
		return productToEdit
	},
    update: function (id, data) {
		let keys = Object.keys(data)
		let productData = products.find((prod) => prod.id == id)
		for (let i in keys) {
			if (productData.hasOwnProperty(keys[i])) {
				productData = {
					...productData,
					[keys[i]]: data[keys[i]]
				}
			}
			if(i == keys.length-1) {
				const updateProduct = [...products, productData].sort((a,b) => a.id - b.id)
				fs.writeFileSync(productsFilePath, JSON.stringify(updateProduct,0,4),'utf-8')
				return productData
			}
		}
    },
	create: function (data) {
		const id = Math.max(...products.map((x) => {return x.id}))
		let newProducts = [...products, { id, ...data }]
		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts,0,4), 'utf-8')
		return  {id, ...data}
	}
};

module.exports = productService