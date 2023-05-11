import { Component } from "react";
import './main.style.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DashboardTable from "../../components/dashboardTable/dashboardTable.component";
import DashboardChart from "../../components/dashboardChart/dashboardChart.component";
import DashboardMessages from "../../components/dashboardMessages/dashboardMessages.component";


class Main extends Component {

  render() {
    

    return (
      <div style={{ height: "100%" }}>
        <div style={{ height: "100vh", overflowY: "scroll" }}>
          <Row>
            <Col>
              <Row className="m-3">
                <DashboardChart/>
              </Row>
              <Row className="m-3">
                <DashboardTable />
              </Row>
            </Col>
            <Col lg={4} className="m-3">
              <DashboardMessages/>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Main;