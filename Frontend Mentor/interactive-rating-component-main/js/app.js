

const card = document.querySelector('.card');
const cardRated = document.querySelector(".card-rated");
const ratingPicked = document.querySelectorAll(".rating");
const submitBtn = document.querySelector("#Submit-btn");
const rateValue = document.querySelector("#rate-selected");

ratingPicked.forEach((rate, i) => {
  rate.onclick = function () {
    let currentRate = i + 1;
	  ratingPicked.forEach((rate, j) => {
      if (currentRate >= j + 1) {
			rate.style.background = "hsl(25, 97%, 53%)";
			rate.style.color = "white"
		} else {
			rate.style.background = "hsl(213, 19%, 18%)";
			rate.style.color = "white"
		}
		rateValue.innerHTML = `${currentRate}`

	 });
	  submitBtn.addEventListener("click", () => {
      cardRated.style.display = "block";
      card.style.display = "none";
    });
  };
});



