const link = 'https://twitter.com/FrancescoCiull4/status/1581188624606842881';

function getLink() {
   console.log('oi');
}

const url = `https://api.shrtco.de/v2/shorten?url=${link}`;

const apiResponse = async (URL) => {
   try {
      const resp = await fetch(URL);
      const respData = await resp.json();

      console.log(respData.result.short_link);

      getLink(respData.result.short_link);
   } catch (err) {
      console.log(err);
   }
};

apiResponse(url);
