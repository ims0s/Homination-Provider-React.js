import { Component } from "react";
import {
  CDBBtn,
  CDBTable,
  CDBTableHeader,
  CDBTableBody,
  CDBContainer,
  CDBLink } from "cdbreact";
import { Pie} from "react-chartjs-2";
import './main.style.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Chart, ArcElement ,Tooltip} from 'chart.js'
Chart.register(ArcElement,Tooltip);

class Main extends Component{

    render(){
        const data = {
    chart1:{
      labels: [
        "Accepted",
        "Pending",
        "Rejectd",
      ],
      datasets: [
        {
          label: "Proposals",
          backgroundColor: [
            "#00ff11",
            "#a9a9a9",
            "#ff0000",
          ],
          borderWidth: 0,
          data: [10, 15, 5],
        },
      ],
    },
  }

        return(
            <div style={{height:"100%"}}>
	        <div style={{height:"100vh", overflowY:"scroll"}}>
                <Row>
                    <Col>
                    <Row className="m-3">

                        <div className="card-bg w-100 border d-flex flex-column">
                            <div className="p-4 d-flex flex-column h-100">
                            <div className="d-flex align-items-center justify-content-between">
                                <h4 className="m-0 h5 font-weight-bold text-dark">Proposals</h4>
                                <div className="px-2 py-1 bg-grey rounded-circle"><i className="fas fa-file-contract"></i></div>
                            </div>
                            <div className="my-3 d-flex ">
                                <CDBContainer style={{width:"250px", height:"150px"}} className="p-0">
                                <Pie data={data.chart1} options={({ responsive: true }, { maintainAspectRatio: false }, { legend: {display:false} })} />
                                </CDBContainer>
                                <div className="text-right w-25">
                                <p className="m-0">30</p>
                                <div>
                                    <div className="d-flex align-items-center justify-content-between text-success">
                                    <span style={{fontSize:"3em", margin:"-2rem 0px -1.5rem 0px"}}>&#8226;</span>
                                    <span className="small">Accepted</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between" style={{color:"#a9a9a9"}}>
                                    <span style={{fontSize:"3em", margin:"-2rem 0px -1.5rem 0px"}}>&#8226;</span>
                                    <span className="small">Pending</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between text-danger">
                                    <span style={{fontSize:"3em", margin:"-2rem 0px -1.5rem 0px"}}>&#8226;</span>
                                    <span className="small">Rejected</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <p className="c-p text-dark mb-0 font-weight-bold text-right mt-auto">
                                More Details
                                <i className="fas fa-arrow-right ml-1"></i>
                            </p>
                            </div>
                        </div>
                    </Row>
                    <Row className="m-3">
                    <div className="card-bg w-100 d-flex flex-column wide border d-flex flex-column">
	                <div className="d-flex flex-column p-0 h-100">
	                  <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
	                    <h4 className="font-weight-bold text-dark h5">Page Visits</h4>
	                    <div className="p-1 bg-grey rounded-circle"><i className="fas fa-sticky-note"></i></div>
	                  </div>
	                  <CDBTable borderless responsive>
	                    <CDBTableHeader color="light">
	                      <tr>
	                        <th>Page Name</th>
	                        <th className="table-rem">Views</th>
	                        <th className="table-rem">Value</th>
	                        <th>Bounce Rate</th>
	                      </tr>
	                    </CDBTableHeader>
	                    <CDBTableBody>
	                      <tr>
	                        <td>/demo/admin/index.html</td>
	                        <td className="table-rem">3,689</td>
	                        <td className="table-rem">$10</td>
	                        <td className="text-success text-center"><i className="fas fa-arrow-up"></i> 20%</td>
	                      </tr>
	                      <tr>
	                        <td>/demo/admin/index.html</td>
	                        <td className="table-rem">3,689</td>
	                        <td className="table-rem">$10</td>
	                        <td className="text-success text-center"><i className="fas fa-arrow-up"></i> 20%</td>
	                      </tr>
	                      <tr>
	                        <td>/demo/admin/index.html</td>
	                        <td className="table-rem">3,689</td>
	                        <td className="table-rem">$10</td>
	                        <td className="text-success text-center"><i className="fas fa-arrow-up"></i> 20%</td>
	                      </tr>
	                    </CDBTableBody>
	                  </CDBTable>
	                  <p className="c-p text-dark font-weight-bold text-right mt-auto mr-3">
	                    See More
	                    <i className="fas fa-arrow-right ml-1"></i>
	                  </p>
	                </div>
	              </div>
                    </Row>
                    </Col>
                    <Col lg={4} className="m-3">
                        <div className="card-bg h-100 w-100 border d-flex flex-column p-4">
                            <div className="d-flex">
                            <h6 className="h5 font-weight-bold text-dark">Messages</h6>
                            <div className="ml-auto rounded-circle bg-grey px-2 py-1"><i className="fas fa-comment-alt"></i></div>
                            </div>
                            <div className="d-flex justify-content-around mt-4">
                            <img alt="panelImage" src="https://robohash.org/fatma?set=set4&size=64x64" className="pane-image me-4" />
                            <div>
                                <h6 className="mb-0" style={{fontWeight:"600"}}>Mezue</h6>
                                <p className="m-0 small">Hey, how are you.</p>
                            </div>         
                            <p style={{fontSize:"0.5em"}} className="px-2 d-flex align-items-center text-muted">
                                <i className="fas fa-circle mr-1" style={{fontSize:"0.8em"}}></i>
                                <span style={{fontSize:"1.4em"}}>Online</span>
                            </p>
                            </div>
                            <div className="d-flex justify-content-around mt-4">
                            <img alt="panelImage" src="https://robohash.org/fatma?set=set4&size=64x64" className="pane-image me-4" />
                            <div>
                                <h6 className="mb-0" style={{fontWeight:"600"}}>Mezue</h6>
                                <p className="m-0 small">Hey, how are you.</p>
                            </div>         
                            <p style={{fontSize:"0.5em"}} className="px-2 d-flex align-items-center text-muted">
                                <i className="fas fa-circle mr-1" style={{fontSize:"0.8em"}}></i>
                                <span style={{fontSize:"1.4em"}}>Online</span>
                            </p>
                            </div>
                            <div className="d-flex justify-content-around mt-4">
                            <img alt="panelImage" src="https://robohash.org/fatma?set=set4&size=64x64" className="pane-image me-4" />
                            <div>
                                <h6 className="mb-0" style={{fontWeight:"600"}}>Mezue</h6>
                                <p className="m-0 small">Hey, how are you.</p>
                            </div>         
                            <p style={{fontSize:"0.5em"}} className="px-2 d-flex align-items-center text-muted">
                                <i className="fas fa-circle mr-1" style={{fontSize:"0.8em"}}></i>
                                <span style={{fontSize:"1.4em"}}>Online</span>
                            </p>
                            </div>
                            <p className="c-p text-dark font-weight-bold text-right mt-auto mb-0">
                            More Details
                            <i className="fas fa-arrow-right ml-1"></i>
                            </p>
                        </div>
                    </Col>
                </Row>
	        </div>
        </div>
        )
    }
}

export default Main;