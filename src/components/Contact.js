import React from "react";
import {Header, Grid, Popup, Icon} from "semantic-ui-react";

export class Contact extends React.Component {
    render() {
        return (
            <div>
                <div className="contactUsText">
                    <Header as='h4' className="w3-text-white ">Contact Us</Header>
                </div>

                <Grid centered container className="w3-mobile" relaxed>
                    <Grid.Column>
                        <Popup content='Call OluT on +2348077580637' trigger={<Icon name='call' size='large' color='green'/>} className="w3-black" on={['hover', 'click']}/>
                    </Grid.Column>
                    <Grid.Column>
                        <Icon name='instagram' size='big' color='red'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Icon name='twitter' size='big' color='blue'/>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}