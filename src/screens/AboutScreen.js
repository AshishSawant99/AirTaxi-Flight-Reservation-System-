import { Component } from "react";

class AboutScreen extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid about-us">
          <div class="row" >
            <div class="col-sm-3"></div>
            <div class="col-sm-6" className="col-6 align-self-center p-5 rounded">
              <h1 className="log-in-in mb-5">Welcome to Airline Reservation System</h1>
              <p>
              Airline Reservation System aims to automate the flight operations and 
ticketing/seat booking and confirmation sytem of an Airline company. The software is 
providing options for viewing different flights available within a different timings for 
a specific day. That provide customers within facility to able to book ticket smoothly. 
The customers can modify and able to cancel the ticket for any reason. That prepare 
within a role and policies. The software should provide option for checking availability 
of the tickets. That is important for the customers to get message if the ticket 
unavailable. That will be displayed into customers. The customers should be noted 
when the change has been made or any further changes.
              </p>
              <br/>
            </div>
          </div>
          <div class="col-sm-3"></div>
        </div>
      </div>
    );
  }
}

export default AboutScreen;
