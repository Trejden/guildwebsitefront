import React, { Component } from "react";


class StatusBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        fetch("http://192.168.1.131:3001/profile")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        status: result,
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            if(this.state.status==null)
            {
                return(
                    <div>
                        <h1 class="content"> Profile</h1><br />
                        <span><strong>user id</strong>error</span><br />
                    </div>
                )
            }else
            {
                return (
                    <div>
                        <h1 className="content"> Profile</h1><br/>
                        <span><strong>user id</strong>{this.state.status.user.id}</span><br/>
                    </div>
                );
            }
        }
    }
}

export default StatusBoard;