import { Link } from 'react-router-dom';
import './erro.css'

export default function Erro() {
    return (
      <div className='not-found'>
        <h1>404</h1>
        <h2>Pagina não encontrada!</h2>
        <br/>
        <span>Vamos tentar do zero?</span>
        <Link to="/">Home</Link> <br/>
      </div>
    );
  }