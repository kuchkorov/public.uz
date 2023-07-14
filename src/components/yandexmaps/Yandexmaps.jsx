import { FullscreenControl, Map, Placemark, YMaps } from "react-yandex-map";

function Yandexmaps() {
    return (
        <YMaps className="my-5">
                <YMaps >
                    <Map width="100%" height="480px" defaultState={{
                        center: [41.312258, 69.278212],
                        zoom: 14,
                        controls: []
                    }}>
                        <Placemark geometry={[41.312258, 69.278212]} />
                        <FullscreenControl option={{ float: "left"}} />
                    </Map>
                </YMaps>
        </YMaps>
    )
}

export default Yandexmaps