// const link = 'https://twitter.com/FrancescoCiull4/status/1581188624606842881';

const apiResponse = async (URL) => {
   try {
      const resp = await fetch(URL);
      const respData = await resp.json();

      console.log(respData);

      displayResult(respData.result.original_link, respData.result.short_link);
   } catch (err) {
      // showError();
      console.log(err);
   }
};

/*====== GET LINK =====*/

getLink();

function getLink() {
   const input = document.querySelector('#input-link');
   const submitBtn = document.querySelector('#submit-btn');

   submitBtn.addEventListener('click', function (e) {
      e.preventDefault();
      if (!input.value) {
         showInputError();
      }

      const inputURL = input.value;
      const fullURL = `https://api.shrtco.de/v2/shorten?url=${inputURL}`;
      apiResponse(fullURL);

      input.value = '';
   });
}

/*====== SHOW RESULTS & COPY =====*/
function displayResult(toShort, shortened) {
   const linkToShort = document.querySelector('.link-to-shorten');
   const shortResult = document.querySelector('.shortened-result');
   const shortContainer = document.querySelector('.short-result');

   linkToShort.innerHTML = `<p>${toShort}</p>`;
   shortResult.setAttribute('href', `https://${shortened}`);
   shortResult.textContent = shortened;
   shortContainer.classList.add('active');

   //COPY
   const copyBtn = document.querySelector('.copy-btn');

   copyBtn.addEventListener('click', function () {
      navigator.clipboard.writeText(shortened);

      copyBtn.classList.add('copied');
      copyBtn.textContent = 'copied!'
   });
}

/*===== INPUT ERROR =====*/
function showInputError() {
   const msgErr = document.querySelector('.error');
   const inputErr = document.querySelector('#input-link');

   inputErr.classList.add('error-input');
   msgErr.classList.add('show-error');

   setTimeout(function () {
      inputErr.classList.remove('error-input');
      msgErr.classList.remove('show-error');
   }, 3000);
}


const nav = document.querySelector('.nav-links');
const navBtn = document.querySelector('.menu-btn');

navBtn.addEventListener('click', function () {
   nav.classList.toggle('active');
});
