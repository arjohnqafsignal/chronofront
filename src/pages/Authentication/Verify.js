import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// actions
import { verifyUser } from '../../store/actions';

class Verify extends Component {

    constructor(props) {
        super(props);
        this.state = {}

        // handleValidSubmit
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
    }

    // handleValidSubmit
    handleValidSubmit(event, values) {
        this.props.loginUser(values, this.props.history);
    }

    componentDidMount()
    {
        const url = this.props.location.pathname.split("/");
        const userId = url[3];

        const expire = new URLSearchParams(this.props.location.search).get('expires');
        const signature = new URLSearchParams(this.props.location.search).get('signature');

        this.props.verifyUser({
            userId: userId,
            expire: expire,
            signature: signature,
            history: this.props.history
        });
    }

    render() {

        return (
            <React.Fragment>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { verify } = state.Verify;
    return { verify };
}

export default withRouter(connect(mapStatetoProps, { verifyUser })(Verify));

