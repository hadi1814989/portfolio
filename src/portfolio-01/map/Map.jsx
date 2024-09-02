import React from 'react'
import "./map.css"
// import GoogleMapReact from 'google-map-react';
import { Container } from 'react-bootstrap';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
    // const defaultProps = {
    //     center: {
    //       lat: 10.99835602,
    //       lng: 77.01502627
    //     },
    //     zoom: 11
    //   };
  return (
   <>
  <section id='map'>
  <Container>
    <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.7723046866654!2d90.42024737511417!3d23.71982387869128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b84debf7b15b%3A0x965955ad98fc51d5!2sTikatuli%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1725276979550!5m2!1sen!2sbd" width="100%" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
   {/* <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div> */}
   </Container>
  </section>
   </>
  )
}

export default Map


