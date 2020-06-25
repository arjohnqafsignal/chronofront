import React, { Component } from "react";

import { Modal, Row, Col, Card, CardBody, TabContent, TabPane, NavItem, NavLink, Label , Input, Form, FormGroup, Progress, Button} from "reactstrap";

import { connect } from "react-redux";

import { Link } from "react-router-dom";


import Select from "react-select";
import classnames from 'classnames';
var moment = require('moment-timezone');


class GettingStarted extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: true,
            activeTab: 1,
            activeTabProgress: 1,
            progressValue : 25,
            rows: [],
            timezones: null,
            timezone: null
        };
        
        this.toggleTab.bind(this);
        this.toggleTabProgress.bind(this);  
        this.handleSelectTimezone = this.handleSelectTimezone.bind(this);
    }

    componentDidMount() {
        var timeZones = moment.tz.names();
        var offsetTmz=[];

        for(var i in timeZones)
        {
            var timeZone = {
                "label" : timeZones[i],
                "value" : timeZones[i]
            }
            offsetTmz.push(timeZone);
        }
        this.setState({ 
            timezones: offsetTmz,
            timezone: "Asia/Manila"
        });
    }

    handleSelectTimezone = selectedTimezone => {
        this.setState({ timezone: selectedTimezone.value });
    }

    handleAddRow = () => {
        const item = {
            name: ""
        };
        this.setState({
            rows: [...this.state.rows, item]
        });
    }

    handleRemoveRow = (e, idx) => {
        if (typeof (idx) != "undefined")
            document.getElementById("addr" + idx).style.display = "none";
    }

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            if(tab >= 1 && tab <=4 ){
                this.setState({
                    activeTab: tab
                });
            }
        }
    }

    toggleTabProgress(tab) {
        if (this.state.activeTabProgress !== tab) {
            if(tab >= 1 && tab <=4 ){
                this.setState({
                  activeTabProgress: tab
                });
    
              if(tab === 1) { this.setState({progressValue : 25}) }
              if(tab === 2) { this.setState({progressValue : 50}) }
              if(tab === 3) { this.setState({progressValue : 75}) }
              if(tab === 4) { this.setState({progressValue : 100}) }
            }
        }
    }




  render() {
    const { timezone } = this.state;
    return (
        <React.Fragment>
            <Modal isOpen={this.state.modal} centered={true} size="xl">
                <div className="modal-header">
                    <h5 className="modal-title mt-0" id="myLargeModalLabel">Welcome User, let's get started.</h5>
                    <button onClick={() => this.setState({ modal: false }) } type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <Col>
                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Setup your Account.</h4>
                                <div id="progrss-wizard" className="twitter-bs-wizard">
                                    <ul className="twitter-bs-wizard-nav nav-justified nav nav-pills">
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.activeTabProgress === 1 })} onClick={() => { this.toggleTabProgress(1); }} >
                                                <span className="step-number mr-2">01</span>
                                                Company Details
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.activeTabProgress === 2 })} onClick={() => { this.toggleTabProgress(2); }} >
                                                <span className="step-number mr-2">02</span>
                                                <span>Company Departments</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.activeTabProgress === 3 })} onClick={() => { this.toggleTabProgress(3); }} >
                                                <span className="step-number mr-2">03</span>
                                                Job Positions
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.activeTabProgress === 4 })} onClick={() => { this.toggleTabProgress(4); }} >
                                            <span className="step-number mr-2">04</span>
                                                Confirm Detail
                                            </NavLink>
                                        </NavItem>
                                    </ul>
                                    <div id="bar" className="mt-4">
                                        <Progress color="success" striped animated value={this.state.progressValue} />
                                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"></div>
                                    </div>
                                    <TabContent activeTab={this.state.activeTabProgress} className="twitter-bs-wizard-tab-content">
                                        <TabPane tabId={1}>
                                            <Form>
                                                <Row>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <Label for="basicpill-firstname-input14">Company Name</Label>
                                                            <Input type="text" className="form-control" id="basicpill-firstname-input14"/>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <Label for="basicpill-lastname-input15">Registration Number(Optional)</Label>
                                                            <Input type="text" className="form-control" id="basicpill-lastname-input15"/>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <Label for="basicpill-phoneno-input16">Company Email</Label>
                                                            <Input type="text" className="form-control" id="basicpill-phoneno-input16"/>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <Label for="basicpill-email-input17">Company Website</Label>
                                                            <Input type="email" className="form-control" id="basicpill-email-input17"/>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <Label for="basicpill-phoneno-input16">Company Timezone</Label>
                                                            <Select options={this.state.timezones} classNamePrefix="select2-selection" onChange={this.handleSelectTimezone}  />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <Label for="basicpill-email-input17">Default Schedule</Label>
                                                            <Input type="email" className="form-control" id="basicpill-email-input17"/>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg="12">
                                                        <FormGroup>
                                                            <Label for="basicpill-address-input2">Address</Label>
                                                            <textarea id="basicpill-address-input2" className="form-control" rows="2"></textarea>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </TabPane>
                                        <TabPane tabId={2}>
                                            <table style={{ width: "100%" }}>
                                                <tbody>
                                                    <tr id="addr01" key="">
                                                        <td>
                                                            <Form className="repeater">
                                                                <div data-repeater-list="group-a">
                                                                    <Row data-repeater-item>
                                                                        <Col lg="10" className="form-group">
                                                                            <Label htmlFor="name">Deparment Name</Label>
                                                                            <Input type="text" id="name" name="untyped-input" className="form-control" />
                                                                        </Col>

                                                                        <Col lg="2" className="form-group align-self-center">
                                                                            <Button onClick={e => this.handleRemoveRow(e, "01") } color="primary" className="mt-3"  style={{ width: "100%" }} block>Remove</Button>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                            </Form>
                                                        </td>
                                                    </tr>

                                                    {this.state.rows.map((item, idx) => (
                                                    <tr id={"addr" + idx} key={idx}>
                                                        <td>
                                                            <Form className="repeater" encType="multipart/form-data">
                                                                <div data-repeater-list="group-a">
                                                                    <Row data-repeater-item>
                                                                        <Col lg="10" className="form-group">
                                                                            <Label htmlFor="name">Deparment Name</Label>
                                                                            <Input type="text" id="name" name="untyped-input" />
                                                                        </Col>
                                                                        <Col lg="2" className="form-group align-self-center">
                                                                            <Button onClick={e => this.handleRemoveRow(e, idx) } color="primary" className="mt-3" style={{ width: "100%" }}>Remove</Button>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <Button onClick={this.handleAddRow} color="success"><i className="fas fa-add"></i>Add New Line{" "}</Button>
                                        </TabPane>
                                        <TabPane tabId={3}>
                                            <table style={{ width: "100%" }}>
                                                <tbody>
                                                    <tr id="addr01" key="">
                                                        <td>
                                                            <Form className="repeater">
                                                                <div data-repeater-list="group-a">
                                                                    <Row data-repeater-item>
                                                                        <Col lg="10" className="form-group">
                                                                            <Label htmlFor="name">Position</Label>
                                                                            <Input type="text" id="name" name="untyped-input" className="form-control" />
                                                                        </Col>

                                                                        <Col lg="2" className="form-group align-self-center">
                                                                            <Button onClick={e => this.handleRemoveRow(e, "01") } color="primary" className="mt-3"  style={{ width: "100%" }} block>Remove</Button>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                            </Form>
                                                        </td>
                                                    </tr>

                                                    {this.state.rows.map((item, idx) => (
                                                    <tr id={"addr" + idx} key={idx}>
                                                        <td>
                                                            <Form className="repeater" encType="multipart/form-data">
                                                                <div data-repeater-list="group-a">
                                                                    <Row data-repeater-item>
                                                                        <Col lg="10" className="form-group">
                                                                            <Label htmlFor="name">Position</Label>
                                                                            <Input type="text" id="name" name="untyped-input" />
                                                                        </Col>
                                                                        <Col lg="2" className="form-group align-self-center">
                                                                            <Button onClick={e => this.handleRemoveRow(e, idx) } color="primary" className="mt-3" style={{ width: "100%" }}>Remove</Button>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                            </Form>
                                                        </td>
                                                    </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <Button onClick={this.handleAddRow} color="success"><i className="fas fa-add"></i>Add New Line{" "}</Button>                    
                                        </TabPane>
                                        <TabPane tabId={4}>
                                            
                                        </TabPane>
                                    </TabContent>
                                    <ul className="pager wizard twitter-bs-wizard-pager-link">
                                        <li className={this.state.activeTabProgress === 1 ? "previous disabled" : "previous"}><Link to="#" onClick={() => { this.toggleTabProgress(this.state.activeTabProgress - 1);} }>Previous</Link></li>
                                        <li className={this.state.activeTabProgress === 4 ? "next disabled" : "next"}><Link to="#" onClick={() => { this.toggleTabProgress(this.state.activeTabProgress + 1);} }>Next</Link></li>
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </div>
            </Modal>
        </React.Fragment>
    );
  }
}

const mapStatetoProps = state => {
  return { ...state.Layout };
};

export default connect(mapStatetoProps, {})(GettingStarted);
