import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

const getResource = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Could not fetch ${url}`);
    }
    return await response.json();
};

getResource('http://localhost:8080/api/users/', { mode: 'no-cors'})
    .then((body) => {
        console.log(body);
    })
    .catch((err) => {
        console.error('Could not fetch', err);
    });

ReactDOM.render(<App />, document.getElementById('root'));
