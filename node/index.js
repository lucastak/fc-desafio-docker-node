const express = require('express');
const mysql = require('mysql2');

class NameDB {
  constructor() {
    this.dbConfig = {
      host: 'db',
      user: 'root',
      password: 'root',
      database: 'nodedb',
    };
    this.names = [
      'Luke Skywalker', 'Darth Vader', 'Han Solo', 'Leia Organa', 'Obi-Wan Kenobi',
      'Yoda', 'Chewbacca', 'R2-D2', 'C-3PO', 'Palpatine'
    ];
  }

  getRandomName() {
    const RANDOM = Math.floor(Math.random() * this.names.length);
    return this.names[RANDOM];
  }

  insertName(res) {
    const name = this.getRandomName();
    const connection = mysql.createConnection(this.dbConfig);
    const INSERT_QUERY = `INSERT INTO people(name) VALUES('${name}')`;

    connection.query(INSERT_QUERY, (error) => {
      if (error) {
        console.error(`Erro ao inserir nome: ${error}`);
        res.status(500).send('Erro ao inserir nome:');
        return;
      }
      console.log(`${name} inserido com sucesso no DB!`);
      this.getAll(res, connection);
    });
  }

  getAll(res, connection) {
    const SELECT_QUERY = 'SELECT id, name FROM people';
    
    connection.query(SELECT_QUERY, (error, results) => {
      if (error) {
        console.error(`Erro ao fazer get no people: ${error}`);
        res.status(500).send('Erro ao fazer get no people');
        return;
      }

      const tableRows = results.map(person => `
        <tr>
          <td>${person.id}</td>
          <td>${person.name}</td>
        </tr>
      `).join('');
      
      const table = `
        <table>
          <tr>
            <th>Nome</th>
          </tr>
          ${tableRows}
        </table>
      `;

      res.send(`
        <h1>Full Cycle Rocks!</h1>
        ${table}
      `);
      
      connection.end();
    });
  }
}

const app = express();
const PORT = 3000;
const nameDB = new NameDB();

app.get('/', (_req, res) => {
  nameDB.insertName(res);
});

app.listen(PORT, () => {
  console.log(`rodando na porta: ${PORT} 🚀`);
});
