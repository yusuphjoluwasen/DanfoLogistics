import React from 'react';
import {Heading} from "../components/Heading";
import ImageCarousel from "../components/About";
import {Procedure} from "../components/Procedure";
import "./Home.css"
import CustomerForm from "../components/CustomerForm";
import {Segment} from "semantic-ui-react";
import {Contact} from "../components/Contact";

const Home = () => {
    return (
        <div>
            <Heading/>
            <ImageCarousel/>
            <Procedure/>
            <Segment className="customerFormSegment">
                <CustomerForm/>
            </Segment>
            <Segment className="contactSegment">
                <Contact/>
            </Segment>
        </div>
    );
};

export default Home;
