import React, {Component} from 'react'
import { ListGroup, ListGroupItem, Spinner } from 'reactstrap';
import service from '../../services/service'

import './rightPanel.css'

class RightPanel extends Component{

    service = new service()

    state = {
        user : null,
        error: false,
    }

    componentDidMount() {
         this.service.getAllUsers()
            .then((user) => {
                this.setState({
                    user: user
                })
            })
            .catch(this.onError)
            
    }

    renderUsers = (arr) => {
        const className = 'listItem'
        const users = Object.keys(arr).map(item => {
            return <ListGroupItem 
                    className = {className}
                    key = {arr[item].id}
                    onClick = {() => {
                        this.props.selectUser(arr[item].id)
                    }
                    }>{arr[item].name}</ListGroupItem>

        })
        return users
    }

    onError = () => {
        this.setState({
            error:true
        })
    }
    
    render(){
        const {user, error} = this.state
        
        if(!user) {
          return <Spinner style={{ width: '7rem', height: '5rem' }} type="grow" color = "secondary" className = 'spin'/>
        }

        const userName = this.renderUsers(user)
        
        return(
            <ListGroup className = 'list-container'>
                {error ? <div>ошибка загрузки</div> : userName}
            </ListGroup>
        )
    }
}
export default RightPanel;


