const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');

const app= express();

const PORT = process.env.PORT || 4000;

// Settings
app.set("view engine", ".hbs");
app.set('views',path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));

// Handlebars config
app.engine(
    '.hbs', 
    hbs({
    defaultLayout: "main",
    layoutDir: path.join(app.get('views'), 'layout'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: ".hbs"
        })
);

app.get('/', (req, res)=>{
    res.send('Pagina de inicio')
});

app.get('/Servicios', (req, res)=>{
    res.send('Pagina de Servicio')
});

app.get('/Nosotros', (req, res)=>{
    res.send('Pagina de Nosotros')
});

app.get('/Contacto', (req, res)=>{
    res.send('Pagina de contacto')
});

app.use((req, res)=>{
    res.send('404')
});

app.listen(PORT, ()=>{
    console.log(`Server at http://localhost:${PORT}`);
});