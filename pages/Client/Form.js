import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: " ",
      lastName: " ",
      emailAddress: " ",
      zipCode: " "
    };
  }
  handleChange = evt => {
    //this will trigger the input change
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  //Creation of submit handle change
  handleSubmit = evt => {
    evt.preventDefault();
    //creating api fetch call
  };
  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name </Form.Label>
            <Form.Control
              name="firstName"
              type="first-name"
              placeholder="First Name"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name </Form.Label>
            <Form.Control
              name="lastName"
              type="last-name"
              placeholder="Last Name"
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Email Address</Form.Label>
          <Form.Control name="emailAddress" placeholder="Email Address" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select" value="Choose...">
              <option>Choose...</option>
              <option>Female</option>
              <option>Male</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Insurance Type</Form.Label>
            <Form.Control as="select" value="Choose...">
              <option>Choose...</option>
              <option>Car</option>
              <option>Life</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control name="zipCode" />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default Form;
