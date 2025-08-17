// Home Card

// get all Home buttons
let home_increaseByOne_btn = document.querySelector("#home_card_increaseByOne");
let home_increaseByTwo_btn = document.querySelector("#home_card_increaseByTwo");
let home_increaseByThree_btn = document.querySelector("#home_card_increaseByThree");

// get home score card
let home_scoreCard = document.querySelector("#home_score")

// add event listeners
home_increaseByOne_btn.addEventListener("click", ()=>{
  home_scoreCard.textContent = Number(home_scoreCard.textContent) + 1
})

home_increaseByTwo_btn.addEventListener("click", ()=>{
  home_scoreCard.textContent = Number(home_scoreCard.textContent) + 2
})

home_increaseByThree_btn.addEventListener("click", ()=>{
  home_scoreCard.textContent = Number(home_scoreCard.textContent) + 3
})




// Away Card

// get all away buttons
let away_increaseByOne_btn = document.querySelector("#away_card_increaseByOne");
let away_increaseByTwo_btn = document.querySelector("#away_card_increaseByTwo");
let away_increaseByThree_btn = document.querySelector("#away_card_increaseByThree");

// get away score card
let away_scoreCard = document.querySelector("#away_score")

// add event listeners
away_increaseByOne_btn.addEventListener("click", ()=>{
  away_scoreCard.textContent = Number(away_scoreCard.textContent) + 1
})

away_increaseByTwo_btn.addEventListener("click", ()=>{
  away_scoreCard.textContent = Number(away_scoreCard.textContent) + 2
})

away_increaseByThree_btn.addEventListener("click", ()=>{
  away_scoreCard.textContent = Number(away_scoreCard.textContent) + 3
})


// Reset button

// get reset button
let reset_btn = document.querySelector("#reset_btn");
// add event listener
reset_btn.addEventListener("click",()=>{
  home_scoreCard.textContent = 0;
  away_scoreCard.textContent = 0;
})