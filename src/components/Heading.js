import React from 'react';
import logo from '../logo.svg';
import {Header, Image} from "semantic-ui-react";


export const Heading = () => {
    return (
        <div>
            <Header className="App-header" as='h2' >
                <Image src={logo} className="App-logo" alt="logo" />
                <Header.Content className="companyName">Danfo Logistics</Header.Content>
            </Header>
       </div>
    )
};
