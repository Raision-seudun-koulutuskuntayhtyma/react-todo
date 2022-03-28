import axios from 'axios';

export function kirjaudu(kayttaja, salasana) {
    axios.defaults.auth = {
        username: kayttaja,
        password: salasana
    };
    return true;
}

export function haeTehtavat() {
    return axios.get(`http://127.0.0.1:8000/api/tehtavat/`);
}

export function merkitseTehdyksi(id) {
    return axios.patch(`http://127.0.0.1:8000/api/tehtavat/${id}/`, {
        tehty: true
    });
}
