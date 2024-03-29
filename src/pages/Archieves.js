import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Archieves = () => {
  return (
    <div>
      {" "}
      <main className="nk-body bg-lighter npc-general has-sidebar">
        <div className="nk-app-root">
          <div className="nk-main ">
            <Sidebar />
            <div className="nk-wrap ">
              <Header />
              <div className="nk-content ">
                <div className="container-fluid">
                  <div className="nk-content-inner">
                    <div className="nk-content-body">
                      <div className="nk-block-head nk-block-head-sm">
                        <div className="nk-block-between">
                          <div className="nk-block-head-content">
                            Manage Your Archieves
                          </div>
                        </div>
                      </div>
                      <div className="nk-block">
                        {/* <div className="row g-gs">
                          <div className="col-sm-6 col-lg-6 col-xxl-6">
                            <div className="card card-bordered">
                              <div className="card-inner">
                                <div className="card-title-group align-start mb-2 justify-content-center">
                                  <div className="card-title">
                                    <h6 className="title">Total Employee</h6>
                                  </div>
                                </div>
                                <div className="align-end flex-sm-wrap g-4 flex-md-nowrap justify-content-center">
                                  <div className="nk-sale-data">
                                    <span className="amount">100</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-lg-6 col-xxl-6">
                            <div className="card card-bordered">
                              <div className="card-inner">
                                <div className="card-title-group align-start mb-2 justify-content-center">
                                  <div className="card-title">
                                    <h6 className="title">
                                      Total Leave Request
                                    </h6>
                                  </div>
                                </div>
                                <div className="align-end flex-sm-wrap g-4 flex-md-nowrap justify-content-center">
                                  <div className="nk-sale-data">
                                    <span className="amount">20</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Archieves;
