document.getElementById('fetchData').addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:3000/api');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.text();
        document.getElementById('response').textContent = data;
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('response').textContent = 'Failed to fetch data';
    }
});
