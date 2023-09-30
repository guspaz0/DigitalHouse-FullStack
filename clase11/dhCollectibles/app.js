const data = require('./collectibles');

const hottoys = data.HotToys;
const bandai = data.bandai;
const starwars = data.starwars;

const unifiedCollectibles = [
    ...hottoys,
    ...bandai,
    ...starwars
]

const collectibles = {
    figuras: unifiedCollectibles,
    listFigures: function () {
        for (const prop in this.figuras) {
            console.log(this.figuras[prop])
        }
    },
    figuresByBrand: function (marca) {
        return this.figuras.filter((x) => x.marca === marca)
    }
}


//collectibles.listFigures()
console.log(collectibles.figuresByBrand('Bandai'))