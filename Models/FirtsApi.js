export async function doSearch(word) {
    const url = `https://spotify23.p.rapidapi.com/search/?q=${word}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cfdfb45219mshd9a99a4cd9ea7e5p14da4fjsnaf48a21bf1a1',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}