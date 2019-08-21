import React, { Component, useRef } from 'react';
import { GetAll, AddOne, TableColumn } from './component/dbComponent';
import Axios from 'axios';

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            indexData: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:8080/').then(
            res => {
                this.setState({indexData:res.data});
            }
        ).catch(err => {
            console.log(err);
        });
    }

    setValue = data => {
        // GetAll(`employee`);
        // AddOne(`employee`);
        TableColumn(`employee`);
    }

    render() {
        return (
            <div>
                <InputForm value={this.setValue}/>
                <TableComp data={this.state.indexData}/>
            </div>
        );
    }
}

const TableComp = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
            {props.data.map(
                (res,index) => <tr key={index}>
                    <td>{res.id}</td>
                    <td>{res.name}</td>
                    <td><button>delete</button></td>
                </tr>
            )}
            </tbody>
        </table>
    );
}

const InputForm = props => {
    const idRef             = new useRef(null);
    const nameRef           = new useRef(null);

    const collectVal = async () => {
        const id    = idRef.current.value;
        const name  = nameRef.current.value;
        await props.value([id,name]);
        idRef.current.value = '';
        nameRef.current.value = '';
    } 

    return (
        <div>
            <input ref={idRef} type={`number`} placeholder={`id`} /> <br />
            <input ref={nameRef} type={`text`} placeholder={`name`} /> <br />
            <input type={`submit`} onClick={collectVal} /> <br />
        </div>
    );
}