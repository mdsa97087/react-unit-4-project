import React from "react";
import Navbar from "../Navbar/Navbar";
import "./style/Product.css";

function Product() {
  return (
    <div>
      <Navbar />

      <div className="productbigdiv">
        <div className="Scrolldiv">Drop Down Scroll</div>

        <div className="imgdivsame">
          <div className="same1">
            <div className="samefirst">
              <div className="imgback">
                <h3>Content Calender </h3>
              </div>
            </div>
            <div className="samefirst1">
            <div className="imgback1">
              <h3>Project Tracker</h3>
              </div>
            </div>
            <div className="samefirst2">
            <div className="imgback2">
              <h3>Marketing Tracking</h3>
              </div>
            </div>
          </div>
          <div className="same2">
            <div className="samesecond">
              <h4>Product Teams</h4>
            </div>
            <div className="samesecond">
              <h4>Product Catalog</h4>
            </div>
            <div className="samesecond">
              <h4>Product Launch</h4>
            </div>
            <div className="samesecond">
              <h4>Bug Tracker</h4>
            </div>
          </div>
          <div className="same2">
            <div className="samesecond">
              <h4>Event Planning</h4>
            </div>
            <div className="samesecond">
              <h4>User Reserch</h4>
            </div>
            <div className="samesecond">
              <h4>Simple Applicant</h4>
            </div>
            <div className="samesecond">
              <h4>Digital Video</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
