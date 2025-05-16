const soap = require('soap');
const path = require('path');

const wsdlPath = path.join(__dirname, '..', 'soap', 'MovieService_1.wsdl');
let cachedClient;

async function getClient() {
    if (cachedClient) return cachedClient;
    return new Promise((resolve, reject) => {
        soap.createClient(wsdlPath, (err, client) => {
            if (err) return reject(err);
            cachedClient = client;
            resolve(client);
        });
    });
}

const wrapCall = (methodName, args = {}) =>
    getClient().then(client => {
        return new Promise((resolve, reject) => {
            client[methodName](args, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    });

module.exports = {
    addMovie: (movie) => wrapCall('AddMovie', { movie }),
    getAllMovies: () => wrapCall('GetAllMovies'),
    getMovieById: (args) => wrapCall('GetMovieById', args),
    getMovieByCode: (args) => wrapCall('GetMovieByCode', args),
    updateMovie: (movie) => wrapCall('UpdateMovie', { movie }),
    deleteMovie: (args) => wrapCall('DeleteMovie', args),
    upsertMovie: (movie) => wrapCall('UpsertMovie', { movie }),
};
