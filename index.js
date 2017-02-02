var contenu = {
    name: 'La bonne bouffe',
    description: 'Venez goûter nos plats préparés avec amours et bienveillance. Notre chef Gertrude viendra probablement vous serrer la main. Vous pourrez échanger avec cette passionnée de cuisine et repartir avec des conseils pour reproduire sa cuisine inimitable',
    images: [
        'https://media-cdn.tripadvisor.com/media/photo-s/02/1b/9a/bf/le-grande-bouffe.jpg',
        'http://www.epicurien.be/img/recettes-cuisines/20130928_poulet_morilles-500.jpg',
        'https://i1.wp.com/cotesoleils.fr/wp-content/uploads/2015/06/tajine-agneau-et-pruneaux-algc3a9rie1.jpg',
        'http://scrat.hellocoton.fr/img/guide/recette-ma-salade-tiede-de-chou-kale-et-lentilles-patates-douces-et-saumon-fume-18911644.jpg'
    ],
    baseline: 'La promo7 vous régale',
    addresse: '51, rue de Vincennes',
    codePostale: '93100',
    ville: 'Montreuil',
    carte: [{
        name: 'Poulet aux morilles',
        image: 'http://www.epicurien.be/img/recettes-cuisines/20130928_poulet_morilles-500.jpg',
        description: 'Un grand classique le poulet de Bresse aux morilles et à la crème. Si vous ne trouvez pas de volaille de Bresse, choisissez un bon poulet fermier, élevé aux grains et qui a vécu en liberté dans les champs.',
        price: '23 €'
    }, {
        name: 'Tagine aux pruneaux',
        image: 'https://i1.wp.com/cotesoleils.fr/wp-content/uploads/2015/06/tajine-agneau-et-pruneaux-algc3a9rie1.jpg',
        description: 'Un des plus célèbres Tajines Marocains, servi avec une délicieuse viande de veau et des pruneaux issus de l\'agriculture biologique',
        price: '18 €'
    }, {
        name: 'Salade de saison',
        image: 'http://scrat.hellocoton.fr/img/guide/recette-ma-salade-tiede-de-chou-kale-et-lentilles-patates-douces-et-saumon-fume-18911644.jpg',
        description: 'Toujours à l\'heure, la salade de saison vous régalera avec ses légumes',
        price: '14 €'
    }, ]
}
document.getElementById('titreSite').innerHTML = contenu.name;
document.getElementById('accroche').innerHTML = contenu.name;
document.getElementById('descriptif').innerHTML = contenu.description;
// document.getElementById('carte').innerHTML = contenu.baseline;

var contenuCarteBoucle = document.getElementById('container2');
var contenuCarte = contenu.carte;

function creationPlat() {
  console.log("contenu carte : " +contenuCarte);
    for (var i = 0; i < contenuCarte.length; i++) {
        var img = document.createElement('img');
        var titre = document.createElement('h3');
        var descriptif = document.createElement('p');

        img.src = contenuCarte[i].image;
        img.classList.add("imgp");
        titre.innerHTML = contenuCarte[i].name;
        descriptif.innerHTML = contenuCarte[i].description;
        contenuCarteBoucle.appendChild(img);
        contenuCarteBoucle.appendChild(titre);
        contenuCarteBoucle.appendChild(descriptif);
    }
};
creationPlat();
// var contenuCarte = contenu.carte;
// document.getElementById('plat1Nom').innerHTML=contenuCarte[0].name;
// document.getElementById('plat2Nom').innerHTML=contenuCarte[1].name;
// document.getElementById('plat3nom').innerHTML=contenuCarte[2].name;
// document.getElementById('plat1Description').innerHTML=contenuCarte[0].description;
// document.getElementById('plat2Description').innerHTML=contenuCarte[1].description;
// document.getElementById('plat3Description').innerHTML=contenuCarte[2].description;
