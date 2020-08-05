// PLAYERS - FACTORY FUNCTIONS
const game = (() => {
  const namePlayerOne = document.getElementById('player-one');
  const namePlayerTwo = document.getElementById('player-two');
  let currentPlayer = '';

  const Player = (name, symbol) => {
    getName = () => name;
    getSymbol = () => symbol;
    return { name, symbol, getName };
  };

  const gameInit = () => {
    if (namePlayerOne.value !== '' && namePlayerTwo.value !== '') {
      playerOne = Player(namePlayerOne.value, 'X');
      playerTwo = Player(namePlayerTwo.value, 'O');
      currentPlayer = playerOne;
      console.log(`playerOne: ${playerOne.getName()} playerTwo: ${playerTwo.getName()}`);
    }
  };

  const CreatePlayers = (() => {
    const newPlayerArray = [];
    const setPlayersArray = (array) => {
      const playerOne = array[0];
      const playerTwo = array[1];
      newPlayerArray.push(Player(playerOne, 'X'));
      newPlayerArray.push(Player(playerTwo, 'O'));
      return newPlayerArray;
    };
    const getPlayerArray = (array) =>  setPlayersArray(array);
    return { getPlayerArray, setPlayersArray };
  })();

  return { gameInit };
})();

// GAMEBOARD
const gameBoard = (() => {
  const board = [ '', '', '', '', '', '', '', '', ''];
  const boardContainer = document.getElementById('gameboard');
  const cells = boardContainer.childNodes;

  const clickCell = (currentPlayer) => {
    const cellPlayed = cells.target;
    alert(cells.target);
  };
  
  const cellClicks = cells.forEach(cell => cell.addEventListener('click', clickCell));
  return { clickCell };
})();

  // VISUAL / RENDER BOARD
  // const displayController = (function (doc, player) {
  //   const boardContainer = doc.getElementById('gameboard');
  //   const childrens = boardContainer.childNodes;

  //   const addEvents = childrens.forEach(element => {
  //     element.addEventListener('click', () => {
  //       player.addSymbol(element, symbol);
  //     });
  //   });
  //   // const renderBoard = () => { boardContainer.innerHTML = gameBoard.getBoard.map(element => {
  //   //   ``
  //   // }) }
  //   return { addEvents };
  // }(document));

  // displayController.addEvents;



  // USER MESSAGES
  // const userMessage = ((playerOne, playerTwo, winner, loser) => {
  //   let name = '';
  //   const playerOneAssign = `Congratulations, ${playerOne}, you are player one.`;
  //   const playerTwoAssign = `${playerTwo}, you are player two. Unlucky.`;
  //   const gameWelcome = `${playerOne}, ${playerTwo}, we're so sorry that you've had the misfortune of playing this terribly made game of tic-tac-toe. But you're here now, so we may as well make the most of it.`;
  //   const rulesPrompt = 'Would you like to know the rules of the game?';
  //   const rulesStatement = "The aim of the game is to place three of your symbols in a row before the other player. You can place your symbols horizontally, vertically or diagonally, however, they must be in a continuous, unbroken line. Each player gets one move before the other player gets theirs. The first player to get three in a row wins. LET'S PLAY MURDERBALL!!!!!";
  //   const gameStart = 'LETS PLAY TIC TAC TOE!!!!!!!!';
  //   const playerOneMovePrompt = `${playerOne}, make your move.`;
  //   const playerTwoMovePrompt = `${playerTwo}, you're not as good or as beautiful as ${playerOne}, so just take your turn so we can stop looking at you already.`;
  //   const gameDrawMessage = "Wow, you're both as bad as each other. Well done.";
  //   const gameWinMessage = `${winner}, congratulations, you are a weiner. ${loser}, better luck next time.`;
  //   const rematchPrompt = `${loser}, don't let ${winner} get away with it. Even if he is the weiner. Play again?`;
  // })(playerOne, playerTwo, winner, loser);


  // FUNCTION - HANDLE THE CELL PLAYED

  // FUNCTION - HANDLE THE PLAYER CHANGE


  // FUNCTION HANDLE THE RESULT/MOVE VALIDATION - IS THE GAME WON, DRAWN OR LOST?

  // FUNCTION - HANDLE CELL CLICK

  // FUNCTION - HANDLE GAME RESTART AFTER FINISH