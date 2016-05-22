const fs = require('fs');
const path = require('path');
const { introspectionQuery } = require('graphql/utilities');
const fetch = require('isomorphic-fetch');


const GRAPHQL_ENDPOINT = 'http://127.0.0.1:8000/graphql/';
const SCHEMA_DESTINATION = path.join(__dirname, 'schema');


fetch(GRAPHQL_ENDPOINT + '?query=' + introspectionQuery)
    .then(response => response.json())
    .then(json => {
        fs.writeFileSync(
            `${SCHEMA_DESTINATION}.json`,
            JSON.stringify(json, null, 2)
        );
    })
    .catch(error => {
        console.error('Unable to fetch GraphQL schema!');
        console.error(error);
    });
