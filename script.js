document.addEventListener("DOMContentLoaded", () => {
    const cardArray = [
    {
        name: "espeon",
        img: "images/espeon.png"
    },
    {
        name: "espeon",
        img: "images/espeon.png"
    },
    {
        name: "umbreon",
        img: "images/umbreon.png"
    },
    {
        name: "umbreon",
        img: "images/umbreon.png"
    },
    {
        name: "greninja",
        img: "images/greninja.png"
    },
    {
        name: "greninja",
        img: "images/greninja.png"
    },
    
    {
        name: "sableeye",
        img: "images/sable-eye.png"
    },
    {
        name: "sableeye",
        img: "images/sable-eye.png"
    },
    {
        name: "litten",
        img: "images/litten.png"
    },
    {
        name: "litten",
        img: "images/litten.png"
    },
    {
        name: "toxtricity",
        img: "images/toxtricity.png"
    },
    {
        name: "toxtricity",
        img: "images/toxtricity.png"
    },
    ];
    
    cardArray.sort(() => 0.5 - Math.random());
    
    // SELECTORS 
    const grid = document.querySelector(".grid");
    const result = document.querySelector("#result");

    let cardClicked = [];
    let cardClickedId = [];
    let matchedCards = [];

    // CREATING GAME GRID 
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement("img");
            card.setAttribute("src", "images/pokeball.png");
            card.setAttribute("data-id", i);
            card.addEventListener("click", flipCard);
        grid.appendChild(card);
        }
    }
    
    // CHECKING FOR A MATCH 
    function checkForMatch() {
        const cards = document.querySelectorAll("img");
        const cardOne = cardClickedId[0];
        const cardTwo = cardClickedId[1];
    
        if (cardOne == cardTwo) {
            cards[cardOne].setAttribute("src", "images/pokeball.png");
            cards[cardTwo].setAttribute("src", "images/pokeball.png");
            alert("Pick a different one!");
        } else if (cardClicked[0] === cardClicked[1]) {
            alert("It's a Match!");
            cards[cardOne].setAttribute("src", "images/gotcha.png");
            cards[cardTwo].setAttribute("src", "images/gotcha.png");
            matchedCards.push(cardClicked);
        } else {
                alert("Not a Match, try again!");
                cards[cardOne].setAttribute("src", "images/pokeball.png");
                cards[cardTwo].setAttribute("src", "images/pokeball.png");
            }
            
            cardClicked = [];
            cardClickedId = [];
            result.textContent = matchedCards.length;
            if (matchedCards.length === cardArray.length/2) {
                result.textContent = "Congratulations! You caught them all!";
            }
        }
    
    // FLIPPING THE CARD 
    function flipCard() {
        let cardId = this.getAttribute("data-id");
    cardClicked.push(cardArray[cardId].name);
    cardClickedId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardClicked.length === 2) {
        setTimeout(checkForMatch, 600);
     }
    }
    
    createBoard();
    });