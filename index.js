const soap = require('soap');
const path = require('path');

// Ruta al archivo WSDL
const wsdlPath = path.join(__dirname, 'soap', 'MovieService_1.wsdl');

// Crear cliente SOAP
soap.createClient(wsdlPath, (err, client) => {
    if (err) {
        console.error('Error al crear el cliente SOAP:', err);
        return;
    }

    console.log('Cliente SOAP creado con éxito');

    // Película de ejemplo para insertar
    const args = {
        movie: {
            Code: 'MDE6549821',
            Director: 'Steve spielbert',
            Id: 1,
            Title: 'The Matrix 2',
            Year: 2010
        }
    };

    client.UpsertMovie(args, (err, result) => {
        if (err) {
            console.error('Error al llamar a UpsertMovie:', err);
        } else {
            console.log('Respuesta del servicio:', JSON.stringify(result, null, 2));
        }
    });
});
