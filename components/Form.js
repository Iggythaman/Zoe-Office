// import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default function form() {
 returnconst { Formik } = formik

 const schema = yup.object({
   firstName: yup.string().required(),
   lastName: yup.string().required(),
   username: yup.string().required(),
   city: yup.string().required(),
   state: yup.string().required(),
   zip: yup.string().required(),
   terms: yup.bool().required(),
 });
 
 function FormExample() {
   return (
     <Formik
       validationSchema={schema}
       onSubmit={console.log}
       initialValues={{
         firstName: 'Mark',
         lastName: 'Otto',
       }}
     >
       {({
         handleSubmit,
         handleChange,
         handleBlur,
         values,
         touched,
         isValid,
         errors,
       }) => (
         <Form noValidate onSubmit={handleSubmit}>
           <Form.Row>
             <Form.Group as={Col} md="4" controlId="validationFormik01">
               <Form.Label>First name</Form.Label>
               <Form.Control
                 type="text"
                 name="firstName"
                 value={values.firstName}
                 onChange={handleChange}
                 isValid={touched.firstName && !errors.firstName}
               />
               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
             </Form.Group>
             <Form.Group as={Col} md="4" controlId="validationFormik02">
               <Form.Label>Last name</Form.Label>
               <Form.Control
                 type="text"
                 name="lastName"
                 value={values.lastName}
                 onChange={handleChange}
                 isValid={touched.lastName && !errors.lastName}
               />
 
               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
             </Form.Group>
             <Form.Group as={Col} md="4" controlId="validationFormikUsername">
               <Form.Label>Email</Form.Label>
               <InputGroup>
                 <InputGroup.Prepend>
                   <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                 </InputGroup.Prepend>
                 <Form.Control
                   type="text"
                   placeholder="email"
                   aria-describedby="inputGroupPrepend"
                   name="username"
                   value={values.username}
                   onChange={handleChange}
                   isInvalid={!!errors.username}
                 />
                 <Form.Control.Feedback type="invalid">
                   {errors.username}
                 </Form.Control.Feedback>
               </InputGroup>
             </Form.Group>
           </Form.Row>
           <Form.Row>
             <Form.Group as={Col} md="6" controlId="validationFormik03">
               <Form.Label>City</Form.Label>
               <Form.Control
                 type="text"
                 placeholder="City"
                 name="city"
                 value={values.city}
                 onChange={handleChange}
                 isInvalid={!!errors.city}
               />
 
               <Form.Control.Feedback type="invalid">
                 {errors.city}
               </Form.Control.Feedback>
             </Form.Group>
             <Form.Group as={Col} md="3" controlId="validationFormik04">
               <Form.Label>State</Form.Label>
               <Form.Control
                 type="text"
                 placeholder="State"
                 name="state"
                 value={values.state}
                 onChange={handleChange}
                 isInvalid={!!errors.state}
               />
               <Form.Control.Feedback type="invalid">
                 {errors.state}
               </Form.Control.Feedback>
             </Form.Group>
             <Form.Group as={Col} md="3" controlId="validationFormik05">
               <Form.Label>Zip</Form.Label>
               <Form.Control
                 type="text"
                 placeholder="Zip"
                 name="zip"
                 value={values.zip}
                 onChange={handleChange}
                 isInvalid={!!errors.zip}
               />
 
               <Form.Control.Feedback type="invalid">
                 {errors.zip}
               </Form.Control.Feedback>
             </Form.Group>
           </Form.Row>
           <Form.Group>
             <Form.Check
               required
               name="terms"
               label="Agree to terms and conditions"
               onChange={handleChange}
               isInvalid={!!errors.terms}
               feedback={errors.terms}
               id="validationFormik0"
             />
           </Form.Group> <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Insurance Type</Form.Label>
              <Form.Control as="select" value="Choose...">
                <option>Choose...</option>
                <option>Car</option>
                <option>Home</option>
                <option>Motorcycle</option>
                <option>Life</option>
                
              </Form.Control>
            </Form.Group>
           <Button type="submit">Submit form</Button>
         </Form>
       )}
     </Formik>
   );
 }
 
 render(<FormExample />);
 
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
