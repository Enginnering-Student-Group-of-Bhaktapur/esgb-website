import React from "react";


import LimelightMediaFormat from "./LimelightMediaFormat";

import limelightList from "../../data/limelight_data";


function LimelightList() {
  

  const displayLimelightMedia = () => {
    let result = [];

    limelightList.map((limelight) => {
      return result.push(
        <LimelightMediaFormat limelight={limelight} key={limelight.id} />
      );
    });

    return result;
  };

  return <React.Fragment>{displayLimelightMedia()}</React.Fragment>;
}

export default LimelightList;
