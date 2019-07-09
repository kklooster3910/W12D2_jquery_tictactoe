const View = require("./ttt-view");
const Game = require("./game");

  // document.addEventListener("DOMContentLoaded", function() {});
  // $(document).on("ready", function () {});  

  $(() => {
    $el = $("ttt");
    const game = new Game(); //creating a new game
    const view = new View(game, $el );
    //view.setupBoard();
    //window.view = view
  });
