import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


function EventGallery({ event_images }) {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  const displayImage = () => {
    let result = [];

    event_images.map((image_url) => {
      return result.push(
        <a href={image_url} key={image_url}>
          <img alt="sub event images" src={image_url} style={{width : 300, height : "auto", margin:"10px"}}/>
        </a>
      );
    });

    return result;
  };

  return (
    <div className="App" style={{display:'flex' , justifyContent: "center", flexWrap:"wrap"}} >
      <LightGallery onInit={onInit} speed={500}>
        {displayImage()}
      </LightGallery>
    </div>
  );
}

export default EventGallery;
