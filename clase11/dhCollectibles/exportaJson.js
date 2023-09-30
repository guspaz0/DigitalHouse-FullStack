const fs = require('fs')

let figuras1 = [];
let figuras2 = [];
let figuras3 = [];

let HotToys = ['Spider-Man', 'Hellboy', 'Tony Stark', 'Black Panther', 'Batman', 'Captain America', 'Superman']
let Bandai = ['Gamora', 'Hulk','Thor','Vegeta','Sailor Pluto', 'Sailor Saturn','Wonder Woman']
let StarWars = ['Luke Skywalker','Scout Trooper','Boba fett','Dark Trooper','Kessel Run','Jedi','Ahsoka Tano']

for (const prop in HotToys) {
    figuras1 = [
        ...figuras1,
        {
            marca: 'Hot Toys',
            nombre: HotToys[prop],
            precio: Math.floor(Math.random()*10000),
            stock: Math.floor(Math.random()*100)
        }
    ]
}
for (const prop in Bandai) {
    figuras2 = [
        ...figuras2,
        {
            marca: 'Bandai',
            nombre: Bandai[prop],
            precio: Math.floor(Math.random()*10000),
            stock: Math.floor(Math.random()*100)
        }
    ]
}
for (const prop in StarWars) {
    figuras3 = [
        ...figuras3,
        {
            marca: 'Star Wars',
            nombre: StarWars[prop],
            precio: Math.floor(Math.random()*10000),
            stock: Math.floor(Math.random()*100)
        }
    ]
}


fs.writeFileSync(__dirname+'/datos/figuras1.json',JSON.stringify(figuras1,'','\n'),'utf-8')
fs.writeFileSync(__dirname+'/datos/figuras2.json',JSON.stringify(figuras2,'','\n'),'utf-8')
fs.writeFileSync(__dirname+'/datos/figuras3.json',JSON.stringify(figuras3,'','\n'),'utf-8')

