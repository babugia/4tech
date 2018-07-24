import React, { Component } from 'react';

class Header extends Component {
    render() {
      return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <a class="navbar-brand" href="#">
        <img class="logo" src="./logo-h-vjobs.png" alt=""> </img>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link text-white" href="#">Vagas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Sobre</a>
            </li>
          </ul>
        </div>
    </nav>
      );
    }
  }
  
  export default App;