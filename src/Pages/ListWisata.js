import React from 'react';
import '../Components/Components.css'
import NavbarTop from "../Components/NavbarTop";
import Footer from "../Components/Footer";
import contoh from '../Components/Gallery/contoh.jpg';
import {Button, Container, Card, CardColumns, Row, Col} from 'react-bootstrap';
import { MdPlace } from 'react-icons/md';
import { MdGrade } from 'react-icons/md';


const brand = {
    color: '#FF6329',
    fontFamily: 'Montserrat',
    fontWeight: '600',
};

const judulGambar = {
    fontFamily: 'Montserrat', 
    fontWeight: '600',
};

const buttonCard = {
    color:'white', 
    backgroundColor: '#FF6329', 
    fontFamily: 'Montserrat',
};

function ListWisata() {
    return (


        <div>
            <NavbarTop/>
            <Container className='my-5'>
                <Row>
                    <Col className='mt-5'>
                        <h2 id="brand">Event</h2>
                    </Col>
                </Row>
                <CardColumns className='my-2'>
                    <Card style={{width: '22rem'}}>
                        <Card.Img src={contoh} variant='top'/>
                        <Card.Body>
                            <Card.Title id="judulGambar">Wisata Taman Sari, Mengkhayalkan Para Putri</Card.Title>
                            <Card.Text style={{fontFamily: 'Roboto'}}>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</Card.Text>
                            <Button id="buttonCard" variant='block'>Details</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '22rem'}}>
                        <Card.Img src={contoh} variant='top'/>
                        <Card.Body>
                            <Card.Title id="judulGambar">Wisata Taman Sari, Mengkhayalkan Para Putri</Card.Title>
                            <Card.Text style={{fontFamily: 'Roboto'}}>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</Card.Text>
                            <Button id="buttonCard" variant='block'>Details</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '22rem'}}>
                        <Card.Img src={contoh} variant='top'/>
                        <Card.Body>
                            <Card.Title id="judulGambar">Wisata Taman Sari, Mengkhayalkan Para Putri</Card.Title>
                            <Card.Text style={{fontFamily: 'Roboto'}}>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</Card.Text>
                            <Button id="buttonCard" variant='block'>Details</Button>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </Container>
            <Container className='my-5'>
                <Row>
                    <Col className='mt-5'>
                        <h2 id="brand">Tempat Wisata di Jogjakarta</h2>
                    </Col>
                </Row>
                <Container className="border" id="cardList">
                        <Row>
                        <Col xs={6} md={4}>
                        <img id="imageListCard" src={contoh}></img>
                        </Col>
                        <Col xs={6} md={4}>
                            <Row> <h5>Wisata Taman Sari, Menghayalkan Para Putri</h5> </Row>
                            <Row> <p>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</p></Row>
                            <Row><p id="ratingListCard">4.5<MdGrade color="orange"/></p></Row>
                            <Row>
                            <Button id="tagCard">Default</Button>
                            <Button id="tagCard">Default</Button>
                            <Button id="tagCard">Default</Button>
                            <Button id="tagCard">Default</Button>
                            </Row>
                        </Col>
                        <Col xs={6} md={4}>
                        <Button id="mapsCard"><MdPlace/>Patehan,Jogja</Button>    
                        <Button id="detailsButtonCard">Details</Button>
                        </Col>
                    </Row>
                </Container>

                <Container className="border" id="cardList">
                        <Row>
                        <Col xs={6} md={4}>
                        <img id="imageListCard" src={contoh}></img>
                        </Col>
                        <Col xs={6} md={4}>
                            <Row> <h5>Wisata Taman Sari, Menghayalkan Para Putri</h5> </Row>
                            <Row> <p>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</p></Row>
                            <Row><p id="ratingListCard">4.5<MdGrade color="orange"/></p></Row>
                            <Row>
                            <Button id="tagCard">Default</Button>
                            <Button id="tagCard">Default</Button>
                            <Button id="tagCard">Default</Button>
                            <Button id="tagCard">Default</Button>
                            </Row>
                        </Col>
                        <Col xs={6} md={4}>
                        <Button id="mapsCard"><MdPlace/>Patehan,Jogja</Button>    
                        <Button id="detailsButtonCard">Details</Button>
                        </Col>
                    </Row>
                </Container>

                <Container className="border" id="cardList">
                        <Row>
                        <Col xs={6} md={4}>
                        <img id="imageListCard" src={contoh}></img>
                        </Col>
                        <Col xs={6} md={4}>
                            <Row> <h5>Wisata Taman Sari, Menghayalkan Para Putri</h5> </Row>
                            <Row> <p>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</p></Row>
                            <Row><p id="ratingListCard">4.5<MdGrade color="orange"/></p></Row>
                            <Row>
                            <Button id="tagCard">Default</Button>
                            <Button id="tagCard">Default</Button>
                            <Button id="tagCard">Default</Button>
                            <Button id="tagCard">Default</Button>
                            </Row>
                        </Col>
                        <Col xs={6} md={4}>
                        <Button id="mapsCard"><MdPlace/>Patehan,Jogja</Button>    
                        <Button id="detailsButtonCard">Details</Button>
                        </Col>
                    </Row>
                </Container>

                <Container className="border" id="cardList" >
                        <Row>
                        <Col xs={6} md={4}>
                        <img id="imageListCard" src={contoh}></img>
                        </Col>
                        <Col xs={6} md={4} >
                            <Row> <h5>Wisata Taman Sari, Menghayalkan Para Putri</h5> </Row>
                            <Row> <p>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</p></Row>
                            <Row><p id="ratingListCard">4.5<MdGrade color="orange"/></p></Row>
                            <Row>
                            <Button id="tagCard">Default</Button>
                            <Button id="tagCard">Default</Button>
                            <Button id="tagCard">Default</Button>
                            <Button id="tagCard">Default</Button>
                            </Row>
                        </Col>
                        <Col xs={6} md={4}>
                        <Button id="mapsCard"><MdPlace/>Patehan,Jogja</Button>    
                        <Button id="detailsButtonCard">Details</Button>
                        </Col>
                    </Row>
                </Container>

                    {/* <Card >
                        <Card.Body id="cardHorizontal">
                            <Card.Img id="imageCardHorizontal" src={contoh}/>
                            <Card.Title>Wisata Taman Sari, Menghayalkan Para Putri</Card.Title>
                            <Card.Text>
                            Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.
                            </Card.Text>
                            <Button id="cardListButton">Details</Button>
                        </Card.Body>
                    </Card>
                
                 */}
                   
               
                {/* <CardColumns className='my-2'>
                    <Card style={{width: '22rem'}}>
                        <Card.Img src={contoh} variant='top'/>
                        <Card.Body>
                            <Card.Title id="judulGambar">Wisata Taman Sari, Mengkhayalkan Para Putri</Card.Title>
                            <Card.Text style={{fontFamily: 'Roboto'}}>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</Card.Text>
                            <Button id="buttonCard" variant='block'>Details</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '22rem'}}>
                        <Card.Img src={contoh} variant='top'/>
                        <Card.Body>
                            <Card.Title id="judulGambar">Wisata Taman Sari, Mengkhayalkan Para Putri</Card.Title>
                            <Card.Text style={{fontFamily: 'Roboto'}}>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</Card.Text>
                            <Button id="buttonCard" variant='block'>Details</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '22rem'}}>
                        <Card.Img src={contoh} variant='top'/>
                        <Card.Body>
                            <Card.Title id="judulGambar">Wisata Taman Sari, Mengkhayalkan Para Putri</Card.Title>
                            <Card.Text style={{fontFamily: 'Roboto'}}>Taman Sari berada di Kampung Taman Sari No. 310, Taman, Patehan, Kraton, Jogja. Dahulu lokasi ini merupakan tempat pemandian yang berkaitan erat dengan kerajaan Jogja.</Card.Text>
                            <Button id="buttonCard" variant='block'>Details</Button>
                        </Card.Body>
                    </Card>
                </CardColumns> */}
            </Container>
            <Footer/>
        </div>

        
    );
}

export default ListWisata;