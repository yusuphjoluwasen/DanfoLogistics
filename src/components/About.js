import { CarouselProvider, Slide,Image, Slider} from "pure-react-carousel";
import React from "react";
import { Dimmer } from "semantic-ui-react";
import 'pure-react-carousel/dist/react-carousel.es.css';
import Pirate from '../images/pirates.jpg'
import Strange from '../images/doctor_strange.jpg'
import Speed from '../images/need_for_speed_race.jpg'

const ImageCarousel = () => {
    return (

        <div className="About">
             <CarouselProvider isPlaying={true}
                naturalSlideWidth={100}
                naturalSlideHeight={25}
                totalSlides={3}
            >
                <Slider>
                    <Slide tag="a" index={0}>
                        <Image src= {Speed} hasMasterSpinner className="slideImage" />
                        <Dimmer active>
                            <p className="centered2 w3-display-middle">Pickup and Delivery Services</p>
                        </Dimmer>
                    </Slide>

                    <Slide tag="a" index={1}>
                        <Image src= {Pirate} hasMasterSpinner className="slideImage"/>
                        <Dimmer active>
                            <p className="centered2 w3-display-middle">We put you first and make moving, hassle-free</p>
                        </Dimmer>
                    </Slide>

                    <Slide tag="a" index={2}>
                        <Image src= {Strange} hasMasterSpinner className="slideImage" />
                        <Dimmer active>
                            <p className="centered2 w3-display-middle">Swiftly and Timely Operation</p>
                        </Dimmer>
                    </Slide>
                </Slider>
            </CarouselProvider>
        </div>
        )


};

export default ImageCarousel;
