import { Component } from "react";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from "cdbreact"
import { useNavigate } from "react-router-dom";
import './sidebar.style.css'
class Sidebar extends Component {

    render() {
        const {navigate}=this.props
        return (
            <div className="d-inline-flex mw-100 size">
                <CDBSidebar className="size"  textColor="#fff" backgroundColor="#333">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                        <span onClick={()=>(navigate('/dashboard/main'))} className="text-decoration-none" style={{ color: 'inherit' }}>
                            Sidebar
                        </span>
                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                            <div>
                                
                            </div>
                            <CDBSidebarMenuItem onClick={()=>(navigate('/dashboard/main'))} icon="columns">Dashboard</CDBSidebarMenuItem>


                            <CDBSidebarMenuItem onClick={()=>(navigate('./proposals'))} icon="file-contract">Proposals</CDBSidebarMenuItem>

                            <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
                            <CDBSidebarMenuItem icon="chart-pie">Analytics</CDBSidebarMenuItem>

                            <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                    
                </CDBSidebar>
            </div>
        )
    }
}
const SidebarHooks=(props)=>{
    return(
        <Sidebar
        {...props}
        navigate={useNavigate()}
        />
    )
}

export default SidebarHooks