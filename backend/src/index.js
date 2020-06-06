//Importando funcionalidades do express
const express = require("express");
const routes = require("./routes");
const cors = require("cors");

//Criando variavel para armanezar aplicação
const app = express();

//Conversão do json em javascript
app.use(express.json());
app.use(cors());
app.use(routes);

/**
 * Rota Recurso
 * 
 * GET: Buscar/listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query: Parâmetros nomeados enviados na rota após '?' (Filtros, paginação)
  * Route Params: Para^metros utilizados para identificar recursos"
  * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
  */


//Criando primeira rota


//Aplicação acessar a porta 3333
app.listen(3333);

