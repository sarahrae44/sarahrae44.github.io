$(() => {

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

  let roundTwoCards = [
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
  roundTwoCards.sort(() => Math.random() * 2 - 1);

const checkForRound = () => {
  console.log(playerOneScore + playerTwoScore);
  if(roundOneCards.length / (playerOneScore + playerTwoScore) === 2){
      round ++;
      let clearGameBoard = document.getElementById('game-board');
        while (clearGameBoard.firstChild) {
        clearGameBoard.removeChild(clearGameBoard.firstChild);
      }
      console.log(clearGameBoard);
      setUpRound();
  }
  // console.log(round);
}

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
      if(round === 1){
        createBoardOne();
      }
    })

    const updateScoreOne = () => {
      $('#playerOneScore').text('Player One ' + '(' + playerOneName + ') ' + 'Score: ' + playerOneScore);
    }

    const updateScoreTwo = () => {
      $('#playerTwoScore').text('Player Two ' + '(' + playerTwoName + ') ' + 'Score: ' + playerTwoScore);
    }

    const whoseTurn = () => {
      if(turn % 2 === 0){
        playerTwoTurn();
      }else{
        playerOneTurn();
      }
    }

    const playerTwoTurn = () => {
      $('#playerTwoScore').css('color', 'white');
      $('#playerOneScore').css('color', 'black');
    }

    const playerOneTurn = () => {
      $('#playerOneScore').css('color', 'white');
      $('#playerTwoScore').css('color', 'black');
    }

    const testingTimer = () => {
      // this is when the cards should flip back
      // console.log('%cthe timer is working', 'color: green');
      let selectedClass = document.getElementsByClassName('selected');
      // console.log(selectedClass);
      // console.log('in timer function');

      // where I want to add that image is being flipped back; add image to selected class
      selectedClass[0].setAttribute('src', 'images/cardBack_130.png');
      selectedClass[1].setAttribute('src', 'images/cardBack_130.png');
      // need to remove class from images
      // console.log('selected');
      selectedClass[1].classList.remove('selected');
      // console.log('selected');
      selectedClass[0].classList.remove('selected');
      // console.log(selectedClass);
    }

    const flipCard = function(e) {
      whoseTurn();
      let cardId = this.getAttribute('data-id');
      // this proves that e.currentTarget works
      // e.currentTarget.style.visibility = "hidden";
      e.currentTarget.classList.add('selected');
      // console.log(e.currentTarget);
      // console.log(cardId);
      // e.currentTarget.classList('selected');
      cardsInPlay.push(roundOneCards[cardId].cardImage);

      this.setAttribute('src', roundOneCards[cardId].cardImage);

      if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]){
        // console.log(document.getElementsByClassName('selected'));
        let selectedClassMatch = document.getElementsByClassName('selected');
        // console.log(selectedClassMatch);
        selectedClassMatch[1].classList.remove('selected');
        // console.log(selectedClassMatch);
        selectedClassMatch[0].classList.remove('selected');
        // console.log(selectedClassMatch);
          if (turn % 2 === 0){
            playerTwoScore++;
            updateScoreTwo();
          }else{
            playerOneScore++;
            updateScoreOne();
          }
        }else{
          setTimeout(testingTimer, 1200);
          // console.log('not in timer function');
        };
        turn+=1;
          //clears cards in play after match check
        cardsInPlay = [];
      };
      checkForRound();
    };

    const createBoardOne = () => {
      for (let i = 0; i < roundOneCards.length; i++) {
        let cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/cardBack_130.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        let gameBoard = document.getElementById('game-board');
        gameBoard.appendChild(cardElement);
      };
    };

    const createBoardTwo = () => {
      for (let i = 0; i < roundTwoCards.length; i++) {
        let cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/cardBack_130.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        let gameBoard = document.getElementById('game-board');
        gameBoard.appendChild(cardElement);
      };
    };

    const setUpRound = () => {
      // $('.squares').empty();
      // $('round').text('round: '+ round);
      if(round === 1){
        createBoardTwo();
      }else if(round === 2){
        createBoardTwo();
      // createSquares(24);
      // }else if(round === 3){
      //   createSquares(36);
      // }else{
      //   createSquares(48);
      }
    }

      // $("#resetButton").on("click", (e) => {
      //   gameBoard = [];
      //   setUpRound();
      //   // setTimer();
      // })




  })
