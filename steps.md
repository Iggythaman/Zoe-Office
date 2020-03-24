A BASIC LAYOUT - MERN
MONGODB - EXPRESS - REACT - NODE

The Topic - Purpose of Application
Store client information for an insurance company

NPM INSTALLS NEEDED

Databse:
Mongodb
React
Express Routing
Node/Express
React - Bootstrap
Passport Js - Authentication http://www.passportjs.org/

API
random users api - to generate false client data

COMPONENT NEEDED TO BE CREATED (FOLDERS)

Navbar
Footer
Client Form (bootstrap form) - address - first name - last name - birth date - insurance category

Log In (folder) - agent only - USERNAME - PASSWORD

Sign Up (folder) - agent only - EMAIL - NAME (First and Last) - Birth Date

FUNCTIONS () TO BE CREATED

                    CLIENT ()'s

Page Loads():
onload() render the Home (page)
once the home page loads the client form loads -

SubmitForm():  
 Once the client completes all required fields and clicks the submit button - Alert() complete message

        Once the form was submitted the Home Page will re-render

                AGENT ()'s

Agentsignup():
signup(passport.js): Once the signup button (in the navbar) is clicked - The signup component will load with a form
sumbitSignup():
submit(passport.js): The Home page will re-render and an alert() will execute

Agentlogin():
login(passport.js): Once the login button (in the navbar) is clicked - The login component will load with a signin form
Agentlogin():
submit(passport.js): The Agent's profile page will re-render and an alert() will execute

HOW WILL THE DATABASE BE USED?

An api call will be executed to obtainrandom users - those random users will append to the database. As the agent logs in - him/her will be able to select clients (from the false data in the database).

    CALLS TO BE USED:
        GET
        POST

Steps: Create folder layout - repos
Step 2: Study up on the npms and mongodb
Step 3: Create Node Server then React layout
