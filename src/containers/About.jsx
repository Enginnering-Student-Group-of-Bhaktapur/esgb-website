import React from "react";
import { Helmet } from "react-helmet";

import members from "../data/member_data"

import MemberCard from "../components/About/MemberCard";
import Map from "../components/About/Map";

function About() {
  const displayMembers = () => {
    let display = [];
    let result = [];

    members.map((member) => {
      return display.push(<MemberCard member={member} />);
    });

    for (let i = 0; i < members.length; i += 3) {
      result.push(
        <div className="row" key={i}>
          <div className="team_member col-md-4 text-center">{display[i]}</div>
          <div className="team_member col-md-4">
            {display[i + 1] ? display[i + 1] : null}
          </div>
          <div className="team_member col-md-4">
            {display[i + 2] ? display[i + 2] : null}
          </div>
        </div>
      );
    }

    if (members.length === 0) {
      return <div>No Executive Members</div>;
    } else {
      return result;
    }
  };

  return (
    <React.Fragment>
      <section>
        <div className="container py-5">
          <div id="team">
            <div className="row">
              <div className="col-md-12">
                <h2 className="text-center py-3">20th Executive Committee</h2>
              </div>
            </div>

            {displayMembers()}
          </div>
        </div>
      </section>

      <Map />
      {/* end of contact us section  */}
    </React.Fragment>
  );
}

export default About;
