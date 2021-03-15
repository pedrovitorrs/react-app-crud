import React, { Component } from 'react'
import axios from 'axios'
import ClientTable from './components/TabelaClient';
import { Navbar, Button }from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const URL = 'http://localhost:8000/client';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = { listaClients: [] }
  
      this.refresh = this.refresh.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
  }
  
  refresh(Nome = '') {
      const search = Nome ? `&Nome__regex=/${Nome}/` : ''
      axios.get(`${URL}?sort=-createdAt${search}`)
      .then( response => { this.setState({ listaClients: response.data}); } )
      .catch(() => { console.log('Erro ao recuperar os dados'); } );    
  }
  
  componentDidMount() {
      this.refresh()
  }
  
  render() {
      return (
          <div>
            <Navbar bg="primary" variant="dark">
               <Navbar.Brand href="home">Clientes</Navbar.Brand>
            </Navbar>    
            <ClientTable clients={this.state.listaClients}/>
            <Button variant="secondary" onClick={(this.componentDidMount)}>Importar</Button>
          </div>
      ) 
  }
}

export default App;
