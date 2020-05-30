import React from 'react';
import { Layout } from 'antd';
import * as emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Input } from 'reactstrap';

import './Contact.scss';

const { Content } = Layout;

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
      }, (err) => {
        alert("Message not sent, try again later!")
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
        <Content className="contact-container">
          <h1>Leave a message!</h1>
          <p>I'd love to hear from you, so fill in the form and I'll get back to you! Alternatively you can contact me on <a href="//www.linkedin.com/in/sunnyfeng617/">LinkedIn</a>!</p>
          <Form onSubmit={this.handleSubmit.bind(this)} className="form-wrapper">
            <FormGroup>
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
            <FormGroup >
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
            <FormGroup>
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
            <FormGroup>
              <Input
                type="textarea"
                name="message"
                className="message-box text-primary"
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
        </Content>
      </>
    )
  }
}

export default Contact