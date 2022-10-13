
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        country : "in",
        category : "general",
        pageSize : 9
    }

    static propTypes = {
        country : PropTypes.string,
        category : PropTypes.string,
        pageSize : PropTypes.number
    }

    constructor() {
        super()
        //State should be changed using function, similar to useState hook in function based components
        //The class entity which should be changed at run-time that only should be used as state.
        //Props cannot be changed, but state can using props 
        this.state = {
            articles : [],
            loading : true,
            page : 1,
            totalNews : 0,
            totalPages : 0
        }
    }  

    fetchNews = async (page) => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=57c52ee9b1c44ed1926324b62de9129e&page=${page}&pageSize=${this.props.pageSize}`;
        let data  = await fetch(url); 
        let parsedData = await data.json();
        if(parsedData.status === "ok") {
            this.setState({
                articles : parsedData.articles,
                totalNews : parsedData.totalResults,
                totalPages : Math.ceil(parsedData.totalResults/this.props.pageSize),
                loading : false     
            })
        }
    }    
    
    componentDidMount() {
        this.fetchNews(this.state.page);
    }

    handlePreviousClick = ()=> {
        this.setState({
            page : this.state.page - 1,
            loading : true
        })
        this.fetchNews(this.state.page-1);
    }

    handleNextClick = ()=> {

        this.setState({ 
            page : this.state.page + 1,
            loading : true
        })
        this.fetchNews(this.state.page+1);
    }


  render() {
    
    return (
      <div className='container my-3'>
        <h3 className='text-center' style={{margin : "35px"}}>Top Headlines - {this.props.category.charAt(0).toUpperCase() + this.props.category.substring(1)}.</h3>
        {this.state.loading && <Spinner/>}
        {!this.state.loading && <div className="container row mx-auto">
            {this.state.articles.map((element)=>{
                
                return (
                    //map() emphasize to return key attribute with unique key for each return element.
                    <div className="col-md-4" key={element.url} >
                        <NewsItem title={element.title} 
                        description={element.description}
                        urlToImage={element.urlToImage}
                        source={element.source}
                        author={element.author}
                        url={element.url}
                        publishedAt={element.publishedAt}
                        content={element.content}
                        />
                        </div>
                )
            })}
        </div>}
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-outline-primary" onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button disabled={(this.state.page + 1) > (Math.ceil(this.state.totalNews/this.props.pageSize))}  id="nextBtn" type="button" className="btn btn-outline-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
