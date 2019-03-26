import React, { Component } from 'react'
import {
  Form, Icon, Input, Button,
} from 'antd';
import './styles.css'

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

class ContactForm extends React.Component {
    state = {
        username: '',
        email: '',
        subject: '',
        message: '',

        touched: {
            username: false,
            email: false,
            subject: false,
            message: false
        }
    }

    userNameRef = React.createRef();
    emailRef = React.createRef();
    subjectRef = React.createRef();
    messageRef = React.createRef();

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleBlur = (field) => (e) => {
        this.setState(prevState => ({
            touched: { ...prevState.touched, [field]: true }
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (!this.canSubmit()) { return ;}

        // TODO call api to send email
        window.alert("Message Send");
    }

    clearInput = (node, field) => (e) => {
        node.focus();
        this.setState({ [field]: '' });
    }

    getErrorList = () => ({
        username: this.state.username.length === 0,
        email: this.state.email.length === 0 || !this.state.email.match(emailRegex),
        subject: this.state.subject.length === 0,
        message: this.state.message.length === 0
    })

    shouldMarkError = (field) => {
        return this.getErrorList()[field] && this.state.touched[field];
    }

    canSubmit = () => {
        const errors = this.getErrorList();
        return !Object.keys(errors).some(field => errors[field]);
    }

    renderSuffix = (node, field, value) => {
        return value 
            ? <Icon type="close-circle" onClick={this.clearInput(node, field)} /> 
            : null;
    }

    render() {
        const { username, email, subject, message } = this.state;
        const errors = this.getErrorList();
        const shouldMarkError = (field) => errors[field] && this.state.touched[field];

        return (
            <div className="card-container has-padding">
                <div className="title">Send message</div>
                <form>
                    <Input
                        className={`input ${shouldMarkError('username') ? "error" : ""}`}
                        placeholder="Full Name"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={this.renderSuffix(this.userNameRef.current, 'username', username)}
                        name="username"
                        value={username}
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur('username')}
                        ref={this.userNameRef}
                    />

                    <Input
                        className={`input ${shouldMarkError('email') ? "error" : ""}`}
                        placeholder="Email"
                        prefix={<i className="fas fa-envelope" style={{ color: 'rgba(0,0,0,.25)' }}></i>}
                        suffix={this.renderSuffix(this.emailRef.current, 'email', email)}
                        name="email"
                        value={email}
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur('email')}
                        ref={this.emailRef}
                    />

                    <Input
                        className={`input ${shouldMarkError('subject') ? "error" : ""}`}
                        placeholder="Subject"
                        prefix={<Icon type="question-circle" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={this.renderSuffix(this.subjectRef.current, 'subject', subject)}
                        name="subject"
                        value={subject}
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur('subject')}
                        ref={this.subjectRef}
                    />

                    <Input.TextArea
                        className={`input ${shouldMarkError('message') ? "error" : ""}`}
                        placeholder="Message"
                        name="message"
                        value={message}
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur('message')}
                        ref={this.messageRef}
                        autosize={{ minRows: 6 }}
                    />

                    <Button
                        className="submit"
                        type="primary"
                        disabled={!this.canSubmit()}
                        onClick={this.handleSubmit}
                    >Send Message</Button>
                </form>
            </div>
        );
    }
}

export default ContactForm;