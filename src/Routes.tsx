import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Navigate
}
from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Version } from './pages/Version';
import { Empresas, EmpresaForm , EmpresaView} from './pages/Empresas';
import { Destinos, DestinoForm , DestinoView} from './pages/Destinos';
import  PrivateRoute from './components/PrivateRoute';

import Login from  './pages/Login';
const Routes = ()=>{
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/version" element={<Version />} />
        <Route path="/empresas" element={<PrivateRoute><Empresas/></PrivateRoute>} />
        <Route path="/destinos" element={<PrivateRoute><Destinos/></PrivateRoute>} />
        <Route path="/empresas/new" element={<PrivateRoute><EmpresaForm/></PrivateRoute>} />
        <Route path="/destinos/new" element={<PrivateRoute><DestinoForm/></PrivateRoute>} />
        <Route path="/empresas/:id" element={<PrivateRoute><EmpresaView/></PrivateRoute>} />
        <Route path="/destinos/:id" element={<PrivateRoute><DestinoView/></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Switch>
    </Router>
  );
}

export default Routes;
