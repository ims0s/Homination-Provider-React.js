import { Component , Fragment , useContext } from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import { UserContext } from "../../context/auth.context";
import ListGroupItem from "../../components/listGroupItem/listGroupItem.component";
import Button from 'react-bootstrap/Button'
import ServiceForm from "../../components/serviceForm/serviceForm.component";
import axios from 'axios'
import './services.style.css'
class Services extends Component{

    constructor(){
        super();

        this.state={
            service:{},
            data:[],
            modal:false,
            validate:false

        }

    }

    componentDidMount(){
        const {REACT_APP_API}=process.env
        const {username}=this.props.UserContext.currentUser
        
        
        
        fetch(`${REACT_APP_API}services?provider=${username}`).then(res => res.json()).then(data => this.setState(()=>({data})))
        
    }

    modalHide=()=>{
        this.setState(()=>({modal:false}))
    }

    onChangeHandler=(e)=>{
        const {id,value}=e.target;
        
        this.setState(()=>({
            service:{
                ...this.state.service,
                [id]:value
            }
        }))
    }

    onSubmitHandler=(event)=>{
        const {username,token}=this.props.UserContext.currentUser;
        const {REACT_APP_API}=process.env
        const config = {
            headers: {
              Authorization: `${token}`,
            },
          };
        
        
        const form = event.currentTarget;
        
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            event.preventDefault();
            event.stopPropagation();
            const service={
                ...this.state.service,
                providerImage:'https://st.hzcdn.com/fimgs/c8e339fc01075aa0_1099-w240-h240-b1-p0--.jpg',
                provider:username,
                gallery:['https://st.hzcdn.com/fimgs/9721524c0144b220_9930-w368-h207-b0-p0---.jpg']
                
            }
            axios.post(`${REACT_APP_API}services/create`,service,config)
            .then(res=>res.data)
            .then(data=>{
                
                this.setState({modal:false})
                fetch(`${REACT_APP_API}services?provider=${username}`).then(res => res.json()).then(data => this.setState(()=>({data})))
            })
            .catch(e=>console.log(e))
        }
        this.setState(() => ({validate:true}),()=>console.log(this.state.validate))
    }

    show =() => {
     
        const {data}=this.state;
        return data.map(this.view)
      }


    view = (card) => {
        
        const {title,provider,_id,desc,categories,price}=card;
        return(
          
            <ListGroupItem 
                title={title} price={price} categories={categories} 
                username={provider} desc={desc} key={_id} id={_id} 
                photo="https://st.hzcdn.com/fimgs/9721524c0144b220_9930-w368-h207-b0-p0---.jpg"
            />
          
        )
      }
    
    render(){
        const {modal,validate}=this.state
        return(
            <div className="vh-100 over">
                <div className="d-flex p-4 flex-row-reverse ">
                    <Button onClick={()=>this.setState(()=>({modal:true}))} variant="success">
                        + New Service
                    </Button>
                    <ServiceForm validate={validate} onSubmitHandler={this.onSubmitHandler} onChangeHandler={this.onChangeHandler} modal={modal} onhide={this.modalHide}/>
                </div>
                <Container className="my-3 px-5" >
                    <ListGroup>
                     {this.show()}
                    
                    </ListGroup>
                </Container>
            </div>
        )
    }
}


const ServicesHooks=(props)=>{
    return (
        <Services
            {...props}
            UserContext={useContext(UserContext)} 
        />
    )
}

export default ServicesHooks;