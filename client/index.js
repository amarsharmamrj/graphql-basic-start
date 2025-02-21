function fetchGreeting() {
    console.log('fetching..')

    const query = { query: 'query { greeting }' }

    fetch('http://localhost:9000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(query)
    })
        .then((res) => res.json())
        .then((result) => {
            console.log(result)
            document.getElementById('greet').textContent = result.data.greeting
        })
        .catch((error) => console.log(error))
}

fetchGreeting()