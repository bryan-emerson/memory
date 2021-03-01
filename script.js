console.log('whats good fam')

let cards = document.querySelectorAll('.card');
console.log(cards);
let flipped = false;
let firstFlip;
let secondFlip;

function doesItMatch() {
  if (firstFlip.dataset.language === secondFlip.dataset.language) {
    stopListener();
    return;
  }
  flipBack();
}

function stopListener() {
  firstFlip.removeEventListener('click', flip);
  secondFlip.removeEventListener('click', flip);
}

function flipBack() {
  setTimeout(()=> {
    firstFlip.classList.remove('flip');
    secondFlip.classList.remove('flip');
  }, 2000);
}

function flip() {
  this.classList.add('flip')

  if (flipped !== true) {
    flipped = true;
    firstFlip = this;
    return;
  } else {
    secondFlip = this;
    flipped = false;

    doesItMatch();
  }

}

for (let i = 0; i < cards.length; i ++) {
  cards[i].addEventListener("click", flip)
}

// cards.forEach(card => card.addEventListener('click', flip));

