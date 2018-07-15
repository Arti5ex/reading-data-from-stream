import React from 'react'
import { connect } from 'react-redux'
import DataRow from './DataRow'
import * as data from '../actions/dataActions'

class Main extends React.Component {
  async componentWillMount () {
    await this.props.dispatch(data.fetchData())
  }

  render () {
    let dataResult

    if (this.props.data.length) {
      dataResult = this.props.data.map((item, index) => {
        return <DataRow data={item} key={index}/>
      })

    } else {
      dataResult = 'No result'
    }
 
    return (
      <div className="container">
        {dataResult}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    data: store.data.data
  }
}

export default connect(mapStateToProps)(Main)
