import axios from "axios";
import React, { Component } from "react";
import Button from "../Button/Button";
import Input from "../FormElements/Input";

export class Login extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      password: "",
      username: "",
    };
  }

  public render() {
    return(
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <Input id="username" label="Username" onChange={(e: any) => this.handleChange(e)} />
        <Input id="password" label="Password" type="password" onChange={(e: any) => this.handleChange(e)} />
        <Button>Log In</Button>
      </form>
    );
  }

  private handleChange = (event: any) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  private handleSubmit = (event: any) => {
    event.preventDefault();

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
      localStorage.setItem("JWT", response.data.token);
    })
    .catch((error) => {
      console.log(error.response);
    });
  }
}
