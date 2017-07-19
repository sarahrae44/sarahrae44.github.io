$(() => {

  let playerOneScore = 0;
  let playerTwoScore = 0;
  // if decide to use
  // let time = 30;
  let round = 1;
  let modalName = '';

  // need to create a class that will hold images and their assigned values

// easier upfront but may be harder when wanting to limit the flips of each image to 2

const roundOneImages = ['url(images/erlich.png)', 'url(images/erlich2.png)', 'url(images/richard.png)', 'url(images/siliconValleyGroup.png)', 'url(images/siliconValleyLogo.png)', 'url(images/svGroup.png)'];


// if I go this route, it'll be easier to call out when wanting to only flip over each image twice. using if count = 2, hide this image (this.hidden)
  //
  // class imgValue {
  //   constructor(round, id, imgLink){
  //     this.round = round;
  //     this.id = id;
  //     this.imgLink = imgLink
  //   }
  // }
  //
  // const R1IA = new imgValue(1, 'IA', 'url(images/erlich.png)');
  // const R1IB = new imgValue(1, 'IB', 'url(images/erlich2.png)');
  // const R1IC = new imgValue(1, 'IC', 'url(images/richard.png)');
  // const R1ID = new imgValue(1, 'ID', 'url(images/siliconValleyGroup.png)');
  // const R1IE = new imgValue(1, 'IE', 'url(images/siliconValleyLogo.png)');
  // const R1IF = new imgValue(1, 'IF', 'url(images/svGroup.png)');

  // const R2IA = new imgValue(2, IA, imgPath);
  // const R2IB = new imgValue(2, IB, imgPath);
  // const R2IC = new imgValue(2, IC, imgPath);
  // const R2ID = new imgValue(2, ID, imgPath);
  // const R2IE = new imgValue(2, IE, imgPath);
  // const R2IF = new imgValue(2, IF, imgPath);
  // const R2IG = new imgValue(2, IG, imgPath);
  // const R2IH = new imgValue(2, IH, imgPath);
  // const R2II = new imgValue(2, II, imgPath);
  // const R2IJ = new imgValue(2, IJ, imgPath);
  // const R2IK = new imgValue(2, IK, imgPath);
  // const R2IL = new imgValue(2, IL, imgPath);
  //
  // const R3IA = new imgValue(3, IA, imgPath);
  // const R3IB = new imgValue(3, IB, imgPath);
  // const R3IC = new imgValue(3, IC, imgPath);
  // const R3ID = new imgValue(3, ID, imgPath);
  // const R3IE = new imgValue(3, IE, imgPath);
  // const R3IF = new imgValue(3, IF, imgPath);
  // const R3IG = new imgValue(3, IG, imgPath);
  // const R3IH = new imgValue(3, IH, imgPath);
  // const R3II = new imgValue(3, II, imgPath);
  // const R3IJ = new imgValue(3, IJ, imgPath);
  // const R3IK = new imgValue(3, IK, imgPath);
  // const R3IL = new imgValue(3, IL, imgPath);
  // const R3IM = new imgValue(3, IM, imgPath);
  // const R3IN = new imgValue(3, IN, imgPath);
  // const R3IO = new imgValue(3, IO, imgPath);
  // const R3IP = new imgValue(3, IP, imgPath);
  // const R3IQ = new imgValue(3, IQ, imgPath);
  // const R3IR = new imgValue(3, IR, imgPath);
  //
  // const R4IA = new imgValue(4, IA, imgPath);
  // const R4IB = new imgValue(4, IB, imgPath);
  // const R4IC = new imgValue(4, IC, imgPath);
  // const R4ID = new imgValue(4, ID, imgPath);
  // const R4IE = new imgValue(4, IE, imgPath);
  // const R4IF = new imgValue(4, IF, imgPath);
  // const R4IG = new imgValue(4, IG, imgPath);
  // const R4IH = new imgValue(4, IH, imgPath);
  // const R4II = new imgValue(4, II, imgPath);
  // const R4IJ = new imgValue(4, IJ, imgPath);
  // const R4IK = new imgValue(4, IK, imgPath);
  // const R4IL = new imgValue(4, IL, imgPath);
  // const R4IM = new imgValue(4, IM, imgPath);
  // const R4IN = new imgValue(4, IN, imgPath);
  // const R4IO = new imgValue(4, IO, imgPath);
  // const R4IP = new imgValue(4, IP, imgPath);
  // const R4IQ = new imgValue(4, IQ, imgPath);
  // const R4IR = new imgValue(4, IR, imgPath);
  // const R4IS = new imgValue(4, IS, imgPath);
  // const R4IT = new imgValue(4, IT, imgPath);
  // const R4IU = new imgValue(4, IU, imgPath);
  // const R4IV = new imgValue(4, IV, imgPath);
  // const R4IW = new imgValue(4, IW, imgPath);
  // const R4IX = new imgValue(4, IX, imgPath);

  // instructions - will pop up when page is loaded; will have either an okay button or close functionality

  // $('#instructionsButton').on('click', (e) => {
  //   modalName = $('input').val()
  //   // e.currentTarget is button
  //   $(e.currentTarget).parent().css('display', 'none');
  //   showWelcomeMessage();
  // })

// asks for name

  $('#modalButton').on('click', (e) => {
    modalName = $('input').val()
    // e.currentTarget is button
    $(e.currentTarget).parent().css('display', 'none');
    showWelcomeMessage();
  })

// displays a welcome message; will need to add the ability to add both players' names
  const showWelcomeMessage = () => {
    const $messageDiv = $('<div/>').text('Welcome ' + modalName + '!');
    $('header').append($messageDiv)
  }

// game
// lay out initial board

// need to determine logic for displaying only two of the same image in random positions and lock them into that position for that round

  const createSquares = (numberOfSquares) => {
    for(let i = 0; i < numberOfSquares; i++){
      const square = $('<div/>').on('click', (e) => {
        // works for one image; need this to work and pull from an object referenced above
        $(e.currentTarget).css('background', R1IB.imgLink)
        // $(e.currentTarget).css('background', 'imgValues[0]')

        // when cards match, they will turn 'clear' & that player will score one point
        // $(e.currentTarget).css('opacity', 0);

        // if cards don't match, they will turn back over and the other player takes a turn; this logic may need to move after the append direction below
      })
      $('.squares').append(square);
    }
  }

  // score board

const updateScore = () => {
  $('h1').text('scoreboard: ' + score);
}

// round logic

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

// when zero cards left (all are set to opacity:0), move to next round
// round++
// display score modal

// start game

  $("button").on("click", (e) => {
    setUpRound();
    // setTimer();
  })




})








// game over logic


// optional win animation


// optional timer functionality


// reset board
