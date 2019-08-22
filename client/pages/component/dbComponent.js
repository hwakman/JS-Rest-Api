import Axios from 'axios';

const url = 'http://localhost:8080/api';

// Query with raw sql
export const RawQuery = async (sql) => {
    if(sql) {
        try {
            const Query = await Axios.post(`${url}/rawQuery`,{sql});
            return Query.data;
        }catch (err) {return err;}
    }
}

// Select all column on table
export const GetAll = table => {
    if(table) {
        Axios.post(`${url}/getAll`,{table})
        .then(res => {return res.data;}
        ).catch(err => {return err;});
    }
}

// Inser single row to table
export const AddOne = (table,data) => {
    if (table && data) {
        Axios.post(`${url}/addOne`,{table,data})
        .then(res => {console.log(res);});
    }
}

// Set request to remove data
export const TmpDel = (table,data) => {
    if (table && data) {
        Axios.post(`${url}/tmpDel`,{table,data})
        .then(res => {console.log(res);});
    }
}

export const AdminDel = async (table,condition) => {
    if(table && condition) {
        Axios.post(`${url}/Delete`,{table,condition})
        .then(res => {console.log(res);});
    }
}

// Select column name form tartget table
export const TableColumn = async (table) => {
    if(table) {
        try {
            const colname = await Axios.post(`${url}/TableColumn`,{table});
            return colname.data;
        }catch (err){return err;}
    }
}