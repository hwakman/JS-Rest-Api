const port      = '8080';
const cors      = require('cors');
const bodyParser    = require('body-parser');
const app       = require('express')();
const pgp       = require('pg-promise')();
const db        = pgp('postgres://manager:5432@db:5432/my_db');

db.connect((err) => {
    if (err) throw err;
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
    const selectedValue = await dbselect(`*`,`employee`);
    res.send(selectedValue);
});

app.post('/api/getAll', async (req, res) => {
    const value = await getAll(req.body.table);
    res.send(value);
});

app.post('/api/TableColumn', async (req, res) => {
    let column = [];
    const value = await getTable(req.body.table);
    value.map(value => column.push(value.column_name))
    res.send(column);
});

app.post('/api/addOne', async (req, res) => {
    console.log(req.body);
});

app.listen(port, () => {
    console.log('Runing on port 8080');
});

const dbselect = async (field,table,where = `1=1`) => {
    try {
        return value = await db.any(`SELECT ${field} FROM ${table} where ${where}`,[true]);
    }catch(err){
        return console.log(`Select fails. ${err}`);
    }
}

const getAll = async(table) => {
    try {
        return value = await db.any(`SELECT * FROM ${table}`,[true]);
    }catch(err) {
        return console.log(err);
    }
}

const getTable = async(table) => {
    try {
        return value = await db.any(`SELECT COLUMN_NAME FROM information_schema.COLUMNS 
        WHERE TABLE_NAME = '${table}'`, [true]);
    }catch(err) {
        return console.log(err);
    }
}

const addOne = async(table,data) => {
    try {
        console.log(table, data);
    }catch(err) {
        return console.log(err);
    }
}