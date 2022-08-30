import React from 'react'
import styles from './App.module.scss'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Project from './components/pages/project/project'
import Cv from './components/pages/cv/cv'
import Main3 from './components/main3/main3'

type AppProps = {

}

const App: React.FC<AppProps> = () => {
  return (
     // Important! add your repositoryname to basename
     <Router basename='/portfolio'>
      
     {/* The navigation bar and other components you want to display on all pages come here */}
     <div className={styles.navbar}>
       <Link to='/'>Home</Link>
       <Link to='/projects'>Projects</Link>
       <Link to='/cv'>About Me</Link>
     </div>

     <Switch>
       {/* Changing content comes here */}
       <Route exact path='/' component={Main3} />
       <Route exact path='/projects' component={Project}/>
       <Route exact path='/cv' component={Cv}/>
       
     </Switch>

     {/* The footer and other components you want to display on all pages come here */}
     {/* <ClickCount /> */}

   </Router>
  )
}

export default App
