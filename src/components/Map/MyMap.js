import React, { useEffect, useState,useRef } from 'react'
import locIcon from './../../imgs/icon-location.svg' 
import './map.css'
import 'leaflet/dist/leaflet.css'
import {MapContainer, TileLayer,Marker} from 'react-leaflet'
import { useGlobalContext } from '../Context'
import L from 'leaflet'


const icon=new L.icon({
    iconUrl:locIcon,
    iconSize:[23,28]
})



export default function MyMap() {
    const {requestState:{data:{location}}}=useGlobalContext();
    const [position,setPosition]=useState([location.lat,location.lng]);
    const mapRef=useRef();
    

    useEffect(()=>{
        setPosition([location.lat,location.lng]);
        
    },[location]);

    useEffect(()=>{
        if(mapRef.current)mapRef.current.flyTo(position,13,true);
        
       
    },[position])
   

   
    return (<MapContainer center={position}
            ref={mapRef}
            zoom={13} 
            zoomControl={false}
            scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=WJRcMJ6aTCspvL5Zbltc"
            />
            <Marker position={position} icon={icon}>

            </Marker>
            {/* <Marker position={position}>
<Popup>
 A pretty CSS3 popup. <br /> Easily customizable.
</Popup>
</Marker> */}
        </MapContainer>


    )
}
