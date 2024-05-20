const sqlite3 = require('sqlite3').verbose();

// Conectar ao banco de dados
const db = new sqlite3.Database('database.db');

// Controller para buscar todos os produtos
exports.getAllProducts = (req, res) => {
    const query = 'SELECT * FROM products';
    db.all(query, (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Erro ao buscar produtos' });
        }
        res.json(rows);
    });
};
