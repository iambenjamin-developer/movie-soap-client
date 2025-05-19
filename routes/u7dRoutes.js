// filepath: d:\repos\movie-soap-client\routes\u7dRoutes.js

const express = require('express');
const router = express.Router();
const axios = require('axios');
const { Builder } = require('xml2js');

const BASE_URL = 'http://10.250.10.206:8082/RightvAPIWS/services';

// Helper function to send SOAP requests
const sendSoapRequest = async (url, soapAction, xmlBody) => {
    try {
        const response = await axios.post(url, xmlBody, {
            headers: {
                'Content-Type': 'text/xml; charset=UTF-8',
                'SOAPAction': soapAction,
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Error in SOAP request to ${url}:`, error.message);
        throw error;
    }
};

// GET ASSET endpoint
router.post('/getAsset', async (req, res) => {
    const jsonBody = req.body; // JSON body from the request
    const builder = new Builder({ headless: true });

    // Convert JSON to XML
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

    const url = `${BASE_URL}/VodAPIWS83/getAsset`;
    const soapAction = '"http://VodAPIWS/xsd/getAsset"';

    try {
        const response = await sendSoapRequest(url, soapAction, xmlBody);
        res.send(response);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch asset' });
    }
});

module.exports = router;