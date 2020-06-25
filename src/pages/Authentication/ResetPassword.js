
import React, { Component } from "react";
import { Row, Col, Alert, Card, CardBody,Container } from "reactstrap";

// Redux
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

// action
import { resetPassword } from "../../store/actions";

// import images
import profile from "../../assets/images/profile-img.png";
import logo from "../../assets/images/logo.svg";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
        token: null,
        email: null
    };

    // handleValidSubmit
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
  }

  componentDidMount() {
    const url = this.props.location.pathname.split("/");
    const token = url[3];
    const email = new URLSearchParams(this.props.location.search).get('email');
    
    this.setState({
        token: token,
        email: email
    });

  }


  // handleValidSubmit
  handleValidSubmit(event, values) {
    
    this.props.resetPassword({
      password: values.password,
      password_confirmation: values.password_confirmation,
      token: values.token,
      email: values.email,
      history: this.props.history
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="home-btn d-none d-sm-block">
          <Link to="/" className="text-dark"><i className="fas fa-home h2"></i></Link>
        </div>
        <div className="account-pages my-5 pt-sm-5">
          <Container>
            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card className="overflow-hidden">
                  <div className="bg-soft-primary">
                    <Row>
                      <Col className="col-7">
                        <div className="text-primary p-4">
                          <h5 className="text-primary">Reset Password !</h5>
                          <p>Provide us your new password.</p>
                        </div>
                      </Col>
                      <Col className="col-5 align-self-end">
                        <img src={profile} alt="" className="img-fluid" />
                      </Col>
                    </Row>
                  </div>
                  <CardBody className="pt-0">
                    <div>
                      <Link to="/">
                        <div className="avatar-md profile-user-wid mb-4">
                          <span className="avatar-title rounded-circle bg-light">
                            <img src={logo} alt="" className="rounded-circle" height="34" />
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="p-2">

                      {this.props.resetPasswordError && this.props.resetPasswordError ? (
                        <Alert color="danger" style={{ marginTop: "13px" }}>
                          {this.props.resetPasswordError}
                        </Alert>
                      ) : null}
                      {this.props.resetPasswordSuccess ? (
                        <Alert color="success" style={{ marginTop: "13px" }}>
                          {this.props.resetPasswordSuccess}
                        </Alert>
                      ) : null}

                      <AvForm
                        className="form-horizontal mt-4"
                        onValidSubmit={this.handleValidSubmit}
                      >

                        <div className="form-group">
                          <AvField
                            name="password"
                            label="New Password"
                            className="form-control"
                            placeholder="Enter password"
                            type="password"
                            value="password"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <AvField
                            name="password_confirmation"
                            label="Confirm New Password"
                            className="form-control"
                            placeholder="Confirm password"
                            type="password"
                            value="password"
                            required
                          />
                          <AvField
                            name="token"
                            type="hidden"
                            value={this.state.token}
                            required
                          />
                          <AvField
                            name="email"
                            type="hidden"
                            value={this.state.email}
                            required
                          />
                        </div>
                        
                        <Row className="form-group">
                          <Col className="text-right">
                            <button
                              className="btn btn-primary w-md waves-effect waves-light"
                              type="submit"
                            >
                              Reset
                              </button>
                          </Col>
                        </Row>
                      </AvForm>
                    </div>
                  </CardBody>
                </Card>
                <div className="mt-5 text-center">
                  <p>
                    Go back to{" "}
                    <Link
                      to="login"
                      className="font-weight-medium text-primary"
                    >
                      Login
                      </Link>{" "}
                  </p>
                  <p>© {new Date().getFullYear()} Chrono. Crafted with <i className="mdi mdi-heart text-danger"></i> by SingleDraft</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = state => {
  const { resetPasswordError, resetPasswordSuccess } = state.ForgetPassword;
  return { resetPasswordError, resetPasswordSuccess };
};

export default withRouter(
  connect(mapStatetoProps, { resetPassword })(ResetPassword)
);
