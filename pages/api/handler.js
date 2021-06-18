export default function getAnimeList(req, res) {


    // shape of the object expected
    const query = `
    query {
      Page {
        media(isAdult: false, sort: POPULARITY_DESC) {
          id
          description
          title {
            english
          }
          coverImage {
            large
          }
        }
      }
    }
    `;


    // method required from the front end to fetch data. 
    const url = 'https://graphql.anilist.co',
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: {}
            })
        };

    fetch(url, options).then(handleResponse)
        .then(handleData)
        .catch(handleError);

    // middleware to make sure the post was successful.
    function handleResponse(response) {
        return response.json().then(function (json) {
            return response.ok ? json : Promise.catch(json);
        });
    }


    function handleData(data) {
        res.send(data);
        res.end()
    }

    function handleError(error) {
        console.error(error, 'this is the error');
    }



}