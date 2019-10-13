import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

class ApiService {

    _apiBase = 'http://localhost:8080/api/';

    async getResource(url) {
        const response = await fetch(`${this._apiBase}${url}`);

        if (!response.ok) {
            throw new Error(`Could not fetch ${this._apiBase}${url}`);
        }
        return await response.json();
    }

    getUser(id) {
        return this.getResource(`users/${id}`);
    }

    async getAllUsers() {
        const response = await this.getResource(`users/`);
        return response;
    }
}

const api = new ApiService();

api.getAllUsers().then((users) => {
        users.forEach((user) => {
            console.log(user);
        });
});

ReactDOM.render(<App />, document.getElementById('root'));
