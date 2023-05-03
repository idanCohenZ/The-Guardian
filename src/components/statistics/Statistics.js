import { Link } from "react-router-dom";
import "./Statistics.css";

function Statistics(props) {
  const analyzed_data = props.data;
  return (
    <>
      <img
        className="stat-img"
        src="/images/security-statistics.jpg"
        alt="security-statistics"
      />
      <div className="container">
        <div className="row row-container">
          <div className="col-lg-2 col-sm-4">
            <div className="circle-tile ">
              <div className="circle-tile-heading dark-blue">
                <i className="fa fa-users fa-fw fa-3x"></i>
              </div>

              <div className="circle-tile-content dark-blue posts-number">
                <div className="circle-tile-description text-faded"> Posts</div>
                <div className="circle-tile-number text-faded ">
                  {analyzed_data.posts}
                </div>
                {/* <div className="circle-tile-footer">
                  More Info <i className="fa fa-chevron-circle-right"></i>
                </div> */}
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="circle-tile ">
              <div className="circle-tile-heading red">
                <i className="fa fa-users fa-fw fa-3x"></i>
              </div>
              <div className="circle-tile-content red">
                <div className="circle-tile-description text-faded">
                  RELATIVES
                </div>
                <div className="circle-tile-number text-faded ">
                  {analyzed_data.relatives.length}
                </div>
                <div className="circle-tile-footer">
                  <Link to="/result/face-detection" className="statistics-link">
                    More Info <i className="fa fa-chevron-circle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="circle-tile ">
              <div className="circle-tile-heading orange">
                <i className="fa fa-users fa-fw fa-3x"></i>
              </div>

              <div className="circle-tile-content orange">
                <div className="circle-tile-description text-faded">
                  {" "}
                  LOCATIONS
                </div>
                <div className="circle-tile-number text-faded ">
                  {analyzed_data.locations.length}
                </div>
                <div className="circle-tile-footer">
                  More Info <i className="fa fa-chevron-circle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="circle-tile ">
              <div className="circle-tile-heading purple">
                <i className="fa fa-users fa-fw fa-3x"></i>
              </div>

              <div className="circle-tile-content purple">
                <div className="circle-tile-description text-faded">
                  {" "}
                  ACTIVITIES
                </div>
                <div className="circle-tile-number text-faded ">
                  {analyzed_data.activities.length}
                </div>
                <div className="circle-tile-footer">
                  More Info <i className="fa fa-chevron-circle-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
