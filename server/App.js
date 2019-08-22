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
    const sql = `SELECT * FROM employee as em 
                LEFT JOIN department as dep ON dep.dep_id = em.dep_no
                LEFT JOIN del_tmp as del ON del.table_name = 'employee' and del.target_id = em.id`;
    const selectedValue = await db.any(sql);
    res.send(selectedValue);
});

app.post('/api/rawQuery', async (req, res) => {
    const query = await RawQuery(req.body.sql);
    res.send(query);
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
    const bd_res = await addOne(req.body.table, req.body.data);
    res.send(bd_res);
});

app.post('/api/TmpDel', async (req, res) => {
    const db_res = await RemoveTmp(req.body.table, req.body.data);
    res.send(db_res);
});

app.post('/api/Delete', async (req, res) => {
    const db_res = await Remove(req.body.table, req.body.condition);
    res.send(db_res);
});

const RawQuery = async (sql) => {
    try {
        return res = await db.any(sql);
    } catch (err) {
        return err;
    }
}

const dbselect = async (field, table, where = `1=1`) => {
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

const addOne = async(table, data) => {
    let field = '',value = '';
    for (let obj in data){
        obj ? field += `${obj},` : null;
        data[obj] ? value += `'${data[obj]}',` : null;
    }

    try {
        field = field.substr(0, field.length - 1);
        value = value.substr(0, value.length -1);

        const res = await db.any(`INSERT INTO ${table} (${field}) VALUES(${value});`);
        return res;
    } catch (err) {
        return err;
    }
}

const RemoveTmp = async (table, id) => {
    try {
        const res = await db.any(`INSERT INTO del_tmp (table_name,target_id) VALUES('${table}','${id}');`);
        return res;
    }catch (err) {
        return err;
    }
}

const Remove = async (table, condition) => {
    try {
        const res = await db.any(`DELETE FROM ${table} WHERE ${condition}`);
    }catch (err) {
        return err;
    }
}


app.listen(port, () => {
    console.log('Runing on port 8080');
});