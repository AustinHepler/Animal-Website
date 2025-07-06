async function getDogImg() {
    try {
        //Pulls JSON data from dog API
        const response = await fetch('https://dog.ceo/api/breeds/image/random/50');
        if (!response.ok) throw new Error(`HTTP error - status ${response.status}`);
        //Converts JSON into JS object (array of urls)
        const dogData = await response.json();
        const container = document.getElementById("container");

        //Creates img element and assigns attributes for each url
        //and adds them to container
        dogData.message.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            img.alt = "Random dog"
            img.style.width = "200px";
            img.className = "dog";
            container.appendChild(img);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}
//Calls getDogImg function when page loads
window.addEventListener('load', () => {
    getDogImg();
});