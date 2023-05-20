import { Component } from "react";
import  Figure  from "react-bootstrap/Figure";
import Item from "react-bootstrap/ListGroupItem"
import { useNavigate } from "react-router-dom";
import "./listGroupItem.style.css"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'
class ListGroupItem extends Component {

    

    render() {
        const {title,id,photo,desc,categories,price}=this.props
        
        return (
            <Item action  className='categoryItem' id={id} >
                <Row className="row">
                    <Col lg={7} xs={12} className='column'>
                        <h3>{title}</h3>
                        <Badge className="mx-3" pill bg="success">
                            {price} E£ / M²
                        </Badge>
                    </Col>
                    
                </Row >
                <Row className="mt-1">
                    <Col lg={8}>
                        <h5>{desc}</h5>
                        <Badge pill bg="secondary">
                            {categories}
                        </Badge>
                    </Col>

                    <Col lg={4} className='itemImage mt-1'>
                    <Figure>
                        <Figure.Image width={300} height={168.75} src={photo} />
                    </Figure>
                    </Col>
            
                </Row>
            </Item>
        )
    }
}


const ListGroupItemHook = (props) => {
    return (
        <ListGroupItem
            {...props}
            Navigate={useNavigate()}
        />
    )

}


export default ListGroupItemHook;