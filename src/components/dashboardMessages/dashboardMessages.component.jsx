import { Component } from "react";

class DashboardMessages extends Component{

    render(){

        return(
            <div className="card-bg h-100 w-100 border d-flex flex-column p-4">
                <div className="d-flex">
                  <h6 className="h5 font-weight-bold text-dark">Messages</h6>
                  <div className="ml-auto rounded-circle bg-grey px-2 py-1"><i className="fas fa-comment-alt"></i></div>
                </div>
                <div className="d-flex justify-content-around mt-4">
                  <img alt="panelImage" src="https://robohash.org/fatma?set=set4&size=64x64" className="pane-image me-4" />
                  <div>
                    <h6 className="mb-0" style={{ fontWeight: "600" }}>Mezue</h6>
                    <p className="m-0 small">Hey, how are you.</p>
                  </div>
                  <p style={{ fontSize: "0.5em" }} className="px-2 d-flex align-items-center text-muted">
                    <i className="fas fa-circle mr-1" style={{ fontSize: "0.8em" }}></i>
                    <span style={{ fontSize: "1.4em" }}>Online</span>
                  </p>
                </div>
                <div className="d-flex justify-content-around mt-4">
                  <img alt="panelImage" src="https://robohash.org/fatma?set=set4&size=64x64" className="pane-image me-4" />
                  <div>
                    <h6 className="mb-0" style={{ fontWeight: "600" }}>Mezue</h6>
                    <p className="m-0 small">Hey, how are you.</p>
                  </div>
                  <p style={{ fontSize: "0.5em" }} className="px-2 d-flex align-items-center text-muted">
                    <i className="fas fa-circle mr-1" style={{ fontSize: "0.8em" }}></i>
                    <span style={{ fontSize: "1.4em" }}>Online</span>
                  </p>
                </div>
                <div className="d-flex justify-content-around mt-4">
                  <img alt="panelImage" src="https://robohash.org/fatma?set=set4&size=64x64" className="pane-image me-4" />
                  <div>
                    <h6 className="mb-0" style={{ fontWeight: "600" }}>Mezue</h6>
                    <p className="m-0 small">Hey, how are you.</p>
                  </div>
                  <p style={{ fontSize: "0.5em" }} className="px-2 d-flex align-items-center text-muted">
                    <i className="fas fa-circle mr-1" style={{ fontSize: "0.8em" }}></i>
                    <span style={{ fontSize: "1.4em" }}>Online</span>
                  </p>
                </div>
                <p className="c-p text-dark font-weight-bold text-right mt-auto mb-0">
                  More Details
                  <i className="fas fa-arrow-right ml-1"></i>
                </p>
              </div>
        )
    }
}
export default DashboardMessages;