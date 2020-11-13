import React from 'react';
import '../Components/Components.css'
import NavbarTop from "../Components/NavbarTop";
import Footer from "../Components/Footer";
import contoh from '../Components/Gallery/contoh.jpg';
import contoh1 from '../Components/Gallery/contoh1.jpg';
import contoh2 from '../Components/Gallery/contoh2.jpg';
import map from '../Components/Gallery/map.jpg';
import { FaPhoneAlt, FaTags, FaMapMarkerAlt } from 'react-icons/fa';
import { TiStar } from 'react-icons/ti';
import { BsFillClockFill } from 'react-icons/bs';
<<<<<<< HEAD
import { Badge, ResponsiveEmbed, Container, Image, Row, Col, Spinner } from 'react-bootstrap';
import { api } from '../Utils/api';

function Details() {
    const [listLocation, setListLocation] = React.useState();
    const [galery, setGalery] = React.useState();
    const [distance, setDistance] = React.useState();
    const [loading, setLoading] = React.useState(true);
    
    React.useEffect(() => {
        api
          .get("locations", { data: { userLong: 1.104, userLat: 1.102 } })
          .then((res) => {
            console.log(res);
            console.log(res.data[1]);
            setLoading(false);
            setListLocation(res.data[0][0]);
            setGalery(res.data[1]);
            setDistance(res.data[2]);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
        return () => {};
      }, []);

=======
import { Badge, ResponsiveEmbed, Container, Image, Row, Col } from 'react-bootstrap';

function Details() {
>>>>>>> e4f656852bce453b906f3c527e81ae356a6aaa92
    return (
      <div>
        <NavbarTop />
        {loading ? (
          <Row>
            <Col>
              <Spinner
                animation="border"
                variant="primary"
                className="d-flex justify-content-center ml-auto mr-auto"
              >
                <span className="sr-only">Loading...</span>
              </Spinner>
            </Col>
          </Row>
        ) : !(listLocation && galery && distance) ? (
          <h1>Error</h1>
        ) : (
          <>
            <div id="container">
              <Image className="mt-2" id="image" src={contoh1} fluid />
              <div id="textStyle">
                <Container>
                  <h1>{listLocation.name}</h1>
                  {/* <h1>Wisata Taman Sari, Mengkhayalkan Para Putri</h1> */}
                  <h4 style={{ fontWeight: "bold" }}>
                    4.5
                    <TiStar id="icon" />
                  </h4>
                </Container>
              </div>
            </div>
            <Container className="my-5">
              <p id="deskripsi">
                Lorem Ipsum adalah contoh teks atau dummy dalam industri
                percetakan dan penataan huruf atau typesetting. Lorem Ipsum
                telah menjadi standar contoh teks sejak tahun 1500an, saat
                seorang tukang cetak yang tidak dikenal mengambil sebuah
                kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh
                huruf. Ia tidak hanya bertahan selama 5 abad, tapi juga telah
                beralih ke penataan huruf elektronik, tanpa ada perubahan
                apapun. Ia mulai dipopulerkan pada tahun 1960 dengan
                diluncurkannya lembaran-lembaran Letraset yang menggunakan
                kalimat-kalimat dari Lorem Ipsum, dan seiring munculnya
                perangkat lunak Desktop Publishing seperti Aldus PageMaker juga
                memiliki versi Lorem Ipsum.
              </p>
            </Container>
            <Container className="my-5">
              <h4 id="title">
                Tags <FaTags style={{ fontSize: "16px" }} />
              </h4>
              <Badge className="mx-1" id="badges" variant="secondary">
                pantai
              </Badge>
              <Badge className="mx-1" id="badges" variant="secondary">
                gunung
              </Badge>
              <Badge className="mx-1" id="badges" variant="secondary">
                panas
              </Badge>
            </Container>
            <Container className="my-5">
              <h2 id="title">Photos & Videos</h2>
              <Row className="my-3">
                {/* {galery.map((item) => {
                  return (
                    <Col key={item.id}>
                      <img
                        id="galeri"
                        src={item.filename}
                        alt={item.filename}
                      />
                    </Col>
                  );
                })} */}
                <Col>
                  <img id="galeri" src={contoh} alt="1" />
                </Col>
                <Col>
                  <img id="galeri" src={contoh1} alt="2" />
                </Col>
                <Col>
                  <img id="galeri" src={contoh2} alt="3" />
                </Col>
              </Row>
              <ResponsiveEmbed className="my-5" aspectRatio="21by9">
                <embed
                  id="video"
                  src="https://www.youtube.com/embed/cFOvDNIe5-8"
                />
              </ResponsiveEmbed>
            </Container>
            <Container className="my-5">
              <Row>
                <Col className="mt-4">
                  <h2 id="title">Detail Location</h2>
                </Col>
              </Row>
              <Image className="mt-3" id="image" src={map} fluid />
              <Row>
                <Col className="mt-3">
                  <p style={{ fontFamily: "Roboto" }}>
                    <FaMapMarkerAlt /> <strong>Location:</strong> Nginden Intan
                    Timur II No.A2-41, Ngenden Jangkungan, Kec. Sukolilo, Kota
                    SBY, Jawa Timur 60118
                  </p>
                  <p style={{ fontFamily: "Roboto" }}>
                    <FaPhoneAlt /> <strong>Contact:</strong> 082345213534
                  </p>
                  <p style={{ fontFamily: "Roboto" }}>
                    <BsFillClockFill /> <strong>Open:</strong> 08.00 AM.
                  </p>
                </Col>
              </Row>
            </Container>
            <Footer />
          </>
        )}
      </div>
    );
}

export default Details;