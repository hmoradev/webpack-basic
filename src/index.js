import generateJoke from "./joke";
import './styles/main.scss'
import beer from './assets/beer.svg'

const beerImg = document.getElementById('beerImg')
beerImg.src = beer

console.log(generateJoke());