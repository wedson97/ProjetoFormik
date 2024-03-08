import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './views/UserContext';
import TabelaUsuarios from './views/TabelaUsuarios';
import FormFormik from './views/FormFormik';

function App() {
  return (
    <UserProvider>
      <FormFormik></FormFormik>
      <TabelaUsuarios></TabelaUsuarios>
      
    </UserProvider>
  );
}

export default App;
