import React from 'react'
import { connect } from 'react-redux'


const Measurements = (props) => {

  const measurement = function() {
    if (Array.isArray(props.data) && props.data[1] != 'undefined') {
      if (Array.isArray(props.data[1]))
        return <div>[{props.data[1].map((location) => location).join(", ")}]</div>;
      else
        return <div>{props.data[1]}</div>;
    }
  }()

  return (
    <div>
      {measurement}
    </div>
  )
}

export default Measurements;