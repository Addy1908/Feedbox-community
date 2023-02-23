import { faEnvelope, faLockOpen, faPhone, faSchool, faSuitcase, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SignupPage = () => {
  return (
    <div className="signup-page">
      <div className="signup-page-img">
        <img src="Images/signIn.png" alt="" />
      </div>
      <div className="signup-page-main">
        <form class="">
          <div class="d-flex flex-row align-items-center mb-4">
            <FontAwesomeIcon style={{'margin' : '10px'}} icon={faUser} />
            <div class="form-outline flex-fill mb-0">
              <input type="text" id="name" class="form-control" placeholder="Your Name" required/>
            </div>
          </div>

          <div class="d-flex flex-row align-items-center mb-4">
            <FontAwesomeIcon style={{'margin' : '10px'}} icon={faEnvelope} />
            <div class="form-outline flex-fill mb-0">
              <input type="email" id="email" class="form-control" placeholder="Your Email" required/>
            </div>
          </div>

          <div class="d-flex flex-row align-items-center mb-4">
            <FontAwesomeIcon style={{'margin' : '10px'}} icon={faLockOpen} />
            <div class="form-outline flex-fill mb-0">
              <input type="password" id="password" class="form-control" placeholder="Your Password" required/>
            </div>
          </div>

          <div class="d-flex flex-row align-items-center mb-4">
            <FontAwesomeIcon style={{'margin' : '10px'}} icon={faPhone} />
            <div class="form-outline flex-fill mb-0">
              <input type="number" id="contactNumber" class="form-control" placeholder="Your Contact Number" required/>
            </div>
          </div>

          <div class="d-flex flex-row align-items-center mb-4">
            <FontAwesomeIcon style={{'margin' : '10px'}}  icon={faSchool} />
            <div class="form-outline flex-fill mb-0">
              <input type="text" id="university" class="form-control" placeholder="Your University" required/>
            </div>
          </div>

          <div class="d-flex flex-row align-items-center mb-4">
            <FontAwesomeIcon style={{'margin' : '10px'}}  icon={faSuitcase} />
            <div class="form-outline flex-fill mb-0">
              <input type="text" id="job" class="form-control" placeholder="Your Designation" required/>
            </div>
          </div>

          {/* <div class="form-check d-flex justify-content-center mb-5">
            <input
              class="form-check-input me-2"
              type="checkbox"
              value=""
              id="form2Example3c"
            />
            <label class="form-check-label" for="form2Example3">
              I agree all statements in <a href="#!">Terms of service</a>
            </label>
          </div> */}

          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <button type="submit" class="btn btn-primary btn-lg">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
