const axios = require('axios');
const { Builder } = require('xml2js'); // Importamos el Builder de xml2js

const API_BASE_URL = 'http://localhost:3000/api/u7d'; // Base URL for the u7d routes

const u7dService = {
    getAsset: async (jsonBody) => {
        try {
            // Convertimos el JSON a XML
            const builder = new Builder({ headless: true });
            const xmlBody = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <getAsset xmlns="http://VodAPIWS/xsd">
            ${builder.buildObject({
                assetIdentifier: jsonBody,
            })}
        </getAsset>
    </soap:Body>
</soap:Envelope>`;

            const response = await axios.post(`${API_BASE_URL}/getAsset`, { xml: xmlBody });
            return response.data;
        } catch (error) {
            console.error('Error in getAsset:', error.message);
            throw error;
        }
    },

    searchAssets: async (xmlBody) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/searchAssets`, { xml: xmlBody });
            return response.data;
        } catch (error) {
            console.error('Error in searchAssets:', error.message);
            throw error;
        }
    },

    getAssetMediaFileList: async (xmlBody) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/getAssetMediaFileList`, { xml: xmlBody });
            return response.data;
        } catch (error) {
            console.error('Error in getAssetMediaFileList:', error.message);
            throw error;
        }
    },

    createAsset: async (xmlBody) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/createAsset`, { xml: xmlBody });
            return response.data;
        } catch (error) {
            console.error('Error in createAsset:', error.message);
            throw error;
        }
    },

    createImage: async (xmlBody) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/createImage`, { xml: xmlBody });
            return response.data;
        } catch (error) {
            console.error('Error in createImage:', error.message);
            throw error;
        }
    },

    deleteAsset: async (xmlBody) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/deleteAsset`, { xml: xmlBody });
            return response.data;
        } catch (error) {
            console.error('Error in deleteAsset:', error.message);
            throw error;
        }
    },

    login: async (credentials) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/login`, credentials);
            return response.data;
        } catch (error) {
            console.error('Error in login:', error.message);
            throw error;
        }
    },
};

module.exports = u7dService;