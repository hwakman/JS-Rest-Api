import Round from './component/roundLink';
import React, { Component, useRef } from 'react';
import { RawQuery, TableColumn, AdminDel } from './component/dbComponent';


export default class RequestList extends Component {

    constructor() {
        super();
        this.state = {
            listHead: [],
            listItem: []
        };
        this.reloadComponent = this.reloadComponent.bind(this);
    }

    componentDidMount = async () => {
        await this.getHead();
        await this.reloadComponent();
    }

    reloadComponent = async () => {
        const sql = `SELECT * FROM employee as em
                     LEFT JOIN del_tmp as del 
                     ON del.table_name = 'employee'
                     AND del.target_id = em.id
                     WHERE target_id IS NOT NULL;`;
        const value = await RawQuery(sql);
        return this.setState({listItem:value});
    }

    getApprove = async (target) => {
        const confirm = prompt(`please input "Remove" to confirm.`);
        
        if(confirm == 'Remove'){
            try {
                await AdminDel(`del_tmp`, `table_name = 'employee' AND target_id = '${target}'`);
                await AdminDel(`employee`, `id = '${target}'`);
                await alert(`Request was Approved.`);
                await this.reloadComponent();
            }catch (err){console.log(err)}            
        }
    }

    getReject = async (target) => {
        try {
            await AdminDel(`del_tmp`, `table_name = 'employee' AND target_id = '${target}'`);
            await alert(`Request was rejected.`);
            await this.reloadComponent();
        }catch (err){console.log(err)}
    }

    getHead = async () => {
        const colName = await TableColumn(`employee`);
        return this.setState({listHead:colName});
    }

    render() {
        return (
            <React.Fragment>
                <Round />
                <TableList 
                    listItem={this.state.listItem}
                    getApprove={this.getApprove}
                    getReject={this.getReject}
                />
            </React.Fragment>
        );
    }
}

const TableList = props => {
    return(
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th colSpan="2">action</th>
                </tr>
            </thead>

            <tbody>
                {props.listItem.map((value,index) => 
                    <tr key={index}>
                        <td>{value.name}</td>
                        <td>
                            <button onClick={props.getApprove.bind(this,value.id)}>Approve</button>
                            <button onClick={props.getReject.bind(this,value.id)}>Reject</button>
                        </td>
                    </tr>    
                )}
            </tbody>
        </table>
    );
}