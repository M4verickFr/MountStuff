import React, { Component } from 'react'
import Leaflet from 'leaflet';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";

import '../style/contact.css';
import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

Leaflet.Icon.Default.imagePath =
'../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

let DefaultIcon = Leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [24,36],
  iconAnchor: [12, 36]
});

Leaflet.Marker.prototype.options.icon = DefaultIcon;

const position = [45.919479099125724, 6.157756669945492]
const zoom = 11;

const Contact = () => (
  <div id="contact">
    <div id="img-container"><img src={"/assets/hcl_bg.png"} /></div>
    <section id="contact-container">
      <div id="info-container">
        <h1>Contacts</h1>
        <h3>+336 06 06 06 06</h3>
        <p>contact@mountstuff.com</p>
        <p>25 Avenue de la Montagne, 74000 Annecy</p>
      </div>
      <div id="map-container">
      <LeafletMap center={position} zoom={zoom} style={{height : '100%', width : '100%'}}>
        <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
        <Popup>
            Son Konum
        </Popup>
        </Marker>
      </LeafletMap>
      </div>
    </section>
  </div>
);



export default Contact;