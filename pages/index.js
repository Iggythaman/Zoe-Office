import Layout from "../components/Layout.js";

import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       firstNames: "",
//       lastName: "",
//       email: "",
//       phoneNumber: ""
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }

//   render() {
//     return (
//       <div>
//         <form>
//           <input
//             type="text"
//             value={this.state.firstName}
//             name="firstName"
//             placeholder="First Name"
//             onChange={this.handleChange}
//           />
//           <br />
//           <input
//             type="text"
//             value={this.state.lastName}
//             name="lastName"
//             placeholder="Last Name"
//             onChange={this.handleChange}
//           />
//           <br />
//           <input
//             type="text"
//             value={this.state.email}
//             name="email"
//             placeholder="Email"
//             onChange={this.handleChange}
//           />
//           <br />
//           <input
//             type="text"
//             value={this.state.phoneNumber}
//             name="phone number"
//             placeholder="Phone Number"
//             onChange={this.handleChange}
//           />
//           {/* cant get the phone number field to work */}
//           <h1>
//             {this.state.firstName}
//             {this.state.lastName}
//             {this.state.email}
//             {this.state.phoneNumber}
//           </h1>
//           <select>
//             <option value="Auto">Auto</option>
//             <option value="Motorcycle">Motorcycle</option>
//             <option selected value="Home">
//               Home
//             </option>
//           </select>
//         </form>
//       </div>
//     );
//   }
// }

// export default App;
