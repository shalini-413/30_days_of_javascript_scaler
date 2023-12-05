function getData() {
    const fetchData = (url) => fetch(url).then(response => response.json());

    const quoteApi = 'https://api.quotable.io/random';
    const positiveWordApi = 'https://www.affirmations.dev';

    return fetchData(quoteApi)
        .then(quoteData => fetchData(positiveWordApi)
            .then(positiveWordData => ({ quote: quoteData.content, positiveWord: positiveWordData.affirmation }))
        );
}
getData()
    .then(combinedData => console.log(combinedData))
    .catch(error => console.error('Error fetching data:', error));
