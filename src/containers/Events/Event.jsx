import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import events_list from "../../data/event";

import FeaturedEvent from "../../components/Events/FeaturedEventFormat";
import MediaEvent from "../../components/Events/Media/MediaEvent";

function Event() {
  const [featuredEvents, setFeaturedEvents] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Filter unique featured events from the current events_list
    const uniqueFeaturedEvents = events_list.filter(
      (event) => event.is_featured
    );

    // Update the state only with the new unique featured events
    setFeaturedEvents(uniqueFeaturedEvents);

  }, [events_list]);

  const displayFeaturedEvent = () => {
    let result = [];

    featuredEvents.map((featuredEvent) => {
      return result.push(
        <FeaturedEvent featuredEvent={featuredEvent} key={featuredEvent.id} />
      );
    });

    return result;
  };

  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="description"
          content="ESGB is an Engineering Student Group of Bhaktapur from Pulchowk Campus."
        />
        <title>Events - Enginnering Student Group of Bhaktapur(ESGB)</title>
      </Helmet>
      <section className="container">
        <div className="row pt-4">
          <div className="col-md-8">{displayFeaturedEvent()}</div>
          <div className="col-md-4 shadow p-3 event_shadow_bg">
            <MediaEvent />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Event;
