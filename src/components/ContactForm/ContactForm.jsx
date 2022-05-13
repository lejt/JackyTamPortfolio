import "./ContactForm.css";
import {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import{ init } from '@emailjs/browser';
init("1a3Up6lhEdQBdJtIM");



export default function ContactForm() {
  const [newMsg, setNewMsg] = useState({user_name: "", user_email: "", message: ""});

  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [formPop, setFormPop] = useState(false);

  const form = useRef();

  useEffect(() => {
    setTimeout(()=> {
      setFormPop(true);
    },500)
  },[]);

  const sendEmail = (e) => {
    e.preventDefault();
    setNewMsg({user_name: "", user_email: "", message: ""})
    setProcessing(true);

    emailjs.sendForm('service_i3aiswa', 'contact_form', form.current, '1a3Up6lhEdQBdJtIM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    setError(null);
    setProcessing(false);
  };

  function handleChange(evt) {
    // takes all the information on form and uses it as parameter for setNewMsg
    const newMsgForm = { ...newMsg, [evt.target.name]: evt.target.value };
    setNewMsg(newMsgForm);

    // if event is empty, disable button
    // setDisabled(!newMsgForm.message && !newMsgForm.user_name && !newMsgForm.user_email);
    setDisabled(evt.empty)
    // if error occurs, show error message
    setError(evt.error ? evt.error.message : "");
  }
  // {formPop ? "formPop" : ""}
  return (
    <div className="contactF__container">
      <form ref={form} onSubmit={sendEmail} className={formPop ? "formPop" : ""}>
        <h4 className="contactF__title contact__type"><strong>CONTACT ME HERE</strong></h4>
        <label className="contact__type">Name</label>
        <input type="text" name="user_name" value={newMsg.user_name} onChange={handleChange} required/><br />
        <label className="contact__type">Email</label>
        <input type="email" name="user_email" value={newMsg.user_email} onChange={handleChange} required/><br />
        <label className="contact__type">Message</label>
        <textarea name="message" value={newMsg.message} onChange={handleChange} required/><br />
        {/* <input type="submit" value="Send" /> */}
        <button disabled={processing || disabled } className="contactF__btn">
            <span>
                {processing ? <p>Processing</p> : "SEND"}
            </span>
        </button>
      </form>
    </div>
  );
}
  
// export default class ContactForm extends Component {
  
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //       name: '',
  //       email: '',
  //       message: ''
  //     }
  //   }

  //   onNameChange(event) {
  //       this.setState({name: event.target.value})
  //   }
    
  //   onEmailChange(event) {
  //       this.setState({email: event.target.value})
  //   }
    
  //   onMessageChange(event) {
  //       this.setState({message: event.target.value})
  //   }
    
  //   handleSubmit(e) {
  //       e.preventDefault();
      
  //       // generate a five digit number for the contact_number variable
  //       this.contact_number.value = Math.random() * 100000 | 0;
  //       // these IDs from the previous steps
  //       emailjs.sendForm('contact_service', 'contact_form', this)
  //           .then(function() {
  //               console.log('SUCCESS!');
  //           }, function(error) {
  //               console.log('FAILED...', error);
  //           });




  //       fetch('http://localhost:3001/send', {
  //           method: "POST",
  //           body: JSON.stringify(this.state),
  //           headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json'
  //           },
  //         }).then(
  //         (response) => (response.json())
  //           ).then((response)=> {
  //         if (response.status === 'success') {
  //           alert("Message Sent.");
  //           this.resetForm()
  //         } else if(response.status === 'fail') {
  //           alert("Message failed to send.")
  //         }
  //       })
  //   }
  //   resetForm(){
  //       this.setState({name: '', email: '', message: ''})
  //   }

  //   render() {
  //     return(
  //       <Row className="contactF__container  contact__floating">
  //         <Col md={{ span: 6, offset: 3 }}>

  //           <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
  //           <h4 className="contactF__title contact__type"><strong>CONTACT ME HERE</strong></h4>
  //             <div className="form-group">
  //               <label htmlFor="name" className="contact__type">Name:</label>
  //               <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
  //             </div>
  //             <br/>
  //             <div className="form-group">
  //               <label htmlFor="exampleInputEmail1" className="contact__type">Email address:</label>
  //               <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
  //             </div>
  //             <br/>
  //             <div className="form-group">
  //               <label htmlFor="message" className="contact__type">Message:</label>
  //               <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
  //             </div>
  //             <br/><br/>
  //             <button type="submit" className="contactF__btn"><strong>SUBMIT</strong></button>
  //           </form>
  //         </Col>
  //       </Row>
  //     );
  //   }
// }
  
