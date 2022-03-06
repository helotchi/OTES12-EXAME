import PropTypes from 'prop-types';
import React from 'react';

class Input extends React.Component {
  render() {
    const {
      inputName,
      inputId,
      inputLabel,
      inputType,
      inputValue,
      inputChecked,
      inputHtmlFor,
      inputOnChange,
    } = this.props;

    return (
      <div className='mb-1'>
        
        { inputType !== 'radio' && <label 
          className='form-label' htmlFor={ inputHtmlFor }>
            { inputLabel }
            <input
              className='form-control'
              data-testid={ inputId }
              id={ inputHtmlFor }
              name={ inputName }
              type={ inputType }
              value={ inputValue }
              checked={ inputChecked }
              onChange={ inputOnChange }

            />
          </label> }

        { inputType === 'radio' && <label 
          className="form-check-label"
          htmlFor={ inputHtmlFor }>
          <input
            className='form-check-input'
            data-testid={ inputId }
            id={ inputHtmlFor }
            type={ inputType }
            value={ inputValue }
            checked={ inputChecked }
            onChange={ inputOnChange } />
          { inputLabel } 
        </label> }
      </div>
      
    );
  }
}

Input.propTypes = {
  inputName: PropTypes.string,
  inputId: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  inputHtmlFor: PropTypes.string.isRequired,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inputChecked: PropTypes.bool,
  inputOnChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  inputName: '',
  inputType: '',
  inputValue: '',
  inputChecked: false,
};

export default Input;