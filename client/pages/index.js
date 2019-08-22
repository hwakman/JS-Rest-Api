import React, { Component, useRef } from 'react';
import { AddOne, TmpDel } from './component/dbComponent';
import Round from './component/roundLink';
import Rounter from 'next/router';
import Axios from 'axios';

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            indexData: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:8080/').then(res => {this.setState({indexData:res.data});}
        ).catch(err => {console.log(err);});
    }

    setValue = async (data) => {
        try {
            await AddOne(`employee`,data);
            await alert(`member name "${data.name}" has added.`);
            await Axios.get('http://localhost:8080/').then(res => {this.setState({indexData:res.data});}
            ).catch(err => {console.log(err);});
        }catch (err){
            alert(err);
        }
    }

    editVal = async (table, target) => {
        console.log(table, target);
    }

    delValue = async (table,target) => {
        try {
            await TmpDel(table,target);
            await alert(`Wating for approve.`);
            await Axios.get('http://localhost:8080/').then(res => {this.setState({indexData:res.data});}
            ).catch(err => {console.log(err);});
        } catch (err){
            alert(err);
        }
    }

    render() {
        return (
            <div>
                <Round />
                <InputForm value={this.setValue}/>
                <TableComp 
                    data={this.state.indexData} 
                    editVal={this.editVal} 
                    delValue={this.delValue} 
                />
            </div>
        );
    }
}

const TableComp = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th>no.</th>
                    <th>role</th>
                    <th>name</th>
                    <th>status</th>
                    <th col={2}>action</th>
                </tr>
            </thead>
            <tbody>
            {props.data.map(
                (res,index) => <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{res.dep_name}</td>
                    <td>{res.name}</td>
                    <td>{res.target_id ? <b>Request To Remove</b>:`available`}</td>
                    <td>
                        {
                            res.target_id ?
                            <button disabled>edit</button>:
                            <button onClick={props.editVal.bind(this,`employee`,res.id)}>edit</button>
                        }
                    </td>
                    <td>
                        {
                            res.target_id ?
                            <button disabled>delete</button>:
                            <button onClick={props.delValue.bind(this,`employee`,res.id)}>delete</button>
                        }
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    );
}

const InputForm = props => {
    const roleRef           = new useRef(null);
    const nameRef           = new useRef(null);

    const collectVal = async () => {
        const dep_no    = roleRef.current.value;
        const name      = nameRef.current.value;
        if(name){
            await props.value({name,dep_no});
            nameRef.current.value = '';
        }
    } 

    return (
        <div>
            <input ref={nameRef} type={`text`} placeholder={`name`} />
            <select ref={roleRef}>
                <option value="1">Manager</option>
                <option value="2">Helpdesk</option>
            </select>
            <input type={`submit`} onClick={collectVal} /> <br />
        </div>
    );
}