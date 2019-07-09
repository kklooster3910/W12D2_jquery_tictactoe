class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
    this.bindEvents(); 
  }

  

  // makeMove($square) {};
 
}

View.prototype.setupBoard = function () {
  $("body").append("<ul></ul>")
  const $ul = $("ul").addClass("row"); 
  for (let i = 0; i < 9; i++) { 
    // let $li = $("li") 
    const $li = $("<li></li>").addClass("cell");
    // // const $li1 = $("li").addClass("cell"); 
    $ul.append($li);
  }
}

View.prototype.bindEvents = function () {
  var $listItems = $("li");
  var pos1d;
  that = this;
  var mark;
  var message;
  // debugger
  $(".cell").on("click", event =>{
    const currentTarget = event.currentTarget;
    const $currentTarget = $(currentTarget);
    
    for(let i=0;i<9;i++){
      if ( $listItems[i]===currentTarget ) {
         pos1d = i;
      }
    }
    // debugger;
    $currentTarget.css({
      'background-color': 'white',
      'color': 'black',
      'font-size': '44px',
      'display': 'flex',
      'align-items': 'center'      
    });
    
    // debugger;
    const x = Math.floor(pos1d/3);  
    const y = (pos1d%3)
    try {
        that.game.playMove([x,y])
      } catch (e) {
        alert(e.msg);
        return;
    }
    // debugger;
    mark = that.game.currentPlayer;
    mark==="X"? "X":"O";
    currentTarget.textContent = mark;
    if (that.game.isOver()){
      message = (that.game.winner()==="o") ? "X is winner": "O is winner";
      alert( message);
    }
     
  });
}
/* < script >
  var $listItems = $("li");
$listItems.on("mouseover", event => {
  const currentTarget = event.currentTarget;
  const $currentTarget = $(currentTarget);
  alert($currentTarget.text());
})
</script > */
  
View.prototype.addRow = function () {
  const rowIdx = this.$el.find("li");
  const $row = $("<ul>").addClass("row")
  for (let colIdx = 0; colIdx < 3; colIdx++) {
    const $square = $("<li>").addClass("square").attr("data-pos", [rowIdx, colIdx]);
    $row.append($square);
  }
  this.$el.append($row);
};


module.exports = View;


// View.prototype.setupEasel = function () {
//   const $addRowButton = $('<button>').html('Add a row');
//   this.$el.append($addRowButton);
//   $addRowButton.on("click", this.addRow.bind(this));

//   for (let j = 0; j <= 7; j++) {
//     const $button = $("<button>").html("Exercise " + j);
//     $button.on("click", this["exercise" + j]);
//     this.$el.append($button);
//   }

//   for (let i = 0; i < 20; i++) {
//     this.addRow();
//   }
// };
// 

// .square {
//   outline: 1px solid gray;
//   width: 25px;
//   height: 25px;
//   float: left;
//   transition: outline 0.5s, background - color 0.5s;
//   cursor: crosshair;
//   background - color: white;
//   list - style: none;
// }

