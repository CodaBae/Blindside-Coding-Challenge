const liveUrl = 'https://code-inclusive.herokuapp.com';
const staging = 'http://localhost:8080';


const baseUrl = liveUrl;

const urls = {
    AUTH: {
        login: `${baseUrl}/auth/login`,
        register: `${baseUrl}/auth/register`
    }
}

export default urls