import Round from './component/roundLink';
import React, { Component, useRef } from 'react';
import { RawQuery,TableColumn } from './component/dbComponent';


export default class History extends Component {

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
                     LEFT JOIN department as dep
                     ON em.dep_no = dep.dep_id
                     WHERE target_id IS NULL;`;
        const value = await RawQuery(sql);
        return this.setState({listItem:value});
    }

    getHead = async () => {
        const colName = await TableColumn(`employee`);
        return this.setState({listHead:colName});
    }

    render() {
        return (
            <React.Fragment>
                <Round />
                <TableList listHead={this.state.listHead} listItem={this.state.listItem} />
            </React.Fragment>
        );
    }
}

const TableList = props => {
    return(
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>department</th>
                </tr>
            </thead>

            <tbody>
                {props.listItem.map((list,index) => 
                    <tr key={index}>
                        <td>{list.id}</td>
                        <td>{list.name}</td>
                        <td>{list.dep_name}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}