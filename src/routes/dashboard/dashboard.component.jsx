import { Component,Fragment } from "react";
import { Outlet } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from "../../components/sideBar/sideBar.component";
class Dashboard extends Component{

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

export default Dashboard;