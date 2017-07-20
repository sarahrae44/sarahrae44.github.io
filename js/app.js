$(() => {

  let playerOneScore = 0;
  let playerTwoScore = 0;
  // if decide to use
  // let time = 30;
  let round = 1;
  let modalName = '';
  let modalNameTwo = '';
  //
  // array for holding cards that have already been played
  // let cardsPlayed = [];
  // let firstCardFlipped = [];
  // let secondCardFlipped = [];

  // instructions - will pop up when page is loaded; will have either an okay button or close functionality

  // $('#instructionsButton').on('click', (e) => {
  //   modalName = $('input').val()
  //   // e.currentTarget is button
  //   $(e.currentTarget).parent().css('display', 'none');
  //   showWelcomeMessage();
  // })





// ************************************************************************
let cards = [
  {
    cardImage: 'images/erlich.png'
  },
  {
    cardImage: 'images/erlich2.png'
  },
  {
    cardImage: 'images/richard.png'
  },
  {
    cardImage: 'images/siliconValleyGroup.png'
  },
  {
    cardImage: 'images/siliconValleyLogo.png'
  },
  {
    cardImage: 'images/svGroup.png'
  },
  {
    cardImage: 'images/erlich.png'
  },
  {
    cardImage: 'images/erlich2.png'
  },
  {
    cardImage: 'images/richard.png'
  },
  {
    cardImage: 'images/siliconValleyGroup.png'
  },
  {
    cardImage: 'images/siliconValleyLogo.png'
  },
  {
    cardImage: 'images/svGroup.png'
  }
];

//cardsInPlay array, empty awaiting cards to be played
let cardsInPlay = [];

cards.sort(() => Math.random() * 2 - 1);



// *************************************************************

$('#modalButton').on('click', (e) => {
    modalName = $('#playerOne').val()
    // e.currentTarget is button
    $(e.currentTarget).parent().css('display', 'none');
    showWelcomeMessage();
    console.log(modalName);
  })


  $('#modalButtonTwo').on('click', (e) => {
      modalNameTwo = $('#playerTwo').val()
      // e.currentTarget is button
      $(e.currentTarget).parent().css('display', 'none');
      showWelcomeMessageTwo();
      createBoard();
    })


// displays a message;
  const showWelcomeMessage = () => {
    const $messageDiv = $('<div/>').text('Player one: ' + modalName);
    $('header').append($messageDiv)
  }

  const showWelcomeMessageTwo = () => {
    const $messageTwoDiv = $('<div/>').text('Player two: ' + modalNameTwo);
    $('header').append($messageTwoDiv)
  }

// ****************************************************************************

//checkForMatch function, if the 1st and 2nd cards played are the same (from the cards array), confirm match.  If not, alert otherwise.  Successful match increases score.
const checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    playerScore +=1;
    currentScore.innerHTML = playerScore;
    alert('You found a match!');
    //turn card opacity to 0
  } else {
    alert('Sorry, try again.');
    // turn card back over
  };
};

//flipCard function, turns card over to show 'face' by changing the image src upon click.  this = card that has been clicked (event listener in createBoard function).

const flipCard = function() {
  let cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].cardImage);
  this.setAttribute('src', cards[cardId].cardImage);
    if (cardsInPlay.length === 2) {
      checkForMatch();
      cardsInPlay = []; //clears cards in play after match check
    };
};

// start of game
const createBoard = function() {
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/cardBack_130.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    let gameBoard = document.getElementById('game-board');
    gameBoard.appendChild(cardElement);
  };
};


// ********************************************************************

//
//   // score board
//
// const updateScore = () => {
//   $('h1').text('scoreboard: ' + score);
// }
//
// // round logic
//
// const setUpRound = () => {
//   $('.squares').empty();
//   $('round').text('round: '+ round);
//   if(round === 1){
//     createSquares(12);
//     time = 30;
//   }else if(round === 2){
//     createSquares(24);
//     time = 20;
//   }else if(round === 3){
//     createSquares(36);
//     time = 20;
//   }else{
//     createSquares(48);
//     time = 10;
//   }
// }
//
// // when zero cards left (all are set to opacity:0), move to next round
// // round++
// // display score modal
//
// // start game
//
//   $("#resetButton").on("click", (e) => {
//     setUpRound();
//     // setTimer();
//   })




})








// game over logic


// optional win animation


// optional timer functionality


// reset board
