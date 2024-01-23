import React, {useState, useEffect} from "react";
import { Helmet } from "react-helmet";

import EventDetailFormat from "../../components/Events/EventDetailFormat";
import MediaEvent from "../../components/Events/Media/MediaEvent";

import media_events from "../../data/event";
import { useParams } from 'react-router-dom';


function EventDetail(props) {
  const [event, setEvent] = useState({});
  const slug = useParams().slug;
  console.log("slug :", slug)
  console.log("event",)

  useEffect(() => {
    window.scrollTo(0, 0);  
    for (let i = 0; i < media_events.length; i++){
      if (media_events[i].slug == slug){
        console.log("media events : ", media_events)
        setEvent(media_events[i])
      }
    }
  }, [slug]);

  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="description"
          content="ESGB is an Engineering Student Group of Bhaktapur from Pulchowk Campus."
        />
        <title>{`${event.title}`} - Engineering Students Group of Bhaktapur(ESGB)</title>
      </Helmet>
      <section>
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-8">
              <EventDetailFormat event={event} />
            </div>
            <div className="col-md-4 shadow p-3 event_shadow_bg">
              <MediaEvent />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default EventDetail;
