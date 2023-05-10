import express from "express";
import indexRoutes from './routes/index.routes';
import expressHandlebars from "express-handlebars";
import path from "path";
import './database'
import morgan from "morgan";


const app = express();

app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', expressHandlebars({
  layoutsDir: path.join(app.get('views'), 'layouts'),
  defaultLayout: 'main',
  extname: ".hbs",
}));
app.set("view engine", ".hbs")

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended:false }));

//routes
app.use(indexRoutes);

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Aplicación web dinámica ejecutándose en el puerto http://localhost:3000');
});
