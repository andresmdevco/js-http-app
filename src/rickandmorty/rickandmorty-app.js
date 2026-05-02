
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
    // await fetchEpisode();

    const episodeNameLabel = document.createElement('blockquote');
    const episodeCodeLabel = document.createElement('h3');
    const nextEpisodeButton = document.createElement('button');
    nextEpisodeButton.innerText = 'Next Episode';
    

    const renderEpisode = (data) => {
        episodeNameLabel.innerHTML = data.name;
        episodeCodeLabel.innerHTML = data.episode;
        element.replaceChildren(episodeNameLabel, episodeCodeLabel, nextEpisodeButton);
    }


    // Añadir Listener
    nextEpisodeButton.addEventListener('click', async() => {
        element.innerHTML = 'Loading...';
        const episode = await fetchEpisode();
        renderEpisode(episode);

    });


    fetchEpisode()
        .then(renderEpisode);
}