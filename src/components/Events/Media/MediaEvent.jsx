import React from "react";

import MediaEventFormat from "./MediaEventFormat";
import mediaEvents from "../../../data/event";

function MediaEvent() {
  const displayMediaEvent = () => {
    let result = [];
    const sortedMediaEvents = mediaEvents.sort(
      (event1, event2) =>
        new Date(event2.date_of_event.split(" to ")[0]) -
        new Date(event1.date_of_event.split(" to ")[0])
    );

    sortedMediaEvents.map((mediaEvent) => {
      return result.push(
        <MediaEventFormat mediaEvent={mediaEvent} key={mediaEvent.id} />
      );
    });

    return result;
  };

  return <React.Fragment>{displayMediaEvent()}</React.Fragment>;
}

export default MediaEvent;
