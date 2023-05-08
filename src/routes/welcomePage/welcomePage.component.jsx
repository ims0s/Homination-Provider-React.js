import { Component,Fragment,useContext } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './welcomePage.style.css'
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/auth.context";
class WelcomePage extends Component{
    constructor(){
        super();
        
        
    }
    
    componentDidMount=()=>{
        const {currentUser}=this.props.UserContext;
        if(currentUser)
            this.props.navigate('/dashboard')

    }

    render(){
        const {navigate}=this.props
        const img ={
            main:'https://img.freepik.com/free-vector/professional-interior-designer-concept-decorator-planning-design-room-choosing-wall-color-furniture-style-house-renovation-isolated-flat-vector-illustration_613284-2060.jpg?w=740&t=st=1683112749~exp=1683113349~hmac=9e1cf154bda3d91d9fab7e24ae9e2ebc01f4bd9054ed5ad6c3c52806addab94b',
            createProfile:'https://assets-global.website-files.com/603fea6471d9d8559d077603/628b70fd5b92a65d185aecbc_freelancer-profile.png',
            postWork:'https://assets-global.website-files.com/603fea6471d9d8559d077603/628b70ff8caffb0a880e38ce_search-jobs.png',
            submitProposal:'https://assets-global.website-files.com/603fea6471d9d8559d077603/628b70ff12a4d6087877a56a_proposal.png',
            getContract:'https://assets-global.website-files.com/603fea6471d9d8559d077603/628b70ff95df086266bde27f_contract-sent.png',
            completeWork:'https://assets-global.website-files.com/603fea6471d9d8559d077603/628b70ffa31b5531f443a64a_welcome-freelancer.png',
            getPaid:'https://assets-global.website-files.com/603fea6471d9d8559d077603/628b70ff8b8243bcc66fa2aa_secure-payment.png',
        }
        
        return(
            <Fragment>
                <Container className="mt-4"  lg='true' >
                    <Row className="warning p-2 rounded-3 mb-4">
                        <Col xs={6} className="p-3">
                            <h2 className="text-white" style={{width:60+'%',fontFamily:'Sigmar'}}>Make the work the way you like</h2>
                            <h4 className="text-white">Build rewarding relationships in the world’s Work Marketplace. Your home for the work you want.</h4>
                            <Button variant="light" onClick={()=>navigate('/register')}>Register</Button>
                        </Col>
                        <Col xs={6}>
                            <img src={img.main} alt="" className="rounded-3 w-100"/>
                        </Col>
                    </Row>
                    <h2 style={{fontFamily:'Konkhmer Sleokchher'}}>How to get work</h2>
                    <div className="devider"></div>
                    <Row className="p-5">
                        <Col lg={4} className="d-flex flex-column align-items-center" >
                            <img className="w-50" src={img.createProfile} alt="" />
                            <h4 className="konkhmer">1.Create Profile</h4>
                        </Col>
                        <Col lg={4} className="d-flex flex-column align-items-center">
                            <img className="w-50" src={img.postWork} alt="" />
                            <h4 className="konkhmer">2.Post your work</h4>
                        </Col>
                        <Col lg={4} className="d-flex flex-column align-items-center">
                            <img className="w-50" src={img.submitProposal} alt="" />
                            <h4 className="konkhmer">3.Submit a Proposal</h4>
                        </Col>
                        <Col lg={4} className="d-flex flex-column align-items-center">
                            <img className="w-50" src={img.getContract} alt="" />
                            <h4 className="konkhmer">4.Make Contract</h4>
                        </Col>
                        <Col lg={4} className="d-flex flex-column align-items-center">
                            <img className="w-50" src={img.completeWork} alt="" />
                            <h4 className="konkhmer">5.Complete the Work</h4>
                        </Col>
                        <Col lg={4} className="d-flex flex-column align-items-center">
                            <img className="w-50" src={img.getPaid} alt="" />
                            <h4 className="konkhmer">6. get paid</h4>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

const WelcomePageHooks=(props)=>{
    return(
        <WelcomePage
        {...props}
        navigate={useNavigate()}
        UserContext={useContext(UserContext)}
        />
    )
}
export default WelcomePageHooks;