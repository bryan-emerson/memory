console.log('whats good fam')

let cards = document.querySelectorAll('.card');
console.log(cards);

function flip() {
  this.classList.toggle("flip")
}

for (let i = 0; i < cards.length; i ++) {
  cards[i].addEventListener("click", flip())
}