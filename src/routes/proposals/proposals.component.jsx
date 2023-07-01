import { Component,useContext,Fragment } from "react";
import { CDBTable, CDBTableBody, CDBTableHeader } from "cdbreact";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/auth.context";
import Dropdown from 'react-bootstrap/Dropdown'
import './proposals.style.css'
import TransferModal from "../../components/transferModal/transferModal.component";
class Proposals extends Component{

    constructor(){
        super();

        this.state={
            data:[],
            modal:false,
            validate:false
        }
    }

    componentDidMount(){
        const { REACT_APP_API } = process.env
        const { currentUser } = this.props.UserContext
        const { username, token } = currentUser
        axios.get(`${REACT_APP_API}requests/provider/${username}`, { headers: { "Authorization": token } })
        .then(res => this.setState(()=>({data:res.data})))

    }

    modalHide=()=>{
        this.setState(()=>({modal:false}))
    }

    onSubmitHandler=(event)=>{
        const {username,token}=this.props.UserContext.currentUser;
        const {REACT_APP_API}=process.env
        const {to}=this.state;
        const config = {
            headers: {
              Authorization: `${token}`,
            },
          };
        
        
        const form = event.currentTarget;
        const {id}=event.target
        console.log(id)
        
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            event.preventDefault();
            event.stopPropagation();
            const transfer={
                from:username,
                to
            }
            axios.put(`${REACT_APP_API}/requests/${id}/transfer`,transfer,config)
            .then(res=>res.data)
            .then(data=>{
                
                this.setState({modal:false})
                fetch(`${REACT_APP_API}requests/provider/${username}`).then(res => res.json()).then(data => this.setState(()=>({data})))
            })
            .catch(e=>console.log(e))
        }
        this.setState(() => ({validate:true}),()=>console.log(this.state.validate))

    }

    onChangeHandler=(e)=>{
        const {value}=e.target;
        
        this.setState(()=>({
            to:value
        }),()=>console.log(this.state))
    }

    showData=()=>{
        const data = this.state.data
        

        return (
            data.map(e => {
                const {modal,validate}=this.state;
                const {client_Name,status,Request_Description,_id}=e;
                const {propertyInMeter,location,property_Type,request_Desc}=Request_Description
                
                return (
                    <tr key={_id} className="tableRow">
                        <td>{client_Name}</td>
                        <td className="table-rem">{property_Type}</td>
                        <td className="table-rem "> <ul className="proposals-desc">
                            {Object.keys(request_Desc).map(key=>{
                                if(key==='color'){
                                    return(
                                        <li>
                                            {`${key}:`} <div style={{backgroundColor:request_Desc.color,width:'10%',height:'10px',display:"inline-block"}}></div> {request_Desc.color}
                                        </li>
                                    )
                                }
                                return(
                                    <li>{`${key}: ${request_Desc[key]}`}</li>
                                )
                            })}
                        </ul></td>
                        <td className="table-rem">  {location}</td>
                        <td className="table-rem">{`${propertyInMeter} ㎡`}</td>
                        <td className={`text-${this.statusColor(status)} text-center`}>{status}</td>
                        <td>

                            <Dropdown>
                                <Dropdown.Toggle variant="warning">
                                    Actions
                                </Dropdown.Toggle>
                                <Dropdown.Menu>

                            {status==='pending'?(
                                <Fragment>
                                    <Dropdown.Item  onClick={(e)=>this.actionHandler(_id,e.target.id)} id="accept">Accept</Dropdown.Item>
                                    <Dropdown.Item onClick={(e)=>this.actionHandler(_id,e.target.id)} id="reject">reject</Dropdown.Item>
                                    <Dropdown.Item onClick={()=>this.setState(()=>({modal:true})) } id="transfer" >Transfer</Dropdown.Item>
                                    <TransferModal id={_id} UserContext={this.props.UserContext} validate={validate} onSubmitHandler={this.onSubmitHandler} onChangeHandler={this.onChangeHandler} modal={modal} onhide={this.modalHide}/>
                                    <Dropdown.Item onClick={()=>this.deleteHandler(_id)} >delete</Dropdown.Item>
                                </Fragment>
                            ):(
                                <Dropdown.Item onClick={()=>this.deleteHandler(_id)}>delete</Dropdown.Item>
                            )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                )
            })
        )
    }

    actionHandler=async (id,method)=>{
        const {REACT_APP_API}=process.env;
        const { currentUser } = this.props.UserContext;
        const { username, token } = currentUser;
        
       await axios.put(`${REACT_APP_API}requests/${id}/${method}`,{username},{ headers: { "Authorization": token } })

       axios.get(`${REACT_APP_API}requests/provider/${username}`, { headers: { "Authorization": token } })
       .then(res => this.setState(()=>({data:res.data})))
    }

    deleteHandler=async (id)=>{
        const {REACT_APP_API}=process.env;
        const { currentUser } = this.props.UserContext;
        const { username, token } = currentUser;
       await axios.delete(`${REACT_APP_API}requests/${id}`,{ headers: { "Authorization": token } , data:{username}})

       axios.get(`${REACT_APP_API}requests/provider/${username}`, { headers: { "Authorization": token } })
       .then(res => this.setState(()=>({data:res.data})))
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

    render(){

        return(
            <div className="card-bg w-100 d-flex flex-column wide vh-100  d-flex flex-column p-3 overTable">
                <div className="d-flex flex-column p-0 h-100">
                    <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                        <h4 className="font-weight-bold text-dark h5">Last Proposals</h4>
                    </div>
                    <CDBTable borderless responsive className="overTable">
                        <CDBTableHeader color="light">
                            <tr>
                                <th>Client Name</th>
                                <th className="table-rem">Property Type</th>
                                <th className="table-rem">Description</th>
                                <th className="table-rem">Location</th>
                                <th className="table-rem">Area</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </CDBTableHeader>
                        <CDBTableBody>
                            {this.showData()}
                        </CDBTableBody>
                    </CDBTable>
                </div>
            </div>
        )
    }
}

const ProposalsHooks=(props)=>{

    return (
        <Proposals
            {...props}
            UserContext={useContext(UserContext)}
            navigate={useNavigate()}
        />
    )
}

export default ProposalsHooks;