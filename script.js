document.addEventListener("DOMContentLoaded", function () {

    let currentPlayer = "X";
    let board = ["", "", "", "", "", "", "", "", ""];
    let statusText = document.getElementById("status");
    let cells = document.querySelectorAll(".cell");
  
    cells.forEach(cell => {
      cell.addEventListener("click", function () {
        let index = cell.getAttribute("data-index");
  
        if (board[index] !== "") return;
  
        board[index] = currentPlayer;
        cell.textContent = currentPlayer;
  
        if (checkWinner()) {
          statusText.textContent = "Player " + currentPlayer + " wins!";
          return;
        }
  
        if (!board.includes("")) {
          statusText.textContent = "It's a draw!";
          return;
        }
  
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusText.textContent = "Player " + currentPlayer + "'s turn";
      });
    });
  
    function checkWinner() {
      let wins = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
      ];
  
      for (let i = 0; i < wins.length; i++) {
        let [a, b, c] = wins[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return true;
        }
      }
      return false;
    }
  
    document.getElementById("restart").addEventListener("click", function () {
      board = ["", "", "", "", "", "", "", "", ""];
      c
  