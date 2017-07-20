$(() => {

  // let playerOneScore = 0;
  // let playerTwoScore = 0;
  // // if decide to use
  // // let time = 30;
  let round = 1;
  let playerOneName = '';
  let playerTwoName = '';

  let playerOneScore = 0;
  let playerTwoScore = 0;

  let cardsInPlay = [];

  let turn = 1;

  let roundOneCards = [
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

  roundOneCards.sort(() => Math.random() * 2 - 1);

  $('#modalButton').on('click', (e) => {
      playerOneName = $('#playerOne').val()
      // e.currentTarget is button
      $(e.currentTarget).parent().css('display', 'none');
      updateScoreOne();
    })

  $('#modalButtonTwo').on('click', (e) => {
      playerTwoName = $('#playerTwo').val()
      // e.currentTarget is button
      $(e.currentTarget).parent().css('display', 'none');
      updateScoreTwo();
      createBoard();
    })

    const updateScoreOne = () => {
      $('#playerOneScore').text('Player One ' + '(' + playerOneName + ') ' + 'Score: ' + playerOneScore);
    }

    const updateScoreTwo = () => {
      $('#playerTwoScore').text('Player Two ' + '(' + playerTwoName + ') ' + 'Score: ' + playerTwoScore);
    }

    const checkForMatch = function() {
      if (cardsInPlay[0] === cardsInPlay[1]) {
        // make modal
        // alert('You found a match!');
        // change opacity of cards in cardsInPlay array
          if (turn % 2 === 0){
          playerTwoScore++;
          updateScoreTwo();
        }else{
          playerOneScore++;
          updateScoreOne();
        }
      } else {
        //make modal
        // alert('Sorry, try again.');
        // flip cards back over
        // flipCardBack();
      };
    };



    const flipCard = function() {
      let cardId = this.getAttribute('data-id');
      // console.log('User flipped ' + cards[cardId].rank + ' of ' + cards[cardId].suit + ', image: ' + cards[cardId].cardImage);
      cardsInPlay.push(roundOneCards[cardId].cardImage);
      this.setAttribute('src', roundOneCards[cardId].cardImage);
        if (cardsInPlay.length === 2) {
          checkForMatch();
          turn+=1;
          cardsInPlay = []; //clears cards in play after match check
        };
    };

    // const flipCardBack = function() {
    //   for (let i = 0; i < roundOneCards.length; i++) {
    //     let cardBack = document.createElement('img');
    //     cardBack.setAttribute('src', 'images/cardBack_130.png');
    //     cardBack.setAttribute('data-id', i);
    //     cardBack.addEventListener('click', flipCard);
    //     let gameBoard = document.getElementById('game-board');
    //     gameBoard.appendChild(cardBack);
    //   }
    // }

    const createBoard = function() {
      for (let i = 0; i < roundOneCards.length; i++) {
        let cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/cardBack_130.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        let gameBoard = document.getElementById('game-board');
        gameBoard.appendChild(cardElement);
      };
    };

    const setUpRound = () => {
      $('.squares').empty();
      $('round').text('round: '+ round);
      if(round === 1){
        createSquares(12);
        time = 30;
      }else if(round === 2){
        createSquares(24);
        time = 20;
      }else if(round === 3){
        createSquares(36);
        time = 20;
      }else{
        createSquares(48);
        time = 10;
      }
    }

      $("#resetButton").on("click", (e) => {
        setUpRound();
        // setTimer();
      })




  })
