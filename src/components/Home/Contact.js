
import {React, useState}from 'react'; 
// import 'bootstrap/dist/css/bootstrap.css'; 
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 



export default function Constant() {
  // const formRef = useRef();
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const [loading, setLoading] = useState(false);

  // const handleChange = (e) => {
  //   const { target } = e;
  //   const { name, value } = target;

  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   emailjs
  //     .send(
  //       import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  //       import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  //       {
  //         from_name: form.name,
  //         to_name: "Aditya",
  //         from_email: form.email,
  //         to_email: "adityagandhi176@gmail.com",
  //         message: form.message,
  //       },
  //       import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
  //     )
  //     .then(
  //       () => {
  //         setLoading(false);
  //         alert("Thank you. I will get back to you as soon as possible.");

  //         setForm({
  //           name: "",
  //           email: "",
  //           message: "",
  //         });
  //       },
  //       (error) => {
  //         setLoading(false);
  //         console.error(error);

  //         alert("Ahh, something went wrong. Please try again.");
  //       }
  //     );
  // };
  const [name, setName] = useState('');

  return(
  <div style={{ display: 'block',  
                  width: 700,  
                  padding: 30 }}> 
                  <input type='text' value={name} onChange={(e) => setName(e.target.value)}/> 
      <h4>React-Bootstrap Form Component</h4> 
      <Form> 
      <Form.Group> 
          <Form.Label>Enter your full name:</Form.Label> 
          <Form.Control type="text" 
                        value={name} onChange={(e) => setName(e.target.value)}/> 
        </Form.Group> 
        <Form.Group> 
          <Form.Label>Enter your email address:</Form.Label> 
          <Form.Control type="email" 
                        placeholder="Enter your your email address" /> 
        </Form.Group> 
        <Form.Group> 
          <Form.Label>Enter your age:</Form.Label> 
          <Form.Control type="number" placeholder="Enter your age" /> 
        </Form.Group> 
        <Button variant="primary" type="submit"> 
           Click here to submit form 
        </Button> 
      </Form> 
    </div> 
  );
}
