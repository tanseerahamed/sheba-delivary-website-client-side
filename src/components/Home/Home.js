import React from 'react';
import { Card } from 'react-bootstrap';
import banner from "../../images/banner/banner.png";

const Home = () => {
    return (
        <>
        <Card className="bg-dark text-white">
        <Card.Img src={banner} alt="Card image" />
        <Card.ImgOverlay>
            <Card.Text className="text-primary text-center fw-bold fs-1">Order any service, anytime.</Card.Text>
        </Card.ImgOverlay>
        </Card>
        </>
    );
};

export default Home;