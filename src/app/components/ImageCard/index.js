import { Image, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function ImageCard({ images }) {
  return (
    <Row>
      {images.map((image) => {
        const { id, urls } = image;

        return (
          <Col key={id} md={6}>
            <Image src={urls.regular} fluid rounded />
          </Col>
        );
      })}
    </Row>
  );
}

export default ImageCard;
