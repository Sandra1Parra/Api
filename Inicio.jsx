import React, { Component } from 'react';

import React from 'react';
import ReactDOM from 'react-dom';
import Inicio from './Inicio'; // Asegúrate de usar la ruta correcta al archivo JSX

ReactDOM.render(Inicio, document.getElementById('root'));

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de autenticación, por ejemplo, enviar los datos al servidor
    const { username, password } = this.state;
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  }

  render() {
    return (
      <div>
        <h1>Iniciar Sesión</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Nombre de Usuario:</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
