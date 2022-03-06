import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe("Testes para o Exame OTES12", () => {
  
  it("Será validado se existe um input texto que possui o `data-testid='full-name-input'`", () => {
    render(<App />);
    const nameInput = screen.getByTestId(/full-name-input/i);
    expect(nameInput).toBeInTheDocument();
  });

  it("Será validado se existe um input text que possui o `data-testid='cpf-input'`", () => {
    render(<App />);
    const descCpf = screen.getByTestId(/cpf-input/i);
    expect(descCpf).toBeInTheDocument();
  });

  it("Será validado se existe um input text que possui o `data-testid='plate-input'`", () => {
    render(<App />);
    const descPlate = screen.getByTestId(/plate-input/i);
    expect(descPlate).toBeInTheDocument();
  });

  it("Será validado se existe um input text que possui o `data-testid='telephone-input'`", () => {
    render(<App />);
    const descTelephone = screen.getByTestId(/telephone-input/i);
    expect(descTelephone).toBeInTheDocument();
  });

  it("Será validado se existe um input text que possui o `data-testid='email-input'`", () => {
    render(<App />);
    const descEmail = screen.getByTestId(/email-input/i);
    expect(descEmail).toBeInTheDocument();
  });

  it("Será validado se existe um input select que possui o `data-testid='accident-input'`", () => {
    render(<App />);
    const accidentInput = screen.getByTestId(/accident-input/i);
    expect(accidentInput).toBeInTheDocument();
    expect(accidentInput.options[0].value).toBe("pane");
    expect(accidentInput.options[1].value).toBe("acidente");
    expect(accidentInput.options[2].value).toBe("roubo");
    expect(accidentInput.options[3].value).toBe("furto");
  });
  
  it("Será validado se existe um input date que possui o `data-testid='date-input'`", () => {
    render(<App />);
    const descDate = screen.getByTestId(/date-input/i);
    expect(descDate).toBeInTheDocument();
  });

  it("Será validado se existe um input number que possui o `data-testid='value-input'`", () => {
    render(<App />);
    const descValue = screen.getByTestId(/value-input/i);
    expect(descValue).toBeInTheDocument();
  });

  it("Será validado se existe um input select que possui o `data-testid='request-input'`", () => {
    render(<App />);
    const requestInput = screen.getByTestId(/request-input/i);
    expect(requestInput).toBeInTheDocument();
    expect(requestInput.options[0].value).toBe("R1");
    expect(requestInput.options[1].value).toBe("R2");
    expect(requestInput.options[2].value).toBe("R3");
    expect(requestInput.options[3].value).toBe("R4");
    expect(requestInput.options[4].value).toBe("R5");
  });
  
  it("Deve renderizar o botão Salvar", () => {
    render(<App />);
    const saveBtn = screen.getByTestId(/save-button/i);
    expect(saveBtn).toBeInTheDocument();
  }); 

});