import React, { useEffect } from "react";
import "../css/search.css";
const { kakao } = window;

const Kakaomap = ({ chargingStations }) => {
  const lat = chargingStations[0].lat;
  const longi = chargingStations[0].longi;

  const convertInfo = (cpStat) => {
    switch (cpStat) {
      case "1":
        return {
          image: "../../image/chargeO.png",
          status: "충전가능",
          color: "green",
        };
      case "2":
        return {
          image: "../../image/charging.png",
          status: "충전중",
          color: "orange",
        };
      case "3":
        return {
          image: "../../image/chargeX.png",
          status: "고장/점검",
          color: "red",
        };
      case "4":
        return {
          image: "../../image/chargeX.png",
          status: "통신장애",
          color: "red",
        };
      case "5":
        return {
          image: "../../image/chargeX.png",
          status: "통신미연결",
          color: "red",
        };
      default:
        return "";
    }
  };

  useEffect(() => {
    var mapContainer = document.getElementById("Mymap"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 5, // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    function setCenter() {
      // 이동할 위도 경도 위치를 생성합니다
      var moveLatLon = new kakao.maps.LatLng(lat, longi);

      // 지도 중심을 이동 시킵니다
      map.setCenter(moveLatLon);
    }

    const createMarker = () => {
      chargingStations.forEach((e) => {
        const curImage = convertInfo(e.cpStat);
        var imageSrc = curImage.image, // 마커이미지의 주소입니다
          imageSize = new kakao.maps.Size(35, 45), // 마커이미지의 크기입니다
          imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다

        var markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption,
        );

        const markers = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(e.lat, e.longi),
          image: markerImage,
        });
      });
    };

    const createCustom = () => {
      let overlay = [];
      chargingStations.forEach((e) => {
        const curStatus = convertInfo(e.cpStat);
        const content = `<div 
      id="infowindow" 
      style={{ color : ${curStatus.color}}}
      >BRRRRng</div>`;
        overlay = new kakao.maps.CustomOverlay({
          map: map,
          position: new kakao.maps.LatLng(e.lat, e.longi),
          content: content,
          xAnchor: 0,
          yAnchor: -1,
        });
      });

      overlay.setMap(map);
    };

    createMarker();
    createCustom();
    setCenter();
  }, []);

  return (
    <div>
      <div
        id='Mymap'
        style={{
          width: "100vw",
          height: "90vh",
          zIndex: "1",
          borderRadius: "10px",
          border: "2px solid lightgrey",
        }}
      ></div>
    </div>
  );
};

export default Kakaomap;
