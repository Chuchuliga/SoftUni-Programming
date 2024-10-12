function deckOfCards(arr) {
  let result = [];

  for (const cardInfo of arr) {
    let face = cardInfo.slice(0, -1);
    let suit = cardInfo.slice(-1);

    try {
      const card = createCard(face, suit);
      result.push(card);
    } catch (err) {
      result = [`Invalid card: ${cardInfo}`];
      break;
    }
  }

  console.log(result.join(" "));

  function createCard(face, suit) {
    const faces = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];

    const suits = {
      S: "\u2660",
      H: "\u2665",
      D: "\u2666",
      C: "\u2663",
    };

    if (!faces.includes(face)) {
      throw new Error("Error");
    }

    if (!suits.hasOwnProperty(suit)) {
      throw new Error("Error");
    }

    return {
      face,
      suit: suits[suit],
      toString() {
        return this.face + this.suit;
      },
    };
  }
}

deckOfCards(["AS", "10D", "KH", "2C"]);
// A♠ 10♦ K♥ 2♣