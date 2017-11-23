import React from 'react';

export default class GoogleMap extends React.Component {

    mapClick(e) {
        let img = e.target;
        let point = {x: e.offsetX,
                    y: e.offsetY};
        let latSize = img.height/180;
        let lonSize = img.width/360;
        let lat, lon;

        console.log(point);

        if(!point.x) {
            point = {x: e.pageX - e.target.offsetLeft,
                    y: e.pageY - e.target.offsetTop};
            
            console.log(point);
        }

        console.log(point);

        lat = (point.y - (img.height/2)) / -latSize;
        lon = (point.x - (img.width/2)) / lonSize;

        console.log(lat, lon);
    };

    render() {

        return (
            <div className="mapcontainer">
                <img src="https://cdn.thinglink.me/api/image/654746090578378753/1240/10/scaletowidth" 
                    onClick={(e) => this.mapClick(e) }/>
            </div>
        );
    }
}
