import Cookies from "universal-cookie/lib";

export function setToken() {
    const cookies = new Cookies();
    const search = window.location.search;
    const params = new URLSearchParams(search);
    let token = params.get('token');
    if (token === null) {
        const cookie = cookies.get('token');
        if (cookie != null) {
            token = cookie;
        }
    }
    if (token !== null) {
        cookies.set('token', token);
    }
}

export function getToken(): string {
    const cookies = new Cookies();
    return cookies.get('token');
}