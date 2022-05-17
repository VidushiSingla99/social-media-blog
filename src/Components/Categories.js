import React from "react";
import { Link } from "react-router-dom";


export default function Categories() {


  return (

    <div>
      <div className="container-fluid">
        <div className="row">
          <div class="card col-4">
            <img
              class="card-img-top"
              src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Food Category</h5>
              <p class="card-text">
                Do you want to know more about food Category? We can direct you
                there!
              </p>
              <Link to="/food" class="btn btn-primary">
                Dig in!
              </Link>
            </div>
          </div>

          <div class="card col-4">
            <img
              class="card-img-top pb-3"
              src="https://content.techgig.com/photo/83600041/what-it-takes-for-technologies-to-go-from-breakthrough-to-big-time.jpg?27767"
              alt="Card image cap"
            />
            <div class="card-body pt-5 mt-5">
              <h5 class="card-title">Technology Category</h5>
              <p class="card-text">
                Do you want to know more about Technology Category? We can direct you
                there!
              </p>
              <Link to="/tech" class="btn btn-primary">
                Wire in!
              </Link>
            </div>
          </div>



          <div class="card col-4">
            <img
              class="card-img-top pb-3"
              src="https://wealthofgeeks.com/wp-content/uploads/2021/11/1242049_HealthyLifestyle_Option2_120721.jpg"
              alt="Card image cap"
            />
            <div class="card-body mt-5 pt-5">
              <h5 class="card-title">Lifestyle Category</h5>
              <p class="card-text">
                Do you want to know more about Lifestyle Category? We can direct you
                there!
              </p>
              <Link to="/lifestyle" class="btn btn-primary">
                Way in!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
