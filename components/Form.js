// import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
export default function form() {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" value="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>

      <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Female" />
      </Form.Group>
      <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Male" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Insurance Type</Form.Label>
        <Form.Control as="select" value="Choose...">
          <option>Choose...</option>
          <option>Car</option>
          <option>Home</option>
          <option>Motorcycle</option>
          <option>Life</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

// class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstName: " ",
//       lastName: " ",
//       emailAddress: " ",
//       zipCode: " "
//     };
//   }
//   handleChange = evt => {
//     //this will trigger the input change
//     this.setState({
//       [evt.target.name]: evt.target.value
//     });
//   };
//   //Creation of submit handle change
//   handleSubmit = evt => {
//     evt.preventDefault();
//     //creating api fetch call
//   };
//   render() {
//     return (
//       <Form>
//         <Form.Row>
//           <Form.Group as={Col} controlId="formGridEmail">
//             <Form.Label>First Name </Form.Label>
//             <Form.Control
//               name="firstName"
//               type="first-name"
//               placeholder="First Name"
//             />
//           </Form.Group>

//           <Form.Group as={Col} controlId="formGridPassword">
//             <Form.Label>Last Name </Form.Label>
//             <Form.Control
//               name="lastName"
//               type="last-name"
//               placeholder="Last Name"
//             />
//           </Form.Group>
//         </Form.Row>

//         <Form.Group controlId="formGridAddress1">
//           <Form.Label>Email Address</Form.Label>
//           <Form.Control name="emailAddress" placeholder="Email Address" />
//         </Form.Group>

//         <Form.Row>
//           <Form.Group as={Col} controlId="formGridState">
//             <Form.Label>Gender</Form.Label>
//             <Form.Control as="select" value="Choose...">
//               <option>Choose...</option>
//               <option>Female</option>
//               <option>Male</option>
//             </Form.Control>
//           </Form.Group>

//           <Form.Group as={Col} controlId="formGridState">
//             <Form.Label>Insurance Type</Form.Label>
//             <Form.Control as="select" value="Choose...">
//               <option>Choose...</option>
//               <option>Car</option>
//               <option>Life</option>
//             </Form.Control>
//           </Form.Group>

//           <Form.Group as={Col} controlId="formGridZip">
//             <Form.Label>Zip</Form.Label>
//             <Form.Control name="zipCode" />
//           </Form.Group>
//         </Form.Row>

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     );
//   }
// }

// export default Form;
