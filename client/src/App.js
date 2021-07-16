// Импорт стилей
import './assets/style/main.scss'

import { Switch, Route } from 'react-router-dom'

// Импорт компонентов
import NavBar from './components/nav-bar/nav-bar'

// Импорт страниц приложения
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import Questionnaire from './pages/Questionnaire'

function App() {
  return (
    <div className="App">
      <NavBar />



      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="/questionnaire">
          <Questionnaire />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
