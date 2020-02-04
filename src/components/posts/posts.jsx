import React, {Component} from 'react'

import service from '../../services/service.js'
import PostItem from '../postItem/postItem.jsx'


class AllPosts extends Component {

    service = new service()

    state = {
        posts: null,
        err: null
    }

    componentDidMount(){
        this.service.getAllPosts()
            .then((posts) => {
                this.setState({
                    posts: posts
                })
            }).catch(this.onError)
    }

    onError = (err) => {
        this.setState({
            err:err
        })
    }

    render(){
        
        const {posts} = this.state

        return(
            <div>
                <PostItem posts = {posts}/>
            </div>
        )
    }
} 
export default AllPosts