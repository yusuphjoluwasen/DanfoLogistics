import React from 'react';
import {Segment, Header, Icon, Grid, Container} from "semantic-ui-react";

const square = { width: 50, height: 50 }

export const Procedure = () => {
    return (
        <div className="sizing">
            <Container>
                <Grid columns={"equal"}  centered relaxed textAlign={"center"}>
                    <Grid.Column className="procedure_grid_col">
                        <div className="round_div">
                            <div className="procedure_icon">
                                <Icon name='pencil alternate' size="large" inverted/>
                            </div>
                            <div className="w3-margin-top">
                                <p className=" w3-section w3-text-white procedure_text">Fill the required details below</p>
                            </div>
                        </div>
                    </Grid.Column >
                    <Grid.Column className="procedure_grid_col">
                        <div className="round_div">
                            <div className="procedure_icon">
                                <Icon name='phone' size="large" inverted/>
                            </div>
                            <div>
                                <p className=" w3-section w3-text-white procedure_text">Get a confirmation call immediately</p>
                            </div>
                        </div>

                    </Grid.Column>
                    <Grid.Column className="procedure_grid_col">
                        <div className="round_div">
                            <div className="procedure_icon">
                                <Icon name='shipping fast' size="large" inverted/>
                            </div>
                            <div>
                                <p className=" w3-section w3-text-white procedure_text">Goods get shipped to destination</p>
                            </div>
                        </div>
                        {/*<Segment circular style={square} className="w3-border-white w3-black w3-display-bottomright w3-margin-right">*/}
                        {/*    <Icon name='shipping fast' size='large' className="w3-display-topmiddle w3-section" />*/}
                        {/*    <div className="w3-text-red w3-mobile w3-margin">*/}
                        {/*    <p className="w3-display-middle w3-section">Goods get shipped to destination</p>*/}
                        {/*    </div>*/}
                        {/*</Segment>*/}
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
};