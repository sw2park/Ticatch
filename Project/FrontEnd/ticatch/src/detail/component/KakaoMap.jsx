import { useEffect } from "react";
import { Map } from "react-kakao-maps-sdk";

const { kakao } = window;

export default function KakaoMap() {

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
    }, [])

    return(
        // <Map
        //     center={{ lat: 33.450701, lng: 126.570667}} 
        //     style={{ width: '100%', height: '648px' }}
        //     level={3} // 지도 확대, 축소 정도
        // />
        <div id="map" style={{
            width: '100%',
            height: '648px'
        }}></div>
    );
}