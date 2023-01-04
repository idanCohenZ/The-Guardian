import React from "react";
import "./Statistics.css";

function Statistics() {
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"
      />

      <div class="container">
        <div class="row row-container">
          <div class="col-lg-2 col-sm-4">
            <div class="circle-tile ">
              <div class="circle-tile-heading dark-blue">
                <i class="fa fa-users fa-fw fa-3x"></i>
              </div>

              <div class="circle-tile-content dark-blue">
                <div class="circle-tile-description text-faded"> Posts</div>
                <div class="circle-tile-number text-faded ">265</div>
                <a class="circle-tile-footer" href="#">
                  More Info <i class="fa fa-chevron-circle-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-sm-4">
            <div class="circle-tile ">
              <div class="circle-tile-heading red">
                <i class="fa fa-users fa-fw fa-3x"></i>
              </div>
              <div class="circle-tile-content red">
                <div class="circle-tile-description text-faded">LOCATIONS</div>
                <div class="circle-tile-number text-faded ">10</div>
                <a className="circle-tile-footer" href="#">
                  More Info <i class="fa fa-chevron-circle-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-sm-4">
            <div class="circle-tile ">
              <div class="circle-tile-heading orange">
                <i class="fa fa-users fa-fw fa-3x"></i>
              </div>

              <div class="circle-tile-content orange">
                <div class="circle-tile-description text-faded">
                  {" "}
                  PERSONAL DATA
                </div>
                <div class="circle-tile-number text-faded ">17</div>
                <a class="circle-tile-footer" href="#">
                  More Info <i class="fa fa-chevron-circle-right"></i>
                </a>
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
                <div class="circle-tile-number text-faded ">36</div>
                <a class="circle-tile-footer" href="#">
                  More Info <i class="fa fa-chevron-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
