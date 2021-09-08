const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors())


const PORT = process.env.PORT || 4000;

 app.use("/app" , require('./routes/app'));
 app.use("/carrusel" , require('./routes/carrusel'));
 app.use("/carta" , require('./routes/carta'));
 app.use("/mapa" , require('./routes/mapa'));
 app.use("/nosotros" , require('./routes/nosotros'));
 app.use("/redes" , require('./routes/redes'));
 app.use("/telefonos" , require('./routes/telefonos'));
 app.use("/docen" , require('./routes/docen'));

app.listen(PORT, () => {
    console.log("localhost:" + PORT);
})