const express = require('express');
const app= express();

const PORT = 3000;


app.get('/', (req, res)=>{
    res.send('Ruta de inicio del proyecto')
});

app.get('/Servicio', (req, res)=>{
    res.send('Pagina de Servicio')
});

app.get('/Nosotros', (req, res)=>{
    res.send('Pagina de Nosotros')
});

app.get('/Contacto', (req, res)=>{
    res.send('Pagina de contacto')
});


app.listen(PORT, ()=>{
    console.log(`Server on http://localhost:${PORT}`);
});

