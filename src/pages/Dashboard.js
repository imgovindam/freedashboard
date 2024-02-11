import Sidebar from "../components/Sidebar.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";
const Dashboard = () => {
  const ChartSection = ({ id, options, series, type, height, width }) => (
    <div className="col-md-4">
      <div id={id}>
        <ReactApexChart
          options={options}
          series={series}
          type={type}
          height={height}
          width={width}
        />
      </div>
    </div>
  );

  const TableRow = ({
    totalValue,
    percentage,
    chartId,
    options,
    series,
    type,
    height,
    width,
  }) => (
    <tr>
      <td>{totalValue}</td>
      <td>{percentage}</td>
      <td>
        <div id={chartId}>
          <ReactApexChart
            options={options}
            series={series}
            type={type}
            height={height}
            width={width}
          />
        </div>
      </td>
    </tr>
  );

  const [state] = useState({
    options: {
      // ... (your options configuration)
    },
    series: [
      {
        data: [
          /* ... */
        ],
      },
    ],
    optionsSpark2: {
      // ... (options for spark2)
    },
    seriesSpark2: [
      {
        data: [
          /* ... */
        ],
      },
    ],
    optionsSpark3: {
      // ... (options for spark3)
    },
    seriesSpark3: [
      {
        data: [
          /* ... */
        ],
      },
    ],
    options1: {
      // ... (options for chart-1)
    },
    series1: [
      {
        data: [
          /* ... */
        ],
      },
    ],
    // ... add options and series for other charts
  });
  return (
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
                          <h3 className="nk-block-title page-title">
                            Dashboard
                          </h3>
                          <div className="nk-block-des text-soft">
                            <p>Welcome to 70D Tech | Hr-Portal Dashboard.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nk-block ">
                      <div className="row g-gs">
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
                        <div className="col-sm-6  col-lg-6 col-xxl-6">
                          <div className="card card-bordered">
                            <div className="card-inner">
                              <div className="card-title-group align-start mb-2 justify-content-center">
                                <div className="card-title">
                                  <h6 className="title">Total Leave Request</h6>
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
                      </div>
                      <div className="row g-gs mt-4 ">
                        <div>
                          <div>
                            <div className="row g-0">
                              <ChartSection
                                id="chart-spark1"
                                options={state.options}
                                series={state.series}
                                type="area"
                                height={160}
                              />
                              <ChartSection
                                id="chart-spark2"
                                options={state.optionsSpark2}
                                series={state.seriesSpark2}
                                type="area"
                                height={160}
                              />
                              <ChartSection
                                id="chart-spark3"
                                options={state.optionsSpark3}
                                series={state.seriesSpark3}
                                type="area"
                                height={160}
                              />
                            </div>

                            <div className="row g-0 ">
                              <table>
                                <thead>
                                  <tr>
                                    <th>Total Value</th>
                                    <th>Percentage of Portfolio</th>
                                    <th>Last 10 days</th>
                                    <th>Volume</th>
                                  </tr>
                                </thead>
                                <tbody className="">
                                  <TableRow
                                    totalValue="$32,554"
                                    percentage="15%"
                                    chartId="chart-1"
                                    options={state.options1}
                                    series={state.series1}
                                    type="line"
                                    // height={100}
                                    width={240}
                                  />
                                  <thead>
                                    <tr>
                                      <th>Total Value</th>
                                      <th>Percentage of Portfolio</th>
                                      <th>Last 10 days</th>
                                      <th>Volume</th>
                                    </tr>
                                  </thead>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div id="html-dist"></div>
                        </div>
                      </div>
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
  );
};
export default Dashboard;
