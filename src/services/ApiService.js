
export default class ApiService {

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
        return await this.getResource(`users/`);
    }
}