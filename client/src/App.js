// Импорт стилей
import './assets/style/main.scss'

import { Switch, Route } from 'react-router-dom'

// Импорт Layout
import MainLayout from "./hoc/Layout/MainLayout/MainLayout"

// Импорт компонентов
import NavBar from "./containers/Nav_Bar/Nav_Bar"
import ModalPanelUser from "./components/ModalPanelUsers/ModalPanelUser"

// Импорт страниц приложения
import Home from './pages/Home/Home'
import Tasks from './pages/Tasks/Tasks'
import Questionnaire from './pages/Questionnaire/Questionnaire'
import Registration from "./pages/Registration/Registration"
import PracticeRedux from './pages/PracticeRedux/PracticeRedux'

import {useState} from "react";

function App() {

    // Hooks
    const [activePanelUser, setActivePanelUser] = useState(false)

    function onActivePanelUser() {
        setActivePanelUser(!activePanelUser)
    }

    return (
        <MainLayout>
            <NavBar
                onActivePanelUser={onActivePanelUser}
                activePanelUser={activePanelUser}
            />
            <ModalPanelUser
                activePanelUser={activePanelUser}
            />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/tasks">
                    <Tasks />
                </Route>
                <Route path="/questionnaire">
                    <Questionnaire />
                </Route>
                <Route path="/registration">
                    <Registration />
                </Route>
                <Route path="/practiceredux">
                    <PracticeRedux />
                </Route>
            </Switch>
        </MainLayout>
    );
}

export default App;
