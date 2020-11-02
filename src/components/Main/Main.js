import React from 'react'
import { Route, Switch} from 'react-router'
import App from '../App/App'
import LandingPage from '../LandingPage/LandingPage'
import NotFoundPage from '../../NotFoundPage'
import Logo from '../Logo/Logo'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import PrivateRoute from '../Utils/PrivateRoute'

class Main extends React.Component {
    render() {
        return (
            <>
                <Logo />
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <PrivateRoute path='/recipes' component={App} />
                    <Route component={NotFoundPage} />
                </Switch>
            </>
        )
    }
}

export default Main
