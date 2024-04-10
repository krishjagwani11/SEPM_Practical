// script.js
document.getElementById('getDataBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        document.getElementById('dataContainer').innerText = JSON.stringify(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
