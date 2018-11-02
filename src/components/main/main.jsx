import React, {Component} from 'react';
import LaobanInfo from '../laoban-info';
import DashenInfo from '../dashen-info'
class Main extends Component {
  render () {
    return (
      <div>
        <LaobanInfo/>
        <DashenInfo />
      </div>
    )
  }
}

export default Main;