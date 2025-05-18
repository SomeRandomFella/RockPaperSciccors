function Username() {
  let username;

  do {
    username = prompt("Enter ur name");
  } while (username == null || username == "");
  return username;
}

function computerFind(human, username) {
  const computer = Math.random();
  let winner;

  if (computer <= 0.33) {
    computerresult = 'rock';
    if (human == "rock") {
      winner = "No One";
    }
    else if (human == 'paper') {
      winner = username;
    }
    else {
      winner = 'Computer';
    }
  }
  else if (computer > 0.33 && computer <= 0.66) {
    computerresult = 'paper';
    if (human == "rock") {
      winner = "Computer";
    }
    else if (human == 'paper') {
      winner = "No One";
    }
    else {
      winner = username;
    }
  }
  else {
    computerresult = 'scissors';
    if (human == "rock") {
      winner = username;
    }
    else if (human == 'paper') {
      winner = 'Computer';
    }
    else {
      winner = 'No One';
    }

  }

  alert('Computer did: ' + computerresult + ' You did: ' + human + " " + 'Winner is: ' + winner);

  return winner;
}

