import React from "react";
import {Container, Header, Form, Divider, Button} from "semantic-ui-react";

const CustomerForm = () => {
        return (
            <div className="customerContainer w3-display-middle w3-border-white w3-border w3-round-large">
                <Container>
                    <div className="w3-margin">
                        <Header as='h2' className="w3-text-white">Make An Order</Header>
                    </div>
                 <Divider horizontal>
                     <div className="w3-text-white">PICK UP</div>
                 </Divider>
                    <div>
                        <Form>
                            <Form.Field className="w3-margin-bottom">
                                <div className="labelSize">
                                    <label className="w3-text-white" >Name</label>
                                </div>

                                <div className="inputSize">
                                    <input placeholder='Name'/>
                                </div>
                            </Form.Field>

                            <Form.Field className="w3-margin-bottom">
                                <div className="labelSize">
                                    <label className="w3-text-white" >Pick up Address</label>
                                </div>
                                <div className="inputSize">
                                    <input placeholder='E.g. 18, Adeola Hopewell Street, Lekki Lagos'/>
                                </div>
                            </Form.Field>

                            <Form.Field className="w3-margin-bottom">
                                <div className="labelSize">
                                    <label className="w3-text-white" >Mobile No.</label>
                                </div>
                                <div className="inputSize">
                                    <input placeholder='+2348060118558'/>
                                </div>
                            </Form.Field>

                            <Form.Field className="w3-margin-bottom">
                                <div className="labelSize">
                                    <label className="w3-text-white" >Nearest landmark to Address</label>
                                </div>
                                <div className="inputSize">
                                    <input placeholder='E.g. 1004 Estate, VI Lagos'/>
                                </div>
                            </Form.Field>

                            <Divider horizontal>
                                <div className="w3-text-white">Delivery</div>
                            </Divider>

                            <Form.Field className="w3-margin-bottom">
                                <div className="labelSize">
                                    <label className="w3-text-white" >Name</label>
                                </div>

                                <div className="inputSize">
                                    <input placeholder='Name'/>
                                </div>
                            </Form.Field>


                            <Form.Field className="w3-margin-bottom">
                                <div className="labelSize">
                                    <label className="w3-text-white" >Mobile No.</label>
                                </div>
                                <div className="inputSize">
                                    <input placeholder='+2348060118558'/>
                                </div>
                            </Form.Field>

                            <Form.Field className="w3-margin-bottom">
                                <div className="labelSize">
                                    <label className="w3-text-white" >Nearest landmark to Address</label>
                                </div>
                                <div className="inputSize">
                                    <input placeholder='E.g. 1004 Estate, VI Lagos'/>
                                </div>
                            </Form.Field>



                            <Form.Field className="w3-margin-bottom" control={Button}>
                                Submit
                            </Form.Field>
                        </Form>
                    </div>
                </Container>

            </div>
        )
    }


    export default CustomerForm