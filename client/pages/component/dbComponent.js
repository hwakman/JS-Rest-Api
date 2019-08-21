import Axios from 'axios';

const url = 'http://localhost:8080/api';

export const GetAll = table => {
    Axios.post(`${url}/getAll`,{table}).then(
        res => {
            return res.data;
        }
    ).catch(
        err => {
            return err;
        }
    );
}

export const AddOne = (table,data) => {
    Axios.post(`${url}/addOne`,{table,data}).then(
        res => {
            console.log(res);
        }
    );
}

export const TableColumn = (table) => {
    Axios.post(`${url}/TableColumn`,{table}).then(
        res => {
            console.log(res.data);
        }
    ).catch(
        err => console.log(err)
    );
}