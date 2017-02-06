
var contenu = {
    name: 'La grande bouffe',
    description: 'Venez goûter nos plats préparés avec amours et bienveillance. Notre chef Gertrude viendra probablement vous serrer la main. <br>Vous pourrez échanger avec cette passionnée de cuisine et repartir avec des conseils pour reproduire sa cuisine inimitable',
    images: [
        'https://media-cdn.tripadvisor.com/media/photo-s/02/1b/9a/bf/le-grande-bouffe.jpg',
        'http://www.epicurien.be/img/recettes-cuisines/20130928_poulet_morilles-500.jpg',
        'https://i1.wp.com/cotesoleils.fr/wp-content/uploads/2015/06/tajine-agneau-et-pruneaux-algc3a9rie1.jpg',
        'http://scrat.hellocoton.fr/img/guide/recette-ma-salade-tiede-de-chou-kale-et-lentilles-patates-douces-et-saumon-fume-18911644.jpg'
    ],
    baseline: 'La promo7 vous régale',
    infosAdresse:'Venez nous rencontrer',
    adresse: '51, rue de Vincennes',
    localite: '93100 Montreuil',
    carteGeo: 'Nous trouver',
    carte: [{
        name: 'Poulet aux morilles',
        acheter:'commander',
        image: 'http://www.epicurien.be/img/recettes-cuisines/20130928_poulet_morilles-500.jpg',
        description: 'Un grand classique le poulet de Bresse aux morilles et à la crème. Si vous ne trouvez pas de volaille de Bresse, choisissez un bon poulet fermier, élevé aux grains et qui a vécu en liberté dans les champs.',
        price: '23 €',

    }, {
        name: 'Tagine aux pruneaux',
        acheter:'commander',
        image: 'https://i1.wp.com/cotesoleils.fr/wp-content/uploads/2015/06/tajine-agneau-et-pruneaux-algc3a9rie1.jpg',
        description: 'Un des plus célèbres Tajines Marocains, servi avec une délicieuse viande de veau et des pruneaux issus de l\'agriculture biologique',
        price: '18 €',

    }, {
        name: 'Salade de saison',
        acheter:'commander',
        image: 'http://scrat.hellocoton.fr/img/guide/recette-ma-salade-tiede-de-chou-kale-et-lentilles-patates-douces-et-saumon-fume-18911644.jpg',
        description: 'Toujours à l\'heure, la salade de saison vous régalera avec ses légumes',
        price: '14 €',

    }, ]
}
document.getElementById('titreSite').innerHTML = contenu.name;
document.getElementById('accroche').innerHTML = contenu.name;
document.getElementById('descriptif').innerHTML = contenu.description;
document.getElementById('nousSituer').innerHTML = contenu.carteGeo;

var contenuCarteBoucle = document.getElementById('container2');
var contenuCarte = contenu.carte;

function creationPlat() {
    for (var i = 0; i < contenuCarte.length; i++) {
        var ligne = document.createElement('div');
        var ligneVide = document.createElement('div');
        var colonneImage = document.createElement('div');
        var colonneVide = document.createElement('div');
        var img = document.createElement('img');
        var colonneContenu = document.createElement('div');
        var titre = document.createElement('h3');
        var descriptif = document.createElement('p');
        var prix = document.createElement('div');
        var commande = document.createElement('div');


        ligne.classList.add("row","col-xs-12", "col-sm-12");
        colonneImage.classList.add("col-xs-12","col-sm-3");
        img.src = contenuCarte[i].image;
        img.classList.add("img-responsive","habillageImage");
        colonneVide.classList.add("col-xs-3","col-sm-3");
        colonneContenu.classList.add("col-xs-12","col-sm-4");
        titre.innerHTML = contenuCarte[i].name;
        descriptif.innerHTML = contenuCarte[i].description;
        ligneVide.classList.add("taille");
        prix.classList.add("designPrix","col-xs-6","col-sm-2");
        prix.innerHTML = contenuCarte[i].price;
        commande.classList.add("designPrix","col-xs-6","col-sm-3");
        commande.innerHTML = contenuCarte[i].acheter;



        container2.appendChild(ligne);
        ligne.appendChild(colonneVide);
        ligne.appendChild(colonneImage);
        ligne.appendChild(colonneContenu);
        ligne.appendChild(ligneVide);
        colonneImage.appendChild(img);
        colonneContenu.appendChild(titre);
        colonneContenu.appendChild(descriptif);
        colonneContenu.appendChild(prix);
        colonneContenu.appendChild(commande);

    }
};
creationPlat();

document.getElementById('titreAdresse').innerHTML = contenu.infosAdresse;
document.getElementById('rue').innerHTML = contenu.adresse;
document.getElementById('localite').innerHTML = contenu.localite;
