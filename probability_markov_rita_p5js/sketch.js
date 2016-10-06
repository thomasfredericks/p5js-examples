// Cet exemple nécessite la logithèque rita.js

var markov = new RiMarkov(4);
var sourceText;



function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);


  markov.loadText(" C'est la propriété caractéristique d'une chaîne de Markov : la prédiction du futur à partir du présent n'est pas rendue plus précise par des éléments d'information supplémentaires concernant le passé , car toute l'information utile pour la prédiction du futur est contenue dans l'état présent du processus . Dans la suite de l'article on ne considèrera que des chaînes de Markov homogènes. Pour une application intéressante des chaînes de Markov non homogènes à l'optimisation combinatoire , voir l'article Recuit simulé. Il existe une propriété de Markov forte, liée à la notion de temps d'arrêt : cette propriété de Markov forte est cruciale pour la démonstration de résultats importants . Elle est énoncée dans l'article « Propriété de Markov ».En mathématiques , une chaîne de Markov est un processus de Markov à temps discret , ou à temps discret et à espace d'états discret. Un processus de Markov est un processus stochastique possédant la propriété de Markov : l'information utile pour la prédiction du futur est entièrement contenue dans l'état présent du processus et n'est pas dépendante des états antérieurs. Les processus de Markov portent le nom de leur découvreur, Andreï Markov .");

  sentences = markov.generateSentences(1);
  
  textSize(32);
}

function mouseClicked() {
  sentences = markov.generateSentences(1);
}

function draw() {
  background(0, 0, 100);

  text(sentences, 0, 10, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}