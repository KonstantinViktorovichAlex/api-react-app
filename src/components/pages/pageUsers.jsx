import React, {Component} from 'react';

import RightPanel from '../rightPanel/rightPanel.jsx'
import InfoUser from '../infoUser/infoUser.jsx'
import service from '../../services/service.js'

class PageUsers extends Component {

    service = new service()

  state = {
    selectUser: null,
  }

  selectUser = (id) => {
    this.setState({
      selectUser: id,
    })
  }

    render(){
        const {selectUser} = this.state
        return(
            <>
                <RightPanel selectUser = {this.selectUser} />
                <InfoUser selectId = {selectUser}/>
            </>
        )
    }
}
export default PageUsers