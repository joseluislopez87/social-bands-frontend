import axios from "axios";
import React, { Component } from "react";
import setAuthorizationToken from "../../utils/setAuthorizationToken";
import Button from "../Button/Button";
import Input from "../FormElements/Input";

import "./Login.scss";

class Login extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      password: "",
      username: "",
    };
  }

  public render() {
    return(
      <div className="column is-4 is-offset-4">
        <form onSubmit={(e) => this.handleSubmit(e)} className={this.state.isLoading ? "loading" : ""}>
          <Input id="username" label="Username" onChange={(e: any) => this.handleChange(e)} />
          <Input id="password" label="Password" type="password" onChange={(e: any) => this.handleChange(e)} />
          <Button>Log In</Button>
        </form>
      </div>
    );
  }

  private handleChange = (event: any) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  private handleSubmit = (event: any) => {
    event.preventDefault();

    this.setState({
      isLoading: true,
    });

    const API_BASEURL = "https://social-band-project.herokuapp.com/auth/login";

    axios.post(API_BASEURL, {
      password: this.state.password,
      username: this.state.username,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      // Set authorization token to local storage:
      const token = response.data.token;
      localStorage.setItem("jwtToken", token);

      // Set the header as well:
      setAuthorizationToken(token);

      // redirect to home once log in is successfull:
      this.props.history.push("/user");
    })
    .catch((error) => {
      console.log(error.response);
      this.setState({
        isLoading: false,
      });
    });
  }
}

export default Login;
