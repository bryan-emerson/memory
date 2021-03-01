console.log('whats good fam')

let cards = document.querySelectorAll('.card');
console.log(cards);
let flipped = false;
let firstFlip;
let secondFlip;
let boardLocked = false;

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

  reset();
}

function flipBack() {
  boardLocked = true;
  setTimeout(()=> {
    firstFlip.classList.remove('flip');
    secondFlip.classList.remove('flip');
    reset();
  }, 2000);
}
function reset() {
  [flipped, boardLocked] = [false, false];
  [first, second] = [null, null];
}

function flip() {
  if (boardLocked) return;
  if (this === firstFlip) return;
  this.classList.add('flip')

  if (flipped !== true) {
    flipped = true;
    firstFlip = this;
    return;
  } else {
    secondFlip = this;

    doesItMatch();
  }

}

for (let i = 0; i < cards.length; i ++) {
  cards[i].addEventListener("click", flip)
}

// cards.forEach(card => card.addEventListener('click', flip));

