import { Component,Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sideBar/sideBar.component";
class Dashboard extends Component{

    componentDidMount(){
        this.props.navigate('./main')

    }

    render(){
        

        return(
            <Fragment>
                <div className="d-flex">
                    <div lg className="d-inline-flex" >
                        <Sidebar/>
                    </div>
                    <div className="flex-grow-1">
                        <Outlet/>
                    </div>
                </div>
                
            </Fragment>
        )
    }
}


const DashboardHooks=(props)=>{

    return(
        <Dashboard
        {...props}
        navigate={useNavigate()}
        />
    )
}

export default DashboardHooks;