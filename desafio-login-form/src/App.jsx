import { login } from './utils';
import './index.css';
import { useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    setLoading(true);
    setErrorMessage('');

    login({ email, password })
      .then(() => {
        // Login bem-sucedido, limpar a mensagem de erro
        setErrorMessage('');
        // Mostrar um alerta
        alert('Login successful!');
      })
      .catch((error) => {
        // Login falhou, exibir mensagem de erro
        setErrorMessage(error.message);
      })
      .finally(() => {
        // Resetar o estado de loading após a conclusão do login (seja bem-sucedido ou falho)
        setLoading(false);
      });
  };

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {errorMessage && <div className='errorMessage'>{errorMessage}</div>}
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input
            id={'email'}
            type={'email'}
            autoComplete='off'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input
            id={'password'}
            type={'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='button'>
          <button onClick={handleLogin} disabled={loading || !email || password.length < 6}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
}
