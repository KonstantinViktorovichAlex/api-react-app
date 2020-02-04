import React,{Component} from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardText, Spinner } from 'reactstrap'

import './postItem.css'

class PostItem extends Component {

    render(){

        const {posts} = this.props

        if(!posts) {
            return (
                <div className = 'spinner'>
                    <Spinner style={{ width: '7rem', height: '7rem' }} type="grow" color = "secondary" className = 'spin'/>
                </div>
            )
        }

        const post = Object.keys(posts).map((item) => {
            return (
                <Card key = {posts[item].id}>
                <CardHeader>user id {posts[item].id}</CardHeader>
                    <CardBody>
                        <CardTitle>user title : {posts[item].title}</CardTitle>
                        <CardText className ='text'>{posts[item].body}</CardText>
                    </CardBody>
                </Card>
            )
        })

        return(
            <div className = 'postItem'>
                {post}
            </div>
        )
    }
}
export default PostItem