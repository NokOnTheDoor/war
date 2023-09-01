

             var cards = [ ];  //declaring the variable cards as an empty array

             for (i = 1; i < 14; i++) {  //uses the numbers 1 through 13 to represent ace through king
             
             cards.push(i); //adds that card number to the array cards
             
             
             }
             for (i = 1; i < 14; i++) {  //uses the numbers 1 through 13 to represent ace through king

                for (k = 1; k < 5; k++) {  //uses the numbers 1 through 4 to represent the four suits
                
                j = [i, k];                      // creates an array with the card's number and suit
                
                cards.push(j);           //adds that card number to the array cards
                
                }
                
                }
                cards.shuffle = function
                 (){
                    console.log();
                 }
                 {
                    var input = this;
                    for (var i = cards.length-1; i >=0; i--){
                        var randomIndex = Math.floor(Math.random()*(i+1));
                        var randomAtIndex = cards[randomIndex][0];
                        var itemAtSecond = cards[randomIndex][1];
                        input[randomIndex][0] = input[i][0];
                        input[ranndomIndex][1] = input[i][1];
                        input[i][0] = itemAtIndex;
                        input[i][1] = itemAtSecond;  
                    }
                    return input;                
                }
                cards.shuffle();
                var half = cards.length/2;
                for (i=0; i<half; i++){
                    firstPlayer.push(cards[i]);
                }
                cards.splice(0, half);

                secondPlayer = cards;
                $player1Count.html(firstPlayer.length);
                $player2Count.html(secondPlayer.length);
                $draw.on ;'click', function()
                {
                    $firstPlayerSuit.empty();
                    secondPlayerSuit.empty();
                    var number1=firstPlayer[0][0];
                    var number2=secondPlayer[0][0];
                    $firstPlayerNumber.html(number1);
                    $secondPlayerNumber.html(number2);
                    suit1 = firstPlayer[0][1];
                    suit2 = secondPlayer[0][1];
               
                }
                if (suit1 == 1) {
                suit1 = "<img src='WAR/resources/images/png-transparent-red-heart-illustration-suit-playing-card-heart-card-game-ny-s-love-game-hearts.png'/>";
                }
                if (suit1 == 2){
                    suit1 ="<img src='WAR/resources/images/58-583898_naipe-ouros-card-diamond-transparent.png'/>";
                }
                if (suit1 == 3){
                    suit1 ="<img src='WAR/resources/images/203-2035848_club-symbol-card-shape-game-playing-shapes-play.png'/>";
                }
                if (suit1 == 4){
                    suit1 ="<img src='WAR/resources/images/png-clipart-bucket-and-spade-spades-ace-card-leaf-technic.png'/>";
                }
            if (suit2 == 1) {
            suit2 == "<img src='WAR/resources/images/png-transparent-red-heart-illustration-suit-playing-card-heart-card-game-ny-s-love-game-hearts.png'/>";
            }
            if (suit2 == 2){
                suit2 ="<img src='WAR/resources/images/58-583898_naipe-ouros-card-diamond-transparent.png'/>";
            }
            if (suit2 == 3){
                suit2 ="<img src='WAR/resources/images/203-2035848_club-symbol-card-shape-game-playing-shapes-play.png'/>";
            }
            if (suit2 == 4){
                suit2 ="<img src='WAR/resources/images/png-clipart-bucket-and-spade-spades-ace-card-leaf-technic.png'/>";
            }
            if (number1<11){

                for (i=0; i<number1; i++) {
                
                $firstPlayerSuit.append(suit1);
                
                };
                
                } else {
                
                if (number1 == 11) {
                
                numberImg1 = "<img src='WAR/resources/images/download.png'/>";
                
                $firstPlayerSuit.append(suit1);
                
                $firstPlayerNumber.html(numberImg1);
                
                }
                
                if (number1 == 12) {
                
                numberImg1 = "<img src='WAR/resources/images/png-clipart-queen-of-spades-playing-card-king-queen-game-king.png'/>";
                
                $firstPlayerSuit.append(suit1);
                
                $firstPlayerNumber.html(numberImg1);
                
                }
                
                if (number1 == 13) {
                
                numberImg1 = "<img src='WAR/resources/images/png-clipart-playing-card-king-jack-card-game-king-miscellaneous-game.png'/>";
                
                $firstPlayerSuit.append(suit1);
                
                $firstPlayerNumber.html(numberImg1);
                
                }
                
                }
                 if (number2 > number1){

                    //checks if player two wins the round
                    
                    $winner.html("Player Two Wins");
                    
                    //announces that player two wins
                    
                    for (i=0; i<playedCards.length; i++) {
                    
                    secondPlayer.push(playedCards[i]);
                    
                    //player two gets the cards
                    
                    }
                    
                    } else if (number1 == number2) {
                    
                    //checks if the players tied
                    
                    $winner.html("This means war!");
                    
                    //announces the war
                    
                    for (i=0; i<3; i++){
                    
                    //loops three times for three cards
                    
                    playedCards.push(firstPlayer[0]);
                    
                    //one card from each player’s hand is played
                    
                    playedCards.push(secondPlayer[0]);
                    
                    //they go into the played cards array
                    
                    firstPlayer.splice(0,1);
                    
                    //they are taken off the players’ arrays
                    
                    secondPlayer.splice(0,1);
                    
                    }
                    
                     
                    
                    $firstPlayerSuit.css("display”, “none");
                    
                    //removes the suit from the card area
                    
                    $secondPlayerSuit.css("display”, “none");
                    
                    //removes the suit from the card area
                    
                     
                    
                    numberImg1 = "<img style='height:14rem;' src='WAR/resources/images/160-1601986_blank-playing-card-template-parallel.png'/>";
                    
                    $firstPlayerNumber.html(numberImg1);
                    
                    //places an image in the number area of a card back
                    
                    numberImg2 = "<img style=,height:14rem;' src='./images/cards.png'/>";
                    
                    $secondPlayerNumber.html(numberImg2);
                    
                    //places an image in the number area of a card back
                    
                     
                    
                    var audio = new Audio('card.mp3');
            
                    //creates a variable that holds the sound of a card
                    
                    audio.play();
                    
                    //plays the sound
                    
                     
                    
                    window.setTimeout(function() {
                    
                    //delays the next thing from happening for 1000ms
                    
                    audio.play();
                    
                    //plays audio
                    
                    }, 1000);
                    
                    //determines how long to wait
                    
                    window.setTimeout(function() {
                    
                    //same thing again
                    
                    audio.play();
                    
                    }, 1800);
                    
                    //this time waits 1800ms to separate the sounds
                    
                    }