

const rateEl = document.querySelectorAll(".ratings");

const submitBtn = document.querySelector("#Submit-btn");
const card = document.querySelector('.card');
const cardRated = document.querySelector(".card-rated");
const ratingPicked = document.querySelectorAll(".rating");



getRate();





function getRate() {
	
	rateEl.forEach((rate) => {

		botaCor();
		rate.addEventListener('click', () => {
			const rateValue = rate.value;
			let getValuerate = rateValue;
			

			console.log(rateValue,getValuerate);
			
		
		});

	});
}
console.log(getValuerate);


submitBtn.addEventListener("click", (e) => {
	e.preventDefault();

	card.classList.add("card-rated");

	cardRated.style.display = "block";
	

});



function botaCor() {
  ratingPicked.forEach((butao) => {
	  butao.addEventListener("click", () => {
			butao.style.backgroundColor = "hsl(25, 97%, 53%)";
     		butao.style.color = "white";
		  
		
     
    });
  });
}





