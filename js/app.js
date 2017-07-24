$(() => {

// ******** global for whole game ********** //

// round count
  let round = 1;

// player scores
  let playerOneScore = 0;
  let playerTwoScore = 0;

// pair of cards picked in each turn
  let cardsInPlay = [];

// used to determine whose turn it is
  let turn = 1;

// cards for round one
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

// cards for round two
  let roundTwoCards = [
    {
      cardImage: 'images/bobs.png'
    },
    {
      cardImage: 'images/chotchkiesWaiter.png'
    },
    {
      cardImage: 'images/copyMachineMassacre.png'
    },
    {
      cardImage: 'images/drew.png'
    },
    {
      cardImage: 'images/lawrence.png'
    },
    {
      cardImage: 'images/lumbergMug.png'
    },
    {
      cardImage: 'images/michaelAtComputer.png'
    },
    {
      cardImage: 'images/miltonAtDesk.png'
    },
    {
      cardImage: 'images/miltonInBasement.png'
    },
    {
      cardImage: 'images/peter.png'
    },
    {
      cardImage: 'images/samirAndMichael.png'
    },
    {
      cardImage: 'images/samirPrinter.png'
    },
    {
      cardImage: 'images/bobs.png'
    },
    {
      cardImage: 'images/chotchkiesWaiter.png'
    },
    {
      cardImage: 'images/copyMachineMassacre.png'
    },
    {
      cardImage: 'images/drew.png'
    },
    {
      cardImage: 'images/lawrence.png'
    },
    {
      cardImage: 'images/lumbergMug.png'
    },
    {
      cardImage: 'images/michaelAtComputer.png'
    },
    {
      cardImage: 'images/miltonAtDesk.png'
    },
    {
      cardImage: 'images/miltonInBasement.png'
    },
    {
      cardImage: 'images/peter.png'
    },
    {
      cardImage: 'images/samirAndMichael.png'
    },
    {
      cardImage: 'images/samirPrinter.png'
    }
  ];

  // cards for round one
    let roundThreeCards = [
      {
        cardImage: 'images/alice.png'
      },
      {
        cardImage: 'images/catbert.png'
      },
      {
        cardImage: 'images/dilbert01.png'
      },
      {
        cardImage: 'images/dilbertCat.png'
      },
      {
        cardImage: 'images/dilbertCoffeeCarrot.png'
      },
      {
        cardImage: 'images/dilbertDemons.png'
      },
      {
        cardImage: 'images/dilbertGoals.png'
      },
      {
        cardImage: 'images/dilbertHeadspace.png'
      },
      {
        cardImage: 'images/dilbertOne.png'
      },
      {
        cardImage: 'images/dilbertRedShirt.png'
      },
      {
        cardImage: 'images/dilbertSky.png'
      },
      {
        cardImage: 'images/dilbertSleeping.png'
      },
      {
        cardImage: 'images/dilbertTrio.png'
      },
      {
        cardImage: 'images/dilbertwPointyHair.png'
      },
      {
        cardImage: 'images/dogbert.png'
      },
      {
        cardImage: 'images/dogbertWeasel.png'
      },
      {
        cardImage: 'images/pointyHair.png'
      },
      {
        cardImage: 'images/pointyHairBlueChair.png'
      },
      {
        cardImage: 'images/alice.png'
      },
      {
        cardImage: 'images/catbert.png'
      },
      {
        cardImage: 'images/dilbert01.png'
      },
      {
        cardImage: 'images/dilbertCat.png'
      },
      {
        cardImage: 'images/dilbertCoffeeCarrot.png'
      },
      {
        cardImage: 'images/dilbertDemons.png'
      },
      {
        cardImage: 'images/dilbertGoals.png'
      },
      {
        cardImage: 'images/dilbertHeadspace.png'
      },
      {
        cardImage: 'images/dilbertOne.png'
      },
      {
        cardImage: 'images/dilbertRedShirt.png'
      },
      {
        cardImage: 'images/dilbertSky.png'
      },
      {
        cardImage: 'images/dilbertSleeping.png'
      },
      {
        cardImage: 'images/dilbertTrio.png'
      },
      {
        cardImage: 'images/dilbertwPointyHair.png'
      },
      {
        cardImage: 'images/dogbert.png'
      },
      {
        cardImage: 'images/dogbertWeasel.png'
      },
      {
        cardImage: 'images/pointyHair.png'
      },
      {
        cardImage: 'images/pointyHairBlueChair.png'
      }
    ];

// sort functions for all rounds
  roundOneCards.sort(() => Math.random() * 2 - 1);
  roundTwoCards.sort(() => Math.random() * 2 - 1);
  roundThreeCards.sort(() => Math.random() * 2 - 1);

// checks for which board to play
const checkForRoundTwo = () => {

// check to see if all possible points have been score for this round
  if(roundOneCards.length / (playerOneScore + playerTwoScore) === 2){
      round ++;
    // set a variable to hold cards on board and clear them since game is over
      let clearGameBoard = document.getElementById('game-board');
        while (clearGameBoard.firstChild) {
        clearGameBoard.removeChild(clearGameBoard.firstChild);
      }
// set up next round
      setUpRound();
    }
}

const checkForRoundThree = () => {

// check to see if all possible points have been score for this round
  if((roundOneCards.length + roundTwoCards.length) / (playerOneScore + playerTwoScore) === 2){
      round ++;
    // set a variable to hold cards on board and clear them since game is over
      let clearGameBoard = document.getElementById('game-board');
        while (clearGameBoard.firstChild) {
        clearGameBoard.removeChild(clearGameBoard.firstChild);
      }
// set up next round
      setUpRound();
    }
}

const checkForWinner = () => {
  if((roundOneCards.length + roundTwoCards.length + roundThreeCards.length) / (playerOneScore + playerTwoScore) === 2){
    if(playerOneScore > playerTwoScore) {
      if (playerOneName === ''){
        alert('Congrats player one! You have won developer memory!');
        }else{
        alert('Congrats ' + playerOneName + '! You have won developer memory!');
        }
    }else if(playerTwoScore > playerOneScore) {
      if (playerTwoName === ''){
        alert('Congrats player two! You have won developer memory!');
        }else{
        alert('Congrats ' + playerTwoName + '! You have won developer memory!');
        }
      }else{
        alert('Wow! The two of you are equally talented at developer memory!')
      }
    }
  }

// player one name prompt
  $('#modalButton').on('click', (e) => {
    // pass in entered value for player one name
      playerOneName = $('#playerOne').val()
      // e.currentTarget is button
      $(e.currentTarget).parent().css('display', 'none');
      // update the scoring function
      console.log(playerOneName);
      updateScoreOne();
    })

//player two name prompt
  $('#modalButtonTwo').on('click', (e) => {
    // pass in entered value for player two name
      playerTwoName = $('#playerTwo').val()
      // e.currentTarget is button
      $(e.currentTarget).parent().css('display', 'none');
      // update the scoring function
      updateScoreTwo();
      // start game
      if(round === 1){
        createBoardOne();
      }
    })

// player one update score function
    const updateScoreOne = () => {
      if(playerOneName === ''){
        $('#playerOneScore').text('Player One Score: ' + playerOneScore);
      }else{
        $('#playerOneScore').text(playerOneName + ' Score: ' + playerOneScore);
      }
    }

// player two update score function
    const updateScoreTwo = () => {
      if(playerTwoName === ''){
        $('#playerTwoScore').text('Player Two Score: ' + playerTwoScore);
      }else{
      $('#playerTwoScore').text(playerTwoName+ ' Score: ' + playerTwoScore);
      }
    }

// determines who gets to go
    const whoseTurn = () => {
      if(turn % 2 === 0){
        playerTwoTurn();
      }else{
        playerOneTurn();
      }
    }

// highlights player two if their turn
    const playerTwoTurn = () => {
      $('#playerTwoScore').css('color', 'white');
      $('#playerOneScore').css('color', '#bc5805');
    }

// highlights player one if their turn
    const playerOneTurn = () => {
      $('#playerOneScore').css('color', 'white');
      $('#playerTwoScore').css('color', '#bc5805');
    }

// ************ end of global for whole game ********** //

// ************ round one-specific ******************* //


    const testingTimer = () => {
      // this is when the cards should flip back
      // console.log('%cthe timer is working', 'color: green');
      // create new class to hold the cards that were selected
      let selectedClass = document.getElementsByClassName('selected');
      // console.log(selectedClass);
      // console.log('in timer function');

      // image is being flipped back; add card back image to selected class
      selectedClass[0].setAttribute('src', 'images/piedPiperCardBack.png');
      selectedClass[1].setAttribute('src', 'images/piedPiperCardBack.png');
      // need to remove class from images
      // console.log('selected');
      // remove selected class so that cards can go back in game
      selectedClass[1].classList.remove('selected');
      // console.log('selected');
      // remove selected class so that cards can go back in game
      selectedClass[0].classList.remove('selected');
      // console.log(selectedClass);
    }

    const flipCard = function(e) {
      // determine which player is playing
      whoseTurn();
      // get the id of the card flipped
      let cardId = this.getAttribute('data-id');
      // this proves that e.currentTarget works
      // e.currentTarget.style.visibility = "hidden";
      // add the flipped cards to selected class
      e.currentTarget.classList.add('selected');
      // console.log(e.currentTarget);
      // console.log(cardId);
      // e.currentTarget.classList('selected');
      // push selected cards into array so they can be compared
      cardsInPlay.push(roundOneCards[cardId].cardImage);
      // list the src so logic can run to determine if they are the same
      this.setAttribute('src', roundOneCards[cardId].cardImage);
      // once cardsInPlay array holds 2 cards, compare them to determine win/loss for turn
      if (cardsInPlay.length === 2) {
        // if cards in array are the same
        if (cardsInPlay[0] === cardsInPlay[1]){
        // console.log(document.getElementsByClassName('selected'));
        // create new variable for the matched cards to be added to, so the selected id gets removed from them
        let selectedClassMatch = document.getElementsByClassName('selected');
        // console.log(selectedClassMatch);
        // remove selected class from the cards that match
        selectedClassMatch[1].classList.remove('selected');
        // console.log(selectedClassMatch);
        // remove selected class from the cards that match
        selectedClassMatch[0].classList.remove('selected');
        // console.log(selectedClassMatch);
        // check to see which player should receive point
          if (turn % 2 === 0){
            playerTwoScore++;
            updateScoreTwo();
            checkForRoundTwo();
          }else{
            playerOneScore++;
            updateScoreOne();
            checkForRoundTwo();
          }
        }else{
          // if cards don't match, faces of cards need to display for one second before being flipped back
          setTimeout(testingTimer, 1000);
          // console.log('not in timer function');
        };
        // add one to the turn variable to keep track of which player gets to go next
        turn+=1;
          //clears cards in play after match check
        cardsInPlay = [];
      };
    };

// set up board one
    const createBoardOne = () => {
// count number in cards array and add loop through the following function that many times
      for (let i = 0; i < roundOneCards.length; i++) {
// create a new element to hold cardElement
        let cardElement = document.createElement('img');
// image to be applied to element
        cardElement.setAttribute('src', 'images/piedPiperCardBack.png');
// set padding on object
        cardElement.style.padding = '10px';
// set alignment on object
        cardElement.style.align = 'center';
// assigns an id to each instance
        cardElement.setAttribute('data-id', i);
// when object is clicked, call the flipCard function
        cardElement.addEventListener('click', flipCard);
// set variable for game board
        let gameBoard = document.getElementById('game-board');
// add the objects to the game board
        gameBoard.appendChild(cardElement);
      };
    };

// ************** end of round one-specific ***************** //

// ************** round two-specific ************************ //
    const testingTimerTwo = () => {
      // this is when the cards should flip back
      // console.log('%cthe timer is working', 'color: green');
      // create new class to hold the cards that were selected
      let selectedClass = document.getElementsByClassName('selected');
      // console.log(selectedClass);
      // console.log('in timer function');

      // image is being flipped back; add card back image to selected class
      selectedClass[0].setAttribute('src', 'images/officeSpaceCardBack.png');
      selectedClass[1].setAttribute('src', 'images/officeSpaceCardBack.png');
      // need to remove class from images
      // console.log('selected');
      // remove selected class so that cards can go back in game
      selectedClass[1].classList.remove('selected');
      // console.log('selected');
      // remove selected class so that cards can go back in game
      selectedClass[0].classList.remove('selected');
      // console.log(selectedClass);
    }


    const flipCardTwo = function(e) {
      // determine which player is playing
      whoseTurn();
      // get the id of the card flipped
      let cardId = this.getAttribute('data-id');
      // this proves that e.currentTarget works
      // e.currentTarget.style.visibility = "hidden";
      // add the flipped cards to selected class
      e.currentTarget.classList.add('selected');
      // console.log(e.currentTarget);
      // console.log(cardId);
      // e.currentTarget.classList('selected');
      // push selected cards into array so they can be compared
      cardsInPlay.push(roundTwoCards[cardId].cardImage);
      // list the src so logic can run to determine if they are the same
      this.setAttribute('src', roundTwoCards[cardId].cardImage);
      // once cardsInPlay array holds 2 cards, compare them to determine win/loss for turn
      if (cardsInPlay.length === 2) {
        // if cards in array are the same
        if (cardsInPlay[0] === cardsInPlay[1]){
        // console.log(document.getElementsByClassName('selected'));
        // create new variable for the matched cards to be added to, so the selected id gets removed from them
        let selectedClassMatch = document.getElementsByClassName('selected');
        // console.log(selectedClassMatch);
        // remove selected class from the cards that match
        selectedClassMatch[1].classList.remove('selected');
        // console.log(selectedClassMatch);
        // remove selected class from the cards that match
        selectedClassMatch[0].classList.remove('selected');
        // console.log(selectedClassMatch);
        // check to see which player should receive point
          if (turn % 2 === 0){
            playerTwoScore++;
            updateScoreTwo();
            checkForRoundThree();
            // checkForWinner();
          }else{
            playerOneScore++;
            updateScoreOne();
            checkForRoundThree();
            // checkForWinner();
          }
        }else{
          // if cards don't match, faces of cards need to display for one second before being flipped back
          setTimeout(testingTimerTwo, 1200);
          // console.log('not in timer function');
        };
        // add one to the turn variable to keep track of which player gets to go next
        turn+=1;
          //clears cards in play after match check
        cardsInPlay = [];
      };
    };

    // set up board one
    const createBoardTwo = () => {
      // count number in cards array and add loop through the following function that many times
      for (let i = 0; i < roundTwoCards.length; i++) {
        // create a new element to hold cardElement
      let cardElement = document.createElement('img');
      // image to be applied to element
      cardElement.setAttribute('src', 'images/officeSpaceCardBack.png');
      // set padding on object
      cardElement.style.padding = '10px';
      // assigns an id to each instance
      cardElement.setAttribute('data-id', i);
      // when object is clicked, call the flipCard function
      cardElement.addEventListener('click', flipCardTwo);
      // set variable for game board
      let gameBoard = document.getElementById('game-board');
      // add the objects to the game board
      gameBoard.appendChild(cardElement);
      };
    };

// **************** end of round two-specific *************** //

// ************** round three-specific ************************ //
    const testingTimerThree = () => {
      // this is when the cards should flip back
      // console.log('%cthe timer is working', 'color: green');
      // create new class to hold the cards that were selected
      let selectedClass = document.getElementsByClassName('selected');
      // console.log(selectedClass);
      // console.log('in timer function');

      // image is being flipped back; add card back image to selected class
      selectedClass[0].setAttribute('src', 'images/dilbertCardBack.png');
      selectedClass[1].setAttribute('src', 'images/dilbertCardBack.png');
      // need to remove class from images
      // console.log('selected');
      // remove selected class so that cards can go back in game
      selectedClass[1].classList.remove('selected');
      // console.log('selected');
      // remove selected class so that cards can go back in game
      selectedClass[0].classList.remove('selected');
      // console.log(selectedClass);
    }


    const flipCardThree = function(e) {
      // determine which player is playing
      whoseTurn();
      // get the id of the card flipped
      let cardId = this.getAttribute('data-id');
      // this proves that e.currentTarget works
      // e.currentTarget.style.visibility = "hidden";
      // add the flipped cards to selected class
      e.currentTarget.classList.add('selected');
      // console.log(e.currentTarget);
      // console.log(cardId);
      // e.currentTarget.classList('selected');
      // push selected cards into array so they can be compared
      cardsInPlay.push(roundThreeCards[cardId].cardImage);
      // list the src so logic can run to determine if they are the same
      this.setAttribute('src', roundThreeCards[cardId].cardImage);
      // once cardsInPlay array holds 2 cards, compare them to determine win/loss for turn
      if (cardsInPlay.length === 2) {
        // if cards in array are the same
        if (cardsInPlay[0] === cardsInPlay[1]){
        // console.log(document.getElementsByClassName('selected'));
        // create new variable for the matched cards to be added to, so the selected id gets removed from them
        let selectedClassMatch = document.getElementsByClassName('selected');
        // console.log(selectedClassMatch);
        // remove selected class from the cards that match
        selectedClassMatch[1].classList.remove('selected');
        // console.log(selectedClassMatch);
        // remove selected class from the cards that match
        selectedClassMatch[0].classList.remove('selected');
        // console.log(selectedClassMatch);
        // check to see which player should receive point
          if (turn % 2 === 0){
            playerTwoScore++;
            updateScoreTwo();
            // checkForRound();
            checkForWinner();
          }else{
            playerOneScore++;
            updateScoreOne();
            // checkForRound();
            checkForWinner();
          }
        }else{
          // if cards don't match, faces of cards need to display for one second before being flipped back
          setTimeout(testingTimerThree, 1200);
          // console.log('not in timer function');
        };
        // add one to the turn variable to keep track of which player gets to go next
        turn+=1;
          //clears cards in play after match check
        cardsInPlay = [];
      };
    };

    // set up board three
    const createBoardThree = () => {
      // count number in cards array and add loop through the following function that many times
      for (let i = 0; i < roundThreeCards.length; i++) {
        // create a new element to hold cardElement
      let cardElement = document.createElement('img');
      // image to be applied to element
      cardElement.setAttribute('src', 'images/dilbertCardBack.png');
      // set padding on object
      cardElement.style.padding = '10px';
      // assigns an id to each instance
      cardElement.setAttribute('data-id', i);
      // when object is clicked, call the flipCard function
      cardElement.addEventListener('click', flipCardThree);
      // set variable for game board
      let gameBoard = document.getElementById('game-board');
      // add the objects to the game board
      gameBoard.appendChild(cardElement);
      };
    };

// **************** end of round three-specific *************** //

// checks for round to set up
    const setUpRound = () => {
      if(round === 1){
        createBoardOne();
      }else if(round === 2){
        createBoardTwo();
      }else if(round === 3){
        createBoardThree();
      // }else{
      // createBoardFour();
      }
    }

      // $("#resetButton").on("click", (e) => {
      //   gameBoard = [];
      //   setUpRound();
      //   // setTimer();
      // })




  })
