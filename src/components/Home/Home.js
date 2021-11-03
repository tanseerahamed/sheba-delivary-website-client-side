import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import banner from "../../images/banner/banner.png";
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
        <Card className="bg-dark text-white">
        <Card.Img src={banner} alt="Card image" />
        <Card.ImgOverlay>
            <Card.Text className="text-dark text-center fw-bold fs-1">Order any service, anytime from <span className="text-white fw-bolder">SHEBA</span></Card.Text>
        </Card.ImgOverlay>
        </Card>

        <Services></Services>

        <h2 className="text-primary fw-bold fs-1 mb-4 mt-4">SHEBA Exclusive Vedio Gallery</h2>
                <div className="d-flex justify-content-evenly mb-2 mt-2">
                <iframe width="330" height="250" src="https://www.youtube.com/embed/rNWa2C3NeZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <iframe width="330" height="250" src="https://www.youtube.com/embed/gBz85Wm-aUk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   
                <iframe width="330" height="250" src="https://www.youtube.com/embed/oMASFuDhp9g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

    <button className="btn btn-info m-3 p-2"> <a className="text-decoration-none fw-bolder text-dark" href="https://www.youtube.com/channel/UCFknoAGYEBD0LqNQw1pd2Tg"
    rel="noreferrer" target="_blank" >Please Get More Informations about SHEBA</a></button>

        <h2 className="text-primary fw-bold mb-4 mt-2">Frequently Asked Questions (FAQs)</h2>
        <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header>EASIEST WAY TO GET OUR SERVICES</Accordion.Header>
            <Accordion.Body>
            Select the Service: Pick the service you are looking for- from the website or the app. <br />
            Pick your schedule: Pick your convenient date and time to avail the service. Pick the service provider based on their rating. <br />
            Place Your Order & Relax: Review and place the order. Now just sit back and relax. We’ll assign the expert service provider’s schedule for you.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>What do I do if the support doesn’t help?</Accordion.Header>
            <Accordion.Body>
            SHEBA mobile application uses your information to improve your experience. For your data deletion request or any other inquiry please contact our Customer support number 16516.

            Alternatively, you can also reach out to us using our Facebook Sheba.xyz page: https://www.facebook.com/sheba.xyz
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Do I need to pay advance money before getting my services?</Accordion.Header>
            <Accordion.Body>
            Of course not! After service completion you will receive a text on your mobile from Sheba.xyz then you have to pay through Online or Cash on Delivery.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header> Terms & Pricing  </Accordion.Header>
            <Accordion.Body>
            Pricing policy: Price mentioned are based on minimum quantity stated extra charge will be added if the work scope increases.  
            Warranty: 7 days service warranty is given by Sheba.xyz.  
            Payment: After service completion – respective customers will pay online or COD. After payment please make sure, you have received the SMS containing the money receipt.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
            <Accordion.Header> Do You give Parts/Material Warranty?</Accordion.Header>
            <Accordion.Body>
            No. We do not manufacture AC parts by ourselves. So, the warranty differs as per manufacturer. However, we can give you 7 days free service warranty.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
            <Accordion.Header>Preparations against COVID-19</Accordion.Header>
            <Accordion.Body>
            We are well-equipped and well-prepared to protect your health and hygiene while serve you. Our preparations include-
            Checked Health condition of service specialist
            Ensuring use of masks, hand sanitisers, gloves, etc
            Disinfecting equipments before and after the work
            Maintaining social distancing
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </>
    );
};

export default Home;