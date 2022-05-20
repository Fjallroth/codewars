const rps = (p1, p2) => {
  // conditions for p1 win, scisors-paper, paper-rock, rock-scissors
  if((p1 == 'scissors' && p2=='paper' )||( p1 == 'paper' && p2 == 'rock' )||( p1 == 'rock' && p2 == 'scissors')){
    return "Player 1 won!"
  }
  else if(p1 === p2){
    return 'Draw!'
  }
  else{
    return "Player 2 won!"
  }
};