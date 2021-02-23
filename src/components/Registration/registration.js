import React, { Component } from "react";
import CardHeader from "../CardHeader";
import Button from "../Button";
import Input from "../Input";
import { pages } from "../../config";

class Registration extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    emailValid: true,
    nameValid: true,
    passwordValid: true,
    errorMessages: {
      email: "Введите email",
      password: "Введите пароль",
      name: "Введите имя",
    },
  };
  handleChange = (e) => {
    e.target.name === "email" &&
      e.target.value !== "" &&
      this.setState({ emailValid: true });
    e.target.name === "password" &&
      e.target.value !== "" &&
      this.setState({ passwordValid: true });
    e.target.name === "name" &&
      e.target.value !== "" &&
      this.setState({ nameValid: true });

    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name } = this.state;
    if (email !== "" && password !== "" && name !== "") {
      const { setPage } = this.props;
      setPage(pages.MAP);
    } else {
      email === "" && this.setState({ emailValid: false });
      password === "" && this.setState({ passwordValid: false });
      name === "" && this.setState({ nameValid: false });
    }
  };
  handleClick = (e) => {
    e.preventDefault();
    const { setPage } = this.props;
    setPage(pages.LOGIN);
  };
  render() {
    const {
      email,
      password,
      name,
      emailValid,
      passwordValid,
      nameValid,
      errorMessages,
    } = this.state;
    return (
      <>
        <CardHeader>Регистрация</CardHeader>
        <form className="registration">
          <Input
            label="Email*"
            placeholder="mail@mail.ru"
            required="required"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            errorMessage={!emailValid ? errorMessages["email"] : ""}
          />
          <Input
            label="Как вас зовут?*"
            placeholder="Джордани Йованович"
            required="required"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            errorMessage={!nameValid ? errorMessages["name"] : ""}
          />
          <Input
            label="Придумайте пароль"
            placeholder="*********"
            required="required"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            errorMessage={!passwordValid ? errorMessages["password"] : ""}
          />
          <Button onClick={this.handleSubmit}>Войти</Button>
        </form>
        <div className="cardFooter">
          Уже зарегестрированны?{" "}
          <a href="#" onClick={this.handleClick}>
            Войти
          </a>
        </div>
      </>
    );
  }
}

export default Registration;
