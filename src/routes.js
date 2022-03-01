import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Filme from './pages/Filme';
import Favoritos from './pages/Favoritos';
import Erro from './pages/Erro';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/filme/:id"><Filme/></Route>
                <Route exact path="/favoritos"><Favoritos/></Route>
                <Route path="*"><Erro/></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;