import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export default class Singup extends Component {
  
  state = {
    error: ''
  }

  onSubmit = (e) => {
    e.preventDefault();

    const email = this.email.value.trim();
    const password = this.password.value.trim();


    if (password.length < 9) {
      return this.setState({ error: 'Password must be more than 8 characters long!' });
    }

    // createUser({email: let email, password: let password })
    return Accounts.createUser({ email, password }, error => (error ?
      this.setState({ error: error.reason })
      :
      this.setState({ error: '' })));
  }

  focus() {
    this.email.focus();
    this.password.focus();
  }

  render() {
    return (
      <div className="BoxedView" >
        <div className="BoxedView__box">
          <h1>Singup</h1>

          {this.state.error && <p>{this.state.error}</p>}

          <form className="BoxedView__form" onSubmit={this.onSubmit} noValidate>
            <input
              ref={(el) => { this.email = el; }}
              type="email"
              name="email"
              placeholder="Email"
              className="input"
            />
            <input
              ref={(el) => { this.password = el; }}
              type="password"
              name="password"
              placeholder="Password"
              className="input"
            />
            <button className="btn btn--primary" >Create Account</button>
          </form>
          <Link to="/">Back to login page</Link>
        </div>
      </div>
    );
  }
}
