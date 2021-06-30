let cards = document.querySelectorAll('.card');
//console.log(cards);
let reload = document.querySelector('button');

let flipped = false;
let firstFlip;
let secondFlip;
let boardLocked = false;

reload.addEventListener("click", refreshPage)

function refreshPage(){
  window.location.reload();
}

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
  if (boardLocked) return; //if board locked from 2 curently flipped
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

(function shuffle() {
  cards.forEach(card=> {
    let position = Math.floor(Math.random() * 12);
    card.style.order = position;
  })
})();


// starts here, add eventlistener onclick and call flip
for (let i = 0; i < cards.length; i ++) {
  cards[i].addEventListener("click", flip)
}


// cards.forEach(card => card.addEventListener('click', flip));

