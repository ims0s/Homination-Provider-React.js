import { Component, Fragment,useContext } from 'react';
import {Route,Routes} from 'react-router-dom'
import './App.css';
import NavBar from './components/nav-bar/nav-bar.component'
import { UserContext } from './context/auth.context';

class App extends Component{

  render(){
      const {UserContext}=this.props
      const {currentUser}=UserContext
    return (
      <Fragment>
        <Routes>
          <Route path='/' element={<NavBar />} >
            {currentUser
              ?(<Route index element={<h1>hello world</h1>} />)
              :(<Route index element={<h1>Not hello world</h1>} />)
            }
          </Route>
            
          
        </Routes>
      </Fragment>
    )
  }
}

const AppHook = (props)=>{
  return(
    <App
      {...props}
      UserContext={useContext(UserContext)}
    />
  )
}

export default AppHook;
