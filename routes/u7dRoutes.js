const express = require('express');
const router = express.Router();
const axios = require('axios');

// Base URL for the SOAP API
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
    const xmlBody = req.body.xml; // Expecting the SOAP XML body in the request
    const url = `${BASE_URL}/VodAPIWS83/getAsset`;
    const soapAction = '"http://VodAPIWS/xsd/getAsset"';

    try {
        const response = await sendSoapRequest(url, soapAction, xmlBody);
        res.send(response);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch asset' });
    }
});

// SEARCH ASSET endpoint
router.post('/searchAssets', async (req, res) => {
    const xmlBody = req.body.xml;
    const url = `${BASE_URL}/VodAPIWS83/searchAssets`;
    const soapAction = 'http://VodAPIWS/xsd/searchAssets';

    try {
        const response = await sendSoapRequest(url, soapAction, xmlBody);
        res.send(response);
    } catch (error) {
        res.status(500).send({ error: 'Failed to search assets' });
    }
});

// GET ASSET MEDIA FILE LIST endpoint
router.post('/getAssetMediaFileList', async (req, res) => {
    const xmlBody = req.body.xml;
    const url = `${BASE_URL}/VodAPIWS83/getAssetMediaFileList`;
    const soapAction = 'http://VodAPIWS/xsd/getAssetMediaFileList';

    try {
        const response = await sendSoapRequest(url, soapAction, xmlBody);
        res.send(response);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch asset media file list' });
    }
});

// CREATE ASSET endpoint
router.post('/createAsset', async (req, res) => {
    const xmlBody = req.body.xml;
    const url = `${BASE_URL}/VodAPIWS83/createAsset`;
    const soapAction = 'http://VodAPIWS/xsd/createAsset';

    try {
        const response = await sendSoapRequest(url, soapAction, xmlBody);
        res.send(response);
    } catch (error) {
        res.status(500).send({ error: 'Failed to create asset' });
    }
});

// CREATE IMAGE endpoint
router.post('/createImage', async (req, res) => {
    const xmlBody = req.body.xml;
    const url = `${BASE_URL}/CommonAPIWS83/createImage`;
    const soapAction = 'http://CommonAPIWS/xsd/createImage';

    try {
        const response = await sendSoapRequest(url, soapAction, xmlBody);
        res.send(response);
    } catch (error) {
        res.status(500).send({ error: 'Failed to create image' });
    }
});

// DELETE ASSET endpoint
router.post('/deleteAsset', async (req, res) => {
    const xmlBody = req.body.xml;
    const url = `${BASE_URL}/VodAPIWS83/deleteAsset`;
    const soapAction = 'http://VodAPIWS/xsd/deleteAsset';

    try {
        const response = await sendSoapRequest(url, soapAction, xmlBody);
        res.send(response);
    } catch (error) {
        res.status(500).send({ error: 'Failed to delete asset' });
    }
});

// LOGIN endpoint
router.post('/login', async (req, res) => {
    const { userName, password } = req.body;
    const url = 'http://10.250.10.206:8082/ums/rest/v13/Management/login';

    try {
        const response = await axios.post(url, { userName, password }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        res.send(response.data);
    } catch (error) {
        res.status(500).send({ error: 'Failed to login' });
    }
});

module.exports = router;