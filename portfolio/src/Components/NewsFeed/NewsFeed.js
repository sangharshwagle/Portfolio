import React, { Component } from 'react';
import axios from 'axios';
import classes from './NewsFeed.css';

class NewsFeed extends Component {

    state = {
        news:null
    }


componentDidMount(){
    const url = "https://newsapi.org/v2/top-headlines?sources=bbc-sport&";
    const key = "apiKey=bfef55353a0c4807a85fb2ee04f36936";
    axios.get(url + key)
        .then ((response) => {
            console.log(response)
           let newsHeadline =  response.data.articles.map((current, index)=> {
               return (
                   <div key = {index + 1}>{current.description}</div>
               )
           })
           this.setState({
               news : newsHeadline
           })
        })     
}
    render () {
        return (
           
            <div style = {{backgroundColor: "grey"}} >
                <div>{this.state.news}</div>
             </div>
             
        )
    }

}

export default NewsFeed;