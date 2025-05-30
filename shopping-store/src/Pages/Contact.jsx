
// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Simple validation
//     if (!formData.name || !formData.email || !formData.message) {
//       setError('Please fill in all required fields');
//       return;
//     }
    
//     if (!formData.email.includes('@')) {
//       setError('Please enter a valid email address');
//       return;
//     }

//     // In a real app, you would send this data to your backend
//     console.log('Form submitted:', formData);
    
//     // Reset form and show success message
//     setFormData({
//       name: '',
//       email: '',
//       subject: '',
//       message: ''
//     });
//     setSubmitted(true);
//     setError('');
//   };

//   return (
//     <Container className="my-5">
//       <h1 className="text-center mb-4">Contact Us</h1>
      
//       <Row>
//         <Col md={6} className="mb-4">
//           <h3>Get in Touch</h3>
//           <p className="text-muted">
//             Have questions about our products or services? Fill out the form and 
//             our team will get back to you within 24 hours.
//           </p>
          
//           <div className="mt-4">
//             <h5>Contact Information</h5>
//             <ul className="list-unstyled">
//               <li className="mb-2">
//                 <i className="bi bi-geo-alt-fill me-2"></i>
//                 123 E-Commerce Street, Suite 456, New York, NY 10001
//               </li>
//               <li className="mb-2">
//                 <i className="bi bi-telephone-fill me-2"></i>
//                 +1 (555) 123-4567
//               </li>
//               <li className="mb-2">
//                 <i className="bi bi-envelope-fill me-2"></i>
//                 support@ecommerce-example.com
//               </li>
//             </ul>
//           </div>
          
//           <div className="mt-4">
//             <h5>Business Hours</h5>
//             <p className="text-muted">
//               Monday - Friday: 9:00 AM - 6:00 PM<br />
//               Saturday: 10:00 AM - 4:00 PM<br />
//               Sunday: Closed
//             </p>
//           </div>
//         </Col>
        
//         <Col md={6}>
//           {submitted && (
//             <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
//               Thank you for contacting us! We'll get back to you soon.
//             </Alert>
//           )}
          
//           {error && (
//             <Alert variant="danger" onClose={() => setError('')} dismissible>
//               {error}
//             </Alert>
//           )}
          
//           <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3" controlId="formName">
//               <Form.Label>Your Name *</Form.Label>
//               <Form.Control 
//                 type="text" 
//                 name="name" 
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name" 
//                 required 
//               />
//             </Form.Group>
            
//             <Form.Group className="mb-3" controlId="formEmail">
//               <Form.Label>Email Address *</Form.Label>
//               <Form.Control 
//                 type="email" 
//                 name="email" 
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email" 
//                 required 
//               />
//             </Form.Group>
            
//             <Form.Group className="mb-3" controlId="formSubject">
//               <Form.Label>Subject</Form.Label>
//               <Form.Control 
//                 type="text" 
//                 name="subject" 
//                 value={formData.subject}
//                 onChange={handleChange}
//                 placeholder="What's this about?" 
//               />
//             </Form.Group>
            
//             <Form.Group className="mb-3" controlId="formMessage">
//               <Form.Label>Message *</Form.Label>
//               <Form.Control 
//                 as="textarea" 
//                 name="message" 
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={5} 
//                 placeholder="How can we help you?" 
//                 required 
//               />
//             </Form.Group>
            
//             <Button variant="primary" type="submit" className="w-100">
//               Send Message
//             </Button>
//           </Form>
//         </Col>
//       </Row>
      
//       <Row className="mt-5">
//         <Col>
//           <div className="embed-responsive embed-responsive-16by9">
//             <iframe 
//               title="Our Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215373510518!2d-73.9878449241646!3d40.74844097138985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
//               width="100%" 
//               height="400" 
//               style={{ border: 0 }} 
//               allowFullScreen="" 
//               loading="lazy"
//             ></iframe>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ContactPage;