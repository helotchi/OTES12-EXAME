import './App.css';
import React from 'react';
import Table from './components/Table';
import Form from './components/Form';
import Axios from 'axios';

class App extends React.Component {
  constructor() {
    super ();

    this.state = {
      id: 0,
      fullName: '',
      cpf: '',
      plate: '',
      telephone: '',
      email: '',
      accident: 'pane',
      date: '',
      value: 0,
      request: 'R1',
      sinistros: [],
    };
  }

  componentDidMount() {
    this.fetchSinistros();
  }

  fetchSinistros = async () => {
    // Método GET
    Axios.get("http://localhost:3001/getMethod")
      .then((response) => {
        this.setState({ sinistros: [ ...response.data ] });;
      });
  }

  handleInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.type === 'checked' ? target.checked : target.value,
    }, this.handleSaveButtonDisable);
  }

  handleSaveButtonClick = ( event ) => {
    event.preventDefault();
    const {
      fullName,
      cpf,
      plate,
      telephone,
      email,
      accident,
      date,
      value,
      request,
      sinistros,
    } = this.state;

    let objectSinistro = {
      fullName,
      cpf,
      plate,
      telephone,
      email,
      accident,
      date,
      value,
      request,
    };

    // Método POST
    Axios.post("http://localhost:3001/postMethod", objectSinistro)
      .then(({data}) => {
        const objectId = { id: data.insertId };
        const newSinistro = {...objectSinistro, ...objectId};
        this.setState({
          sinistros: [...sinistros, newSinistro],
          id: 0,
          fullName: '',
          cpf: '',
          plate: '',
          telephone: '',
          email: '',
          accident: 'pane',
          date: '',
          value: 0,
          request: 'R1',
        });
      }
      );
  }
  
  handleAlterButtonClick = (sinistroId) => {
    // Método GET pelo id
    Axios.get(`http://localhost:3001/getMethodID/${sinistroId}`)
      .then(({ data }) => {
        this.setState({ 
          id: data[0].id,
          fullName: data[0].fullName,
          cpf: data[0].cpf,
          plate: data[0].plate,
          telephone: data[0].telephone,
          email: data[0].email,
          accident: data[0].accident,
          date: data[0].date,
          value: data[0].value,
          request: data[0].request,
        });
      });
  }

  handleChangeButtonClick = (id) => {
    const {
      fullName,
      cpf,
      plate,
      telephone,
      email,
      accident,
      date,
      value,
      request,
      sinistros,
    } = this.state;

    const objectNewSinistro = {
      id,
      fullName,
      cpf,
      plate,
      telephone,
      email,
      accident,
      date,
      value,
      request,
    };
    
    // Método PUT
    Axios.put("http://localhost:3001/putMethod", objectNewSinistro);

    this.setState({
      sinistros: [...sinistros],
      id: 0,
      fullName: '',
      cpf: '',
      plate: '',
      telephone: '',
      email: '',
      accident: 'pane',
      date: '',
      value: 0,
      request: 'R1',
    });
  }

  handleDeleteButtonClick = (sinistroId) => {
    const { sinistros } = this.state;

    // Método DELETE
    Axios.delete(`http://localhost:3001/deleteMethod/${sinistroId}`);
    
    const newSinistros = sinistros.filter(({ id }) => id !== sinistroId);
    this.setState({ sinistros: newSinistros });
  }

  render() {
    return (
      <div className="App">
        <div className="left">
          <h1>MAPFRE</h1>
          <Form 
            { ...this.state }
            onInputChange={ this.handleInputChange }
            onSaveButtonClick={ this.handleSaveButtonClick }
            onChangeButtonClick={ this.handleChangeButtonClick }
          />
        </div>
        <div className="right">
          <h5>CONSULTA DE SINISTROS</h5>
            <Table 
              { ...this.state }
              onAlterButtonClick={ this.handleAlterButtonClick }
              onDeleteButtonClick={ this.handleDeleteButtonClick }
            />
        </div>
      </div>
    );
  }
}

export default App;
