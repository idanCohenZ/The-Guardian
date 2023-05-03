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
      <div class="container">
        <div class="row row-container">
          <div class="col-lg-2 col-sm-4">
            <div class="circle-tile ">
              <div class="circle-tile-heading dark-blue">
                <i class="fa fa-users fa-fw fa-3x"></i>
              </div>

              <div class="circle-tile-content dark-blue posts-number">
                <div class="circle-tile-description text-faded"> Posts</div>
                <div class="circle-tile-number text-faded ">
                  {analyzed_data.posts}
                </div>
                {/* <div class="circle-tile-footer">
                  More Info <i class="fa fa-chevron-circle-right"></i>
                </div> */}
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-sm-4">
            <div class="circle-tile ">
              <div class="circle-tile-heading red">
                <i class="fa fa-users fa-fw fa-3x"></i>
              </div>
              <div class="circle-tile-content red">
                <div class="circle-tile-description text-faded">RELATIVES</div>
                <div class="circle-tile-number text-faded ">
                  {analyzed_data.relatives.length}
                </div>
                <div className="circle-tile-footer">
                  <Link to="/face-detection" className="statistics-link">
                    More Info <i class="fa fa-chevron-circle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-sm-4">
            <div class="circle-tile ">
              <div class="circle-tile-heading orange">
                <i class="fa fa-users fa-fw fa-3x"></i>
              </div>

              <div class="circle-tile-content orange">
                <div class="circle-tile-description text-faded"> LOCATIONS</div>
                <div class="circle-tile-number text-faded ">
                  {analyzed_data.locations.length}
                </div>
                <div class="circle-tile-footer">
                  More Info <i class="fa fa-chevron-circle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-sm-4">
            <div class="circle-tile ">
              <div class="circle-tile-heading purple">
                <i class="fa fa-users fa-fw fa-3x"></i>
              </div>

              <div class="circle-tile-content purple">
                <div class="circle-tile-description text-faded">
                  {" "}
                  ACTIVITIES
                </div>
                <div class="circle-tile-number text-faded ">
                  {analyzed_data.activities.length}
                </div>
                <div class="circle-tile-footer">
                  More Info <i class="fa fa-chevron-circle-right"></i>
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
