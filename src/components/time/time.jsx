import React, {Component} from 'react'
import {Card} from 'reactstrap';
import Moment from 'react-moment'
import moment from 'moment'


import './time.css'

class Time extends Component{

    state = {
        date: moment()
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({date : moment()})
        }, 1000);

    }

    componentWillUnmount(){
        this.interval = clearInterval()
    }


    render(){
        const {date} = this.state
            
        return(
            <Card className = 'time'>
                <Moment>{date}</Moment>
            </Card>
        )
    }
}

export default Time