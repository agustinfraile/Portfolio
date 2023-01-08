const request = require('supertest');
const app = require('../../app');

it('Puede enviar correos electronicos con datos de entrada validos' , async () => {
    return request(app)
        .post('/api/mail')
        .send({
            to: 'agustinfrailedev@gmail.com', 
            subject: 'Subject', 
            text: 'texto cualquiera', 
            html: '<strong>Esto es un texto cualquiera</strong>'
        })
        .expect(201);
});