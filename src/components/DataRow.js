import React from 'react'
import Measurements from './Measurements'


const DataRow = (props) => {
  const measurements = props.data.measurements.map((itemM, ids) => {
    return <Measurements data={itemM} key={ids} />
  });

  return (
    <div className="data-row">
      <div className="title">{props.data.name}</div>
      <div>id: {props.data._id}</div>
      <div>
        {measurements}
      </div>
    </div>
  )
}

export default DataRow;