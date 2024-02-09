import React from "react";
import hike from "../../assets/img/hike/2.jpg"

function AboutMessage() {
  return (
    <section>
      <div className="container pt-4">
        <div className="row">
          <div className="col-md-12 text-center pb-4"></div>
        </div>
        <div className="row py-1">
          <div className="col-md-8 text-justify">
            <h2>About ESGB</h2>
            <p>
              The Engineering Students' Group of Bhaktapur (ESGB) is a student
              organization based in Bhaktapur district, Nepal, comprising
              students studying at the Institute of Engineering (IOE), Pulchowk
              Campus. It was established on February 14, 2002 (2059 B.S.) by a
              group of enthusiastic students with the primary goal of addressing
              transportation challenges faced by Bhaktapurian
              students.Initially, the group's objective was to provide easy
              transportation services for students from Bhaktapur who were
              unable to apply for hostel facilities at Campus, Bhaktapur, due to
              institutional rules. This led to daily commuting challenges, as
              public transportation followed two different routes. To alleviate
              this issue, ESGB collaborated with the campus administration,
              which generously provided two campus buses to facilitate the
              transportation of Bhaktapurian students.
            </p>
            <p>
              Over time, the objectives of ESGB expanded beyond transportation
              services. The group actively engages in organizing various
              student-oriented programs, including training sessions, workshops,
              and competitions. These initiatives aim to contribute to the inner
              and outer development of students' personalities while fostering
              strong bonds among group members and non-members alike. One
              notable annual event organized by ESGB is a blood donation program
              conducted in collaboration with the Nepal Red Cross Society. This
              initiative reflects the group's commitment to social
              responsibility and community service. Other several events like
              Deusi Bhailo, Changa Chet, Ghintang Ghisi, Futsal are also
              organized by the ESGB.
            </p>
            <p>
              Furthermore, ESGB has been publishing an annual technical journal
              titled "The Limelight" since 2004. This publication serves as a
              platform for students to showcase their technical expertise,
              research findings, and innovative ideas. Despite facing challenges
              such as shortened campus semesters, the group has successfully
              published seven volumes of "The Limelight", contributing to the
              dissemination of knowledge and research within the student
              community.
            </p>
          </div>
          <div className="col-md-4">
            <img src={hike} className="img-fluid" alt="hike" style={{marginTop:50}}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMessage;
