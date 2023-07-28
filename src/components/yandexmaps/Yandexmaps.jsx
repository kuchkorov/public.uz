import { FullscreenControl, Map, Placemark, YMaps } from "react-yandex-map";

function Yandexmaps() {
    return (
        <YMaps className="my-5">
                <YMaps >
                    <Map width="100%" height="480px" defaultState={{
                        center: [41.321926, 69.249823],
                        zoom: 14,
                        controls: []
                    }}>
                        <Placemark geometry={[41.321926, 69.249823]} />
                        <FullscreenControl option={{ float: "left"}} />
                    </Map>
                </YMaps>
        </YMaps>
    )
}

export default Yandexmaps