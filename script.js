//Function pair that adds and removes loading element
function showLoading() {
    const loading = document.getElementById("loading");
    if (loading) loading.style.display = "block";
}

function hideLoading() {
    const loading = document.getElementById("loading");
    if (loading) loading.style.display = "none";
}

async function getDogImg() {
    showLoading();

    try {
        //Pulls JSON data from dog API
        const response = await fetch('https://dog.ceo/api/breeds/image/random/50');
        if (!response.ok) throw new Error(`HTTP error - status ${response.status}`);
        //Converts JSON into JS object (array of urls)
        const dogData = await response.json();
        const container = document.getElementById('dog-container');

        //Creates img element and assigns attributes for each url
        //and adds them to container
        dogData.message.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            img.alt = "Random dog"
            img.style.width = "200px";
            img.className = "dog";
            img.loading = "lazy";
            container.appendChild(img);
        });
    } catch (error) {
        console.error('Error:', error);
    } finally {
        hideLoading();
    }
}


async function getCatImg() {
    showLoading();

    try {
        //Pulls JSON data from cat API
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=50&api_key=live_aN4wP6vjW7Ym97TdVB4Ufsp5ORkl9pGjrdFMCydPlPTD2Wr1xxJ84W2BAtoZkEcM');
        if (!response.ok) throw new Error(`HTTP error - status ${response.status}`);
        //Converts JSON into JS object (array of urls)
        const catData = await response.json();
        const container = document.getElementById('cat-container');

        //Creates img element and assigns attributes for each url
        //and adds them to container
        catData.forEach(cat => {
            const img = document.createElement('img');
            img.src = cat.url;
            img.alt = "Random cat"
            img.style.width = "200px";
            img.className = "cat";
            img.loading = "lazy";
            container.appendChild(img);
        });
    } catch (error) {
        console.error('Error:', error);
    } finally {
        hideLoading();
    }
}

if (document.title === "Dogs") {
    //Calls getDogImg function when page loads
    window.addEventListener('load', () => {
    getDogImg();
    document.querySelector('.load-more-btn').addEventListener('click', () => {
        getDogImg();
    })
})
} else if (document.title === "Cats") {
    //Calls getCatImg function when page loads
    window.addEventListener('load', () => {
    getCatImg();
    document.querySelector('.load-more-btn').addEventListener('click', () => {
        getCatImg();
    })
});
}

