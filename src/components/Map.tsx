import {
  Placemark,
  YMaps,
  Map as YaMap,
  ZoomControl,
} from "@pbe/react-yandex-maps";
import React from "react";

export interface MapProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
}

const Map = ({ ...props }: MapProps) => (
  <YMaps>
    <div {...props} className="w-100 h-100">
      <YaMap
        width="100%"
        height="100%"
        defaultState={{ center: [55.928955, 37.768867], zoom: 15 }}
      >
        <Placemark
          geometry={[55.928955, 37.768867]}
          options={{ preset: "islands#redIcon" }}
        />
        <ZoomControl />
      </YaMap>
    </div>
  </YMaps>
);

export default Map;
