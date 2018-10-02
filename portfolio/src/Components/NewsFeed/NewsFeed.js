import React, { Component } from 'react';
import axios from 'axios';
import classes from './NewsFeed.css';



class NewsFeed extends Component {

    constructor (props) {
        super (props);
        this.state = {
            news:null,
            count: 0
        }
    }
callingBbcSportsApi = () => {
    const url = "https://newsapi.org/v2/top-headlines?sources=bbc-sport&";
    const key = "apiKey=bfef55353a0c4807a85fb2ee04f36936";
    axios.get(url + key)
        .then ((response) => {
            console.log(response)
           let newsHeadline =  response.data.articles.map((current, index)=> {
               return ( 
                    <div>
                        <li key = {index + 1}
                            style = {{ display: "block",
                            overflown: "hidden"}}>
                            {current.description}
                         </li>
                        </div>
                   )
           })
         
            this.myInterval = setInterval(()=> {
                if (this.state.count < 10){
                    this.setState({
                        news: newsHeadline[this.state.count].props.children,
                        count: this.state.count + 1
                    })
                } else {
                    this.setState({
                        count: 0
                    })
                }
             },3000)
        })     
}
componentDidMount ()  {
    this.callingBbcSportsApi()
}
    render () {  
        return (
                     <div className = {classes.NewsFeedBar}>
                         <ul className = {classes.Lists} >
                            {this.state.news}
                         </ul>
                    </div>  
        )
    }
}
export default NewsFeed;