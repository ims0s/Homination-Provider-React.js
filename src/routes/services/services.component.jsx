import { Component , Fragment , useContext } from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import { UserContext } from "../../context/auth.context";
import ListGroupItem from "../../components/listGroupItem/listGroupItem.component";
import Button from 'react-bootstrap/Button'
class Services extends Component{

    constructor(){
        super();

        this.state={
            data:[],
            modal:false,

        }

    }

    componentDidMount(){
        const {username}=this.props.UserContext.currentUser
        
        
        
        fetch(`http://localhost:5000/services?provider=${username}`).then(res => res.json()).then(data => this.setState(()=>({data})))
        
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
        
        return(
            <Fragment>
                <div className="d-flex p-4 flex-row-reverse ">
                    <Button variant="success"> + New Service</Button>
                </div>
                <Container className="my-3 px-5" >
                    <ListGroup>
                     {this.show()}
                    
                    </ListGroup>
                </Container>
            </Fragment>
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