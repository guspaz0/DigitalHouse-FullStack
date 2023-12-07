const products = require('./productsDataBase.json')

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
			if(i == keys.length-1) return productData
		}
    },
};

module.exports = productService