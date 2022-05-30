

const rateEl = document.querySelectorAll("#rating");
const btn = document.querySelector('#btn');
const card = document.querySelector('.card');
const cardRated = document.querySelector(".card-rated");



getRate();

function getRate() {
	rateEl.forEach((rate) => {
		rate.addEventListener('click', () => {
			const rateValue = rate.getAttribute('data-value');

			rate.style.background = " hsl(25, 97%, 53%)";
			rate.style.color = "white";
			
				
			console.log(rateValue);

			
			btn.addEventListener("click", (e) => {
			e.preventDefault();

			card.classList.add("card-rated");

			cardRated.style.display = "block";
			});
		});

	});
}





