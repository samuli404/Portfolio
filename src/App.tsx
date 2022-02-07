import React from 'react'
import styles from './App.module.scss'
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from 'react-router-dom';
import Main from './components/pages/main/main'
import Project from './components/pages/main/project/project'
import Cv from './components/pages/main/project/cv/cv'

type AppProps = {

}

const App: React.FC<AppProps> = () => {
  return (
     // Important! add your repositoryname to basename
     <Router basename='/portfolio'>
      
     {/* The navigation bar and other components you want to display on all pages come here */}
     <div className={styles.navbar}>
       <Link to='/'>Front page</Link>
       <Link to='/projects'>projects</Link>
       <Link to='/cv'>cv</Link>
     </div>

     <Switch>
       {/* Changing content comes here */}
       <Route exact path='/' component={Main} />
       <Route exact path='/projects' component={Project}/>
       <Route exact path='/cv' component={Cv}/>
     </Switch>

     {/* The footer and other components you want to display on all pages come here */}
     {/* <ClickCount /> */}

   </Router>
  )
}

export default App
