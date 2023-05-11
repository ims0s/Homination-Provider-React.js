import { Component , useContext } from "react";
import { CDBTable, CDBTableBody, CDBTableHeader } from "cdbreact";
import { UserContext } from "../../context/auth.context";
import axios from "axios";


class DashboardTable extends Component {

    constructor(){
        super();

        this.state={
            data:[]
        }
    }

    componentDidMount(){
        const { REACT_APP_API } = process.env
        const { currentUser } = this.props.UserContext
        console.log(currentUser)
        const { username, token } = currentUser
        axios.get(`${REACT_APP_API}requests/provider/${username}`, { headers: { "Authorization": token } })
        .then(res => this.setState(()=>({data:res.data})))

    }

    showData=()=>{
        const data = this.state.data
        

        return (
            data.splice(0,3).map(e => {
                const {client_Name,status,Request_Description}=e;
                const {propertyInMeter,location}=Request_Description
                return (
                    <tr>
                        <td>{client_Name}</td>
                        <td className="table-rem">{location}</td>
                        <td className="table-rem">{`${propertyInMeter} ㎡`}</td>
                        <td className={`text-${this.statusColor(status)} text-center`}>{status}</td>
                    </tr>
                )
            })
        )
    }

    statusColor=(status)=>{
        if(status==='pending'){
            return 'secondary'
        }else if(status==='accepted'){
            return 'success'
        }else{
            return 'danger'
        }

    }

    render() {

        return (
            <div className="card-bg w-100 d-flex flex-column wide border d-flex flex-column">
                <div className="d-flex flex-column p-0 h-100">
                    <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                        <h4 className="font-weight-bold text-dark h5">Last Proposals</h4>
                        <div className="p-1 bg-grey rounded-circle"><i className="fas fa-file-contract"></i></div>
                    </div>
                    <CDBTable borderless responsive>
                        <CDBTableHeader color="light">
                            <tr>
                                <th>Client Name</th>
                                <th className="table-rem">Location</th>
                                <th className="table-rem">Area</th>
                                <th>Status</th>
                            </tr>
                        </CDBTableHeader>
                        <CDBTableBody>
                            {this.showData()}
                        </CDBTableBody>
                    </CDBTable>
                    <p className="c-p text-dark font-weight-bold text-right mt-auto mr-3">
                        See More
                        <i className="fas fa-arrow-right ml-1"></i>
                    </p>
                </div>
            </div>
        )
    }
}

const DashboardTableHooks = (props)=>{
    return(
        <DashboardTable
            {...props}
            UserContext={useContext(UserContext)}
        />
    )
}

export default DashboardTableHooks;