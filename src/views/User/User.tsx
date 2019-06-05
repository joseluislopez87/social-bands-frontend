import axios from "axios";
import React, { Component } from "react";
import Image from "../../components/Image/Image";

export default class User extends Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      data: {},
    };
  }

  public render() {
    return (
      <div>
        <Image src={this.state.data.pictureUrl} />
        <h1>{this.state.data.fullName}</h1>
      </div>
    );
  }

  public componentDidMount() {
    axios.get("https://social-band-project.herokuapp.com/users/me", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwtToken"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        // this.props.history.push("/login");
      });
  }
}
