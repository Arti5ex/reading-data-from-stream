import React from 'react'
import { connect } from 'react-redux'
// import DataRow from './DataRow'
// import RightBar from './RightBar'

import * as data from '../actions/dataActions'

class Main extends React.Component {
  async componentWillMount () {
    // await this.props.dispatch(data.fetchData())
  }

  render () {
    let dataResult

    if (this.props.data.length) {
      dataResult = this.props.data.map((item, index) => {
        console.log(item);
        return item.name//<DataRow data={item} key={index}/>
      })

    } else {
      dataResult = 'No result'
    }
 
    return (
      <div className="container">
        <div className="search-result">
            {dataResult}
        </div>
        <div className="clear"></div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  // console.log(store)
  return {
    data: store.data.data
    // selectCategory: store.category.selectCategory,
  }
}

export default connect(mapStateToProps)(Main)
