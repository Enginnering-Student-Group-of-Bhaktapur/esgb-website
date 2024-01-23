import React from "react";

import MediaEventFormat from "./MediaEventFormat";
import mediaEvents from "../../../data/event";

function MediaEvent() {

  const displayMediaEvent = () => {
    let result = [];

    mediaEvents.map((mediaEvent) => {
      return result.push(
        <MediaEventFormat mediaEvent={mediaEvent} key={mediaEvent.id} />
      );
    });

    return result;
  };

  return (
    <React.Fragment>
      {displayMediaEvent()}
    </React.Fragment>
  );
}

export default MediaEvent;
