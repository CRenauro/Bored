const searchButton = document.getElementById("searchInput")

async function getFish() {

    // debugger;
    console.log("getFish...");
    try {
        // Get all posts
        // const response = await fetch("/api/post");

        // Grab search box input value here
        // For now, we temporarily assign "1" to a const variable 
        const searchInput = "1"; 
        const URL = "/api/post" + "/" + searchInput;
        console.log("getFish - url: " + URL);

        const response = await fetch(URL);
        console.log(response);

        const data = await response.json();
        console.log("/api/post - data:", data);

    } catch (err) {
        console.log(err);
    }

}

searchButton.addEventListener("click", function(e) {
    e.preventDefault()
    console.log("Running function ");
    getFish()
})