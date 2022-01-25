import React from 'react'
import SomeExampleComponent from './components/example/someExampleComponent'
import MyFirstComponent from './components/myFirstComponent'

type AppProps = {

}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <SomeExampleComponent/>
      <MyFirstComponent/>
    </div>
  )
}

export default App
