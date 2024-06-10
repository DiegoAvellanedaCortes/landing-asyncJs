const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCkQSgxGBqhGl8IWwIGJ3WbA&part=snippet%2Cid&order=date&maxResults=5';

const content= null || document.getElementById("content")

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '940d4885c8mshf93e96c5639484ep169a2cjsnf3c953ad6aca',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

//Función que conecta con el API
async function fetchData(urlAPI, options){
    const response= await fetch(urlAPI, options); //Respuesta del api
    const data=await response.json(); //Transformación de la data en un json
    return data;
}

/**
 * Estructura de función que se llama sola:
 * (async ()=> {    -------> Puede ser una Arrow function
 * })();
 */

(async ()=>{
    try{
        const videos= await fetchData(url, options);

        //Agregar elementos a html usando ciclos de javaScript

        let view= `
        ${videos.items.map(video=>`
                <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                        </h3>
                    </div>
                </div>
            `).slice(0,4).join('')}  
        `;
        content.innerHTML=view;
    }catch (error) {
        console.log(error)
    } 
})(); 