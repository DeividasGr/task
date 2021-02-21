import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Select({ setSortType }) {
  return (
    <Form>
      <Form.Group
        onChange={(e) => setSortType(e.target.value)}
        controlId="exampleForm.ControlSelect1"
      >
        <Form.Label>Sort by selected option:</Form.Label>
        <Form.Control as="select">
          <option value="-">From Highest...</option>
          <option value="downloads">Downloads</option>
          <option value="likes">Likes</option>
          <option value="views">Views</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
}

export default Select;
