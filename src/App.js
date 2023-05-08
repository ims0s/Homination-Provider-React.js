import { Component, Fragment,useContext } from 'react';
import {Route,Routes} from 'react-router-dom'
import './App.css';
import NavBar from './components/nav-bar/nav-bar.component'
import { UserContext } from './context/auth.context';
import WelcomePage from './routes/welcomePage/welcomePage.component'
import Register from './routes/register/register.component';
import Login from './routes/Login/login.component'
import Dashboard from './routes/dashboard/dashboard.component';
class App extends Component{

  render(){
      const {UserContext}=this.props
      const {currentUser}=UserContext
    return (
      <Fragment>
        <Routes>
          <Route path='/' element={<NavBar />} >
            <Route index element={<WelcomePage/>} />
            <Route path='dashboard' element={<Dashboard/>}>
                <Route path='proposals' element={<h1>propsoals</h1>}/>
            </Route>
            <Route path='register' element={<Register/>} />
            <Route path='login' element={<Login/>} />
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
