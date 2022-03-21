/**
 * CHESSBOARD
 *
 * to run code from this file use: npx nodemon 3-chessboard
 *
 * Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
 * At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
 * Passing this string to console.log should show something like this:
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 *
 * When you have a program that generates this pattern, define a binding size = 8 and change the program so
 * that it works for any size, outputting a grid of the given width and height.
 *
 */

// Your code here.

const displayChessBoard = (size = 8) => {
  let rowStaringWithBlack = "";
  let rowStartingWithWhite = "";
  let chessBoardGrid = "";

  for (let i = 0; i < size / 2; i++) {
    rowStaringWithBlack += "# ";
    rowStartingWithWhite += " #";
  }

  for (let j = 0; j < size / 2; j++) {
    chessBoardGrid += rowStaringWithBlack + "\n" + rowStartingWithWhite + "\n";
  }  
  return chessBoardGrid;
};

console.log(displayChessBoard());
