import React from 'react';
import Vehicle from './Vehicle';

export default function VehicleList(props) {
  return (
    <>
      <h2>Traffic</h2><div className="traffic">
        {props.vehicles.map((vehicle, i) => 
          <Vehicle key={i} vehicle={vehicle} />)}
      </div>
    </>
  );
}
