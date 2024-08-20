import React from "react";
import { ScheduleLists } from "./ScheduleList";

function Schedule() {
  return (
    <section className="bg-warning">
      <div className="container">
        <div className="row">
          {ScheduleLists.map((item) => {
            return (
              <div className="col-sm-6 col-md-3 py-4" key={item.id}>
                <div className="schedule-holder bg-secondary py-4 rounded">
                  <h2 className="text-white text-center schedule-h2 bg-dark rounded">
                    {item.location}
                  </h2>
                  <p className="text-uppercase text-white text-center">
                    <i class="fa-solid fa-calendar-days me-3 fw-5 text-red"></i>{" "}
                    {item.date}
                  </p>
                  <p className="text-white text-center">
                    <i class="fa-solid fa-clock me-3 text-red"></i> {item.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
