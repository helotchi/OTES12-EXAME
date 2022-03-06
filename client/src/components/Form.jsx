import PropTypes from 'prop-types';
import React from 'react';
import Input from './Input';

class Form extends React.Component {
  // constructor() {
  //   super ();

  //   this.state = { }
  // }
  
  render() {
    const {
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
      onInputChange,
      onSaveButtonClick,
      onChangeButtonClick,
    } = this.props;

    return (
      <div>
        <form id="form">
          <div>
            <h5>DADOS DO SEGURADO</h5>
              
            <Input
              inputHtmlFor="fullName"
              inputLabel="NOME COMPLETO"
              inputName="fullName"
              inputType="text"
              inputId="full-name-input"
              inputValue={ fullName }
              inputOnChange={ onInputChange }
              inputPlaceholder="Nome Completo"
            />

            <Input
              inputHtmlFor="cpf"
              inputLabel="CPF/CNPJ"
              inputName="cpf"
              inputType="text"
              inputId="cpf-input"
              inputValue={ cpf }
              inputOnChange={ onInputChange }
              inputPlaceholder="CPF / CNPJ"
            />

            <Input
              inputHtmlFor="plate"
              inputLabel="PLACA DO VEÍCULO"
              inputName="plate"
              inputType="text"
              inputId="plate-input"
              inputValue={ plate }
              inputOnChange={ onInputChange }
              inputPlaceholder="Placa do Veículo"
            />

            <Input
              inputHtmlFor="telephone"
              inputLabel="TELEFONE PARA CONTATO (DDD)"
              inputName="telephone"
              inputType="tel"
              inputId="telephone-input"
              inputValue={ telephone }
              inputOnChange={ onInputChange }
              inputPlaceholder="Telefone para Contato"
            />

            <Input
              inputHtmlFor="email"
              inputLabel="E-MAIL"
              inputName="email"
              inputType="email"
              inputId="email-input"
              inputValue={ email }
              inputOnChange={ onInputChange }
              inputPlaceholder="E-mail"
            />
          </div>

          <div>
            <h5>INFORMAÇÕES DO SERVIÇOS PARTICULAR</h5>

            <div className='mb-1'>
              <label className='form-label' htmlFor="accident">
                MOTIVO
                <select className="form-select"
                  id="accident"
                  data-testid="accident-input"
                  name="accident"
                  value={ accident }
                  onChange={ onInputChange }
                >
                  <option value="pane">Pane</option>
                  <option value="acidente">Acidente</option>
                  <option value="roubo">Roubo</option>
                  <option value="furto">Furto</option>
                </select>
              </label>
            </div>
  
            <Input
              inputHtmlFor="date"
              inputLabel="DATA DA OCORRÊNCIA"
              inputName="date"
              inputType="date"
              inputId="date-input"
              inputValue={ date }
              inputOnChange={ onInputChange }
              inputPlaceholder="Data da Ocorrência"
            />

            <Input
              inputHtmlFor="value"
              inputLabel="VALOR (R$)"
              inputName="value"
              inputType="text"
              inputId="value-input"
              inputValue={ value }
              inputOnChange={ onInputChange }
              inputPlaceholder="Valor"
            />
          </div>
          
          <div>
            <h5>MOTIVO DE SOLICITAÇÃO - REEMBOLSO DE ASSISTÊNCIA 24 HORAS</h5>
            
            <div className='mb-1'>
              <select className="form-select"
                  id="request"
                  data-testid="request-input"
                  name="request"
                  value={ request }
                  onChange={ onInputChange }
                >
                  <option value="R1">[R1] CONTRATAÇÃO DE PRESTADOR POR REFERÊNCIA</option>
                  <option value="R2">[R2] SERVIÇO ACIONADO E EXECUTADO POR ORGÃO PÚBLICOS (POLÍCIA, PREFEITURA E ETC.)</option>
                  <option value="R3">[R3] NÃO COMPARECIMENTO DO PRESTADOR DE SERVIÇO DE SEGURADORA</option>
                  <option value="R4">[R4] NÃO FINALIZAÇÃO DO SERVIÇO POR PARTE DO PRESTADOR DE SERVIÇO DA SEGURADORA</option>
                  <option value="R5">[R5] DIFICULDADE DE CONTATO PARA ATENDIMENTO COM A SEGURADORA</option>
              </select>
            </div>
          </div>

          { id === 0 && <div className='mb-1'>
            <button className="btn btn-primary"
              type="submit"
              data-testid="save-button"
              onClick={ onSaveButtonClick }
              >
                Cadastrar
              </button>
          </div>
          }

          { id !== 0 && <div className='mb-1'>
            <button className="btn btn-primary"
              type="submit"
              data-testid="save-button"
              onClick={ () => onChangeButtonClick(id) }
              >
                Salvar
              </button>
          </div>
          }

      </form>
    </div>
    );
  }
}

Form.propTypes = {
  id: PropTypes.number,
  fullName: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  plate: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  accident: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  request: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func,
  onChangeButtonClick: PropTypes.func,
};

Form.defaultProps = {
  id: 0,
  onSaveButtonClick: () => {},
  onChangeButtonClick: () => {},
};

export default Form;