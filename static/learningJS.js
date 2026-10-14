document.getElementById('message').textContent = ("Hello from the JS file!");

fetch("/api/player-stats")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response failed");
        }
        return response.json();
    })
    .then((data) => {

        messageDisplay.innerHTML = `<strong>${data.player}</strong> (${data.team}) — Weekly Points: <strong>${data.points}</strong>`;
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
        messageDisplay.textContent = "Failed to load player stats.";
    });
