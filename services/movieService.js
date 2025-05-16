const soap = require('soap');
const path = require('path');

const wsdlPath = path.join(__dirname, '..', 'soap', 'MovieService_1.wsdl');

let cachedClient = null;

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

async function upsertMovie(movie) {
    const client = await getClient();
    return new Promise((resolve, reject) => {
        client.UpsertMovie({ movie }, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

// Aquí podrías agregar más funciones si el WSDL tiene más operaciones

module.exports = {
    upsertMovie
};
