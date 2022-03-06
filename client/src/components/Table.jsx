import React from "react";
import PropTypes from 'prop-types';

class Table extends React.Component {
  render () {
    const {
      sinistros,
      onAlterButtonClick,
      onDeleteButtonClick,
    } = this.props;

    console.log(sinistros);

    const arrayResult = sinistros.map((sinistro) => (
      <tr key={ sinistro.id }>
        <th scope="row">{ sinistro.id }</th>
        <td>{ sinistro.fullName }</td>
        <td>{ sinistro.cpf }</td>
        <td>{ sinistro.plate }</td>
        <td>{ sinistro.telephone }</td>
        <td>{ sinistro.email }</td>
        <td>{ sinistro.accident }</td>
        <td>{ sinistro.date }</td>
        <td>{ sinistro.value }</td>
        <td>{ sinistro.request }</td>
        <td>
          <button className="btn btn-info"
            type="submit"
            data-testid="alter-button"
            onClick={ () => onAlterButtonClick(sinistro.id) }
            >
              ✏️
          </button>
        </td>
        <td>
          <button className="btn btn-warning"
          type="submit"
          data-testid="delete-button"
          onClick={ () => onDeleteButtonClick(sinistro.id) }
          >
            🗑️
          </button>
        </td>
      </tr>
    ));
    
    return (
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">CPF/CNPJ</th>
            <th scope="col">Placa</th>
            <th scope="col">Telefone</th>
            <th scope="col">E-mail</th>
            <th scope="col">Motivo</th>
            <th scope="col">Data</th>
            <th scope="col">Valor</th>
            <th scope="col">Solicitação</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          { sinistros.length > 0 && arrayResult }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  sinistros: PropTypes.array,
};

Table.defaultProps = {
  sinistros: [],
};

export default Table;