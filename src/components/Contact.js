import React from "react";
import * as emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Alert, Input } from 'reactstrap';

// Work on success message
// function Success(props) {
//   return <Alert color="success">Message successfully sent!</Alert>;
// }

// function Fail(props) {
//   return <Alert color="danger">Message not sent, please try again later!</Alert>;
// }

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
        alert("Message Sent!")
        this.resetForm()
      //   return Success()
      }, (err) => {
        alert("Message not sent, try again later!")
      //   return Fail()
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