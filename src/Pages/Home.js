import React from "react";

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = { 
            name: "",
            email: ""
        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <h2>Home page</h2>
                <p>This is Home PAGE</p>
            </div>
        );
    }
}