import React from 'react';

export default class PersonList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return  (
                    this.props.people.length > 0 ?
                        this.props.people.map( person => <li>{person}</li>)  : 
                        "There are no people to list"
                ) 
    }
}