import { Component, useContext } from "react";
import { CDBContainer } from "cdbreact";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from 'chart.js'
import { UserContext } from "../../context/auth.context";
import axios from "axios";

Chart.register(ArcElement, Tooltip);



class DashboardChart extends Component {

    constructor() {
        super();
        this.state = {
            numberOfProposlas:30,
            pieData: {
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
        };
    }


componentDidMount(){
    const { REACT_APP_API } = process.env
    const { currentUser } = this.props.UserContext
    const { username, token } = currentUser
    axios.get(`${REACT_APP_API}requests/provider/${username}`, { headers: { "Authorization": token } })
        .then(res => res.data)
        .then(data => {
            const status={
                accepted:0,
                pending:0,
                rejected:0,
            }
            this.setState(()=>({numberOfProposlas:data.length}))
            data.map(e=>{
                return (status[e.status]++)
            })
            return status;
        })
        .then(status=>(this.setState(()=>({
            pieData:{...this.state.pieData,
                datasets:[
                    {
                        label: "Proposals",
                        backgroundColor: [
                            "#00ff11",
                            "#a9a9a9",
                            "#ff0000",
                        ],
                        borderWidth: 0,
                        data: [status.accepted, status.pending, status.rejected],
                    },
                ]
            },
        }))))
}

render() {
    const { pieData,numberOfProposlas } = this.state


    return (
        <div className="card-bg w-100 border d-flex flex-column">
            <div className="p-4 d-flex flex-column h-100">
                <div className="d-flex align-items-center justify-content-between">
                    <h4 className="m-0 h5 font-weight-bold text-dark">Proposals</h4>
                    <div className="px-2 py-1 bg-grey rounded-circle"><i className="fas fa-chart-pie"></i></div>
                </div>
                <div className="my-3 d-flex ">
                    <CDBContainer style={{ width: "250px", height: "150px" }} className="p-0">
                        <Pie className="p-1" data={pieData} options={({ responsive: true }, { maintainAspectRatio: false }, { legend: { display: false } })} />
                    </CDBContainer>
                    <div className="text-right w-25">
                        <p className="mb-3">{`No, ${numberOfProposlas}`}</p>
                        <div>
                            <div className="d-flex align-items-center justify-content-between text-success">
                                <span style={{ fontSize: "3em", margin: "-2rem 0px -1.5rem 0px" }}>&#8226;</span>
                                <span className="small">Accepted</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between" style={{ color: "#a9a9a9" }}>
                                <span style={{ fontSize: "3em", margin: "-2rem 0px -1.5rem 0px" }}>&#8226;</span>
                                <span className="small">Pending</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between text-danger">
                                <span style={{ fontSize: "3em", margin: "-2rem 0px -1.5rem 0px" }}>&#8226;</span>
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
    )
}
}

const DashboardChartHooks = (props) => {
    return (
        <DashboardChart
            {...props}
            UserContext={useContext(UserContext)}
        />
    )
}

export default DashboardChartHooks;