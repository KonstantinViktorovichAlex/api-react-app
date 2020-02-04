import React, {Component} from 'react'
import {Card, CardImg, CardBody,CardTitle, CardSubtitle} from 'reactstrap';

import userImg from '../../assets/user.png'
import service from '../../services/service'
import './infoUser.css'

class InfoUser extends Component {

    service = new service()

    state = {
        user : null
    }

    componentDidMount() {
        this.onUpdateUser()
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.selectId !== prevProps.selectId){
            this.onUpdateUser()
        }
    }

    onUpdateUser = (props) => {
        const {selectId} = this.props
        if(!selectId) {
            return 
        }

        this.service.getUserId(selectId)
            .then(user => {
                this.setState({
                    user:user
                })
            })
    }

    render(){

        const {user} = this.state

        return(
            <div className = 'infoCard'>
                <Card className = 'myCard'>
                    <CardImg src={userImg} alt="user logo" className = 'userLogo'/>
                <CardBody className = 'cardInfo'>
                    {user ? viewContent(user) : <span className = 'selectUser'>Select user</span>}
                </CardBody>
                </Card>
            </div>
        )
    }
}
export default InfoUser

const  viewContent = (user) => {
    return (
        <>
            <CardTitle>name: {user.username}</CardTitle>
            <CardSubtitle>login: {user.name}</CardSubtitle>
            <CardSubtitle>email: {user.email}</CardSubtitle>
            <CardSubtitle>phone: {user.phone}</CardSubtitle>
            <CardSubtitle>website: {user.website}</CardSubtitle>
        </>
    )
}