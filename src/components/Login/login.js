import React, { Component } from "react";
import CardHeader from "../CardHeader";
import Button from "../Button";
import Input from "../Input";
import { pages } from "../../config";

class Login extends Component {
  state = {
    email: "",
    password: "",
    emailValid: true,
    passwordValid: true,
    errorMessages: {
      email: "Введите email",
      password: "Введите пароль",
    },
  };
  handleChange = (e) => {
    e.target.name === "email" &&
      e.target.value !== "" &&
      this.setState({ emailValid: true });
    e.target.name === "password" &&
      e.target.value !== "" &&
      this.setState({ passwordValid: true });

    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (email !== "" && password !== "") {
      const { setPage } = this.props;
      setPage(pages.MAP);
    } else {
      email === "" && this.setState({ emailValid: false });
      password === "" && this.setState({ passwordValid: false });
    }
  };
  handleClick = (e) => {
    e.preventDefault();
    const { setPage } = this.props;
    setPage(pages.REGISTRATION);
  };
  render() {
    const {
      email,
      password,
      emailValid,
      passwordValid,
      errorMessages,
    } = this.state;

    return (
      <>
        <CardHeader>Войти</CardHeader>
        <form className="login">
          <Input
            label="Email"
            placeholder="mail@mail.ru"
            required="required"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            errorMessage={!emailValid ? errorMessages["email"] : ""}
          />
          <Input
            label="Пароль"
            placeholder="*********"
            required="required"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            errorMessage={!passwordValid ? errorMessages["password"] : ""}
          />
          <div className="description">Забыли пароль?</div>
          <Button onClick={this.handleSubmit}>Войти</Button>
        </form>
        <div className="cardFooter">
          Новый пользователь?{" "}
          <a href="#" onClick={this.handleClick}>
            Регистрация
          </a>
        </div>
      </>
    );
  }
}

export default Login;
