import React from "react";
import * as emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Alert, Input } from 'reactstrap';
import Snackbar from '@material-ui/core/Snackbar';

import './Contact.css';

class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state

    let templateParams = {
      "user_email": email,
      "user_name": name,
      "subject": subject,
      "user_message": message,
    }

    emailjs.send(
      'gmail',
      'template_aDWoYxMh_clone',
       templateParams,
      'user_SzR5TiI2bJmlmagEd5eG5'
     )
     .then((response) => {
        alert("Message sent!")
        this.resetForm()
        // return <Alert severity="success">Message sent!</Alert>
      }, (err) => {
        alert("Message not sent, try again later!")
        // return <Alert severity="error">Message not sent, try again later!</Alert>
      });
     
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  render() {
    return (
      <>
          <h1>Leave a message!</h1>
          <p className="contactText">I'd love to hear from you, so fill in the form and I'll get back to you! Alternatively you can contact me on <a className="linkedinLink" href="//www.linkedin.com/in/sunnyfeng617/">LinkedIn</a>!</p>
          <Form onSubmit={this.handleSubmit.bind(this)} className="formBox">
            <FormGroup controlId="formBasicEmail">
              {/* <Label className="formLabel">Email address: </Label> */}
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Email@email.com"
                required
              />
            </FormGroup>
<           FormGroup controlId="formBasicName">
              {/* <Label className="formLabel">Name: </Label> */}
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
                required
              />
            </FormGroup>
            <FormGroup controlId="formBasicSubject">
              {/* <Label className="formLabel">Subject: </Label> */}
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
                required
              />
            </FormGroup>
<           FormGroup controlId="formBasicMessage">
              {/* <Label className="formLabel">Message: </Label> */}
              <Input
                type="textarea"
                name="message"
                className="messageBox text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
                placeholder="Message"
                required
              />
            </FormGroup>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form> 
      </>
    )
  }
}
export default Contact