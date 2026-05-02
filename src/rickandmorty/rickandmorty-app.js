
/**
 * @returns {Promise<Object>} episode information
 */
const fetchEpisode = async() => {

    const randomId = Math.floor(Math.random() * 51) + 1;
    
    const res = await fetch(`https://rickandmortyapi.com/api/episode/${randomId}`);
    const data = await res.json();

    console.log(data);
    return data;
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const RickandmortyApp = async(element) => {
    document.querySelector('#app-title').innerHTML = 'Rickandmorty App';
    element.innerHTML = 'Loading...';
    
    const episode = await fetchEpisode();
    element.innerHTML = 'Tenemos data!!';
}