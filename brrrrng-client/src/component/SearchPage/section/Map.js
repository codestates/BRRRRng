import React, { useEffect } from "react";
const APP_KEY = "0772f8af10f44f88c04f91a27955a812";

const Map = ({ lat, longi }) => {
 
  const createMap = () => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${APP_KEY}&autoload=false`;
    document.head.appendChild(script);
    script.onload = () => {
      const { kakao } = window;
      kakao.maps.load(() => {
        let container = document.getElementById("map");
        let options = {
          center: new kakao.maps.LatLng(lat, longi),
          level: 3,
        };
        const createdMap = new kakao.maps.Map(container, options);
        
        const markerPosition = new kakao.maps.LatLng(lat, longi)

        const marker = new kakao.maps.Marker({
          position: markerPosition
        });

        marker.setMap(createdMap)
      });
    };
  };
  

  useEffect(() => {
    createMap();
 
  }, []);

  
  return (
    <>
      <div className="map_modal">
        <div id="map" style={{ width: '450px', height: "250px" , borderRadius: "10px", border: "2px solid lightgrey" }}></div>
      </div>
    </>
  );
};

export default Map;
