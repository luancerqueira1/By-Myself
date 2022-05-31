

const rateEl = document.querySelectorAll(".ratings");

const btn = document.querySelector('#btn');
const card = document.querySelector('.card');
const cardRated = document.querySelector(".card-rated");
const porran = document.querySelectorAll(".rating").checked;



getRate();

function getRate() {
	rateEl.forEach((rate) => {
		rate.addEventListener('click', () => {
			const rateValue = rate.value;

			

			
				porran.style.backgroundColor = "red";
       		porran.style.color = "white";
			
				
			
			
			
				
			console.log(rateValue);

			
			btn.addEventListener("click", (e) => {
			e.preventDefault();

			card.classList.add("card-rated");

			cardRated.style.display = "block";
			});
		});

	});
}





