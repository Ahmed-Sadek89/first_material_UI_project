// Router-dom
import {BrowserRouter as AllRoutes, Switch, Route} from 'react-router-dom';
//material UI
import {createTheme, ThemeProvider} from '@material-ui/core';
import {purple} from '@material-ui/core/colors';
//Pages & Components
import Create from './Pages/Create';
import Notes from './Pages/Notes';
import Error from './Pages/Error';
import Layout from './Components/Layout'

const App = () =>{
  const theme = createTheme({
    palette:{
      secondary:purple
    }
  })
    return(
      <ThemeProvider theme={theme}>
        <AllRoutes>
          <Layout>
            <Switch>
              <Route exact path='/' component={Notes} />
              <Route path='/create' component={Create} />
              <Route path='/:any' component={Error} />
            </Switch>
          </Layout>
        </AllRoutes>
      </ThemeProvider>
    )
}

export default App;
