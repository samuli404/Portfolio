import React from 'react'
import ClickCount from './components/clickCount'
import SomeExampleComponent from './components/example/someExampleComponent'
import MyFirstComponent from './components/myFirstComponent'

type AppProps = {

}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <ClickCount/>
      <SomeExampleComponent/>
      <MyFirstComponent/>
    </div>
  )
}

export default App
