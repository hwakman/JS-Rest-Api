import React, { Component } from 'react';

export default class Edit extends Component {
    constructor() {
        super();
    }

    render () {
        if(this.props.table) {
            return (
                <div>
                    {this.props.table}
                </div>
            );
        }
    }
}