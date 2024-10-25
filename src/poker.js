const cardValues = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14
}

function getCardValue(card) {
  return cardValues[card]
}

function isPair(hand) {
  return hand.length === 2 && hand[0] === hand[1]
}

function isThreeOfAKind(hand) {
  return hand.length === 3 && hand[0] === hand[1] && hand[1] === hand[2]
}

function winningPair(pair1, pair2) {
  if (isPair(pair1) && isPair(pair2)) {
    return getCardValue(pair1[0]) > getCardValue(pair2[0]) ? pair1 : pair2
  }
  if (isPair(pair1)) return pair1
  if (isPair(pair2)) return pair2
  return []
}

function winningPairFromArray(pairs) {
  let winningPair = []
  for (const pair of pairs) {
    if (isPair(pair)) {
      if (
        winningPair.length === 0 ||
        getCardValue(pair[0]) > getCardValue(winningPair[0])
      ) {
        winningPair = pair
      }
    }
  }
  return winningPair
}

function winning3CardHand(hands) {
  let winningHand = []
  for (const hand of hands) {
    if (isPair(hand) || isThreeOfAKind(hand)) {
      if (
        winningHand.length === 0 ||
        (isThreeOfAKind(hand) && !isThreeOfAKind(winningHand)) ||
        (isThreeOfAKind(hand) &&
          isThreeOfAKind(winningHand) &&
          getCardValue(hand[0]) > getCardValue(winningHand[0])) ||
        (isPair(hand) &&
          !isThreeOfAKind(winningHand) &&
          getCardValue(hand[0]) > getCardValue(winningHand[0]))
      ) {
        winningHand = hand
      }
    }
  }
  return winningHand
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
