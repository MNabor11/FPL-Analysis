document.getElementById('message').textContent = ("Hello from the JS file!");

fetch("/api/player-stats")
    .then(response => response.json())
    .then(stats => {
        document.getElementById("Manager").textContent = stats.Manager;


    }).catch(error => {
        console.error("Error fetching data:", error);
    })
