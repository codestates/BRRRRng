import React, { useState, useEffect } from "react";
const APP_KEY = "0772f8af10f44f88c04f91a27955a812";

const Kakaomap = ({ chargerStations }) => {
  const [map, setMap] = useState(null);
  const [markerArr, setMarkerArr] = useState([]);

  const createMap = () => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${APP_KEY}&autoload=false`;
    document.head.appendChild(script);
    script.onload = () => {
      const { kakao } = window;
      kakao.maps.load(() => {
        let container = document.getElementById("Mymap");
        let options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 7,
        };
        const createdMap = new kakao.maps.Map(container, options);
        setMap(createdMap);
      });
    };
  };

  const createMarker = () => {
    const { kakao } = window;
    const tempArr = [];
    var imageSrc = "../../image/pin.png", // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(35, 35), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    chargerStations.forEach((e) => {
      tempArr.push(
        new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(e.lat, e.longi),
          image: markerImage,
        })
      );
    });
    setMarkerArr(tempArr);
  };

  useEffect(() => {
    createMap();
  }, []);

  // marker 생성 + 표시
  useEffect(
    () => map && chargerStations.length && createMarker(),
    [map, chargerStations]
  );

  return (
    <div className="map">
      <div
        id="Mymap"
        style={{
          width: "100%",
          height: "100%",
          zIndex: "1",
          borderRadius: "10px",
          border: "2px solid lightgrey",
        }}
      ></div>
    </div>
  );
};

export default Kakaomap;
