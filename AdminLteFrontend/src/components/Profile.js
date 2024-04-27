import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideNav from "./SideNav";
function Profile() {
  return (
    <>
      <div>
        <Header />
        <SideNav />
        <div className="wrapper">
          <div className="content-wrapper">
            <div className="col-md-3">
              <div className="card card-primary card-outline">
                <div className="card-body box-profile">
                  <div className="text-center">
                    <img
                      className="profile-user-img img-fluid img-circle"
                      src="../../dist/img/user4-128x128.jpg"
                      alt="User profile picture"
                    />
                  </div>
                  <h3 className="profile-username text-center">
                    Nina Mcintire
                  </h3>
                  <p className="text-muted text-center">Software Engineer</p>
                  <ul className="list-group list-group-unbordered mb-3">
                    <li className="list-group-item">
                      <b>Followers</b> <a className="float-right">1,322</a>
                    </li>
                    <li className="list-group-item">
                      <b>Following</b> <a className="float-right">543</a>
                    </li>
                    <li className="list-group-item">
                      <b>Friends</b> <a className="float-right">13,287</a>
                    </li>
                  </ul>
                  <a href="#" className="btn btn-primary btn-block">
                    <b>Follow</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
}

export default Profile;
