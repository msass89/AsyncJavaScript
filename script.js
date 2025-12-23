function AsyncFunction(callback)
{
    GetPromise()
        .then((data) => {
            let dataContainer = document.getElementById('data-container');
            dataContainer.innerHTML = 'The API contained the following names: </br>';

            for (let i = 0; i < data.length; i++)
            {
                dataContainer.innerHTML += data[i].name + '</br>';
            }
        })
        .catch(error => console.error(error.message));
}

async function GetPromise() {
    const container = document.getElementById('data-container');
    container.innerHTML = 'Start Fetching Data...';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error('HTTP Fehler');
        }

        const data = await response.json();

        if (data.length < 1) {
            throw new Error('Keine Daten vorhanden');
        }

        return data;
    }
    catch (error) {
        throw error;
    }
}

document.querySelector('button').addEventListener('click', AsyncFunction);