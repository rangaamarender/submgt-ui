// PROD - other than dev environment
const qa = {
    url: {
        KEYCLOAK_BASE_URL: 'https://keycloak.herokuapp.com',
        API_BASE_URL: 'http://20.42.92.222/submgt-0.0.1-SNAPSHOT',
    },
    pagination: {
        defaultPage: '1',
        defaultPageSize: '15',
    },
    webContext: {
        context: '/submgt',
    },
};

const dev = {
    url: {
        KEYCLOAK_BASE_URL: 'http://localhost:8080',
        API_BASE_URL: 'http://localhost:8080/api',
    },
    pagination: {
        defaultPage: '1',
        defaultPageSize: '15',
    },
    webContext: {
        context: '/submgt',
    },
};
console.log(' ======= Environment ==========' + process.env.NODE_ENV);
export const config = process.env.NODE_ENV === 'development' ? dev : qa;
