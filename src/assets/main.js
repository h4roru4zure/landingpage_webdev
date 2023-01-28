
const API = 'https://bb-finance.p.rapidapi.com/stories/list?id=usdjpy&template=CURRENCY';

 const content = null || document.getElementById('content');
//const fetch = require('node-fetch');

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c4866fe6bbmsh8d2e2d9e128adfbp1b0cd9jsn6fb25d9037c6',
    'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com'
  }
};

async function fetchData(API) {
  const response = await fetch(API, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const noticias = await fetchData(API);
    let view = `
    ${noticias.stories.map (noticia=> `
      <div class="group relative">
        <div
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <a href="${noticia.longURL}" ><img src="${noticia.thumbnailImage}"  class="w-full" /> </a>
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
             ${noticia.title}
            
          </h3>
        </div>
      </div>
    `).slice(0,8).join('')}

    `;
    content.innerHTML = view;
  } catch (error) {
  
    console.log(error);
    window.alert(error.message);
  }
})();