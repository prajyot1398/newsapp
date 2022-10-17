
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    static defaultProps = {
        country : "in",
        category : "general",
        pageSize : 6
    }

    static propTypes = {
        country : PropTypes.string,
        category : PropTypes.string,
        pageSize : PropTypes.number
    }

    constructor(props) {
        super(props)
        //State should be changed using function, similar to useState hook in function based components
        //The class entity which should be changed at run-time that only should be used as state.
        //Props cannot be changed, but state can using props 
        this.state = {
            articles : [
                // {
                //     "source": {
                //         "id": "cbs-news",
                //         "name": "CBS News"
                //     },
                //     "author": "CBS News",
                //     "title": "Politics panel on House Jan. 6 investigation, North Carolina Senate race",
                //     "description": "The January 6th committee has postponed a hearing originally scheduled for Wednesday. The heads of the committee said in an official statement they decided to delay the hearing because of Hurricane Ian. CBS News congressional correspondent Scott MacFarlane an…",
                //     "url": "https://www.cbsnews.com/video/january-6-committee-postpones-hearing-north-carolina-senate-race/",
                //     "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2022/09/28/467880d5-d42c-4375-81f0-4bfc32b379d2/thumbnail/1200x630/33e3488c6d2a43c3f1bbd2e7d2bf97fe/cbsn-fusion-january-6-committee-postpones-hearing-north-carolina-senate-race-thumbnail-1327038-640x360.jpg",
                //     "publishedAt": "2022-09-28T05:19:10+00:00",
                //     "content": "Watch CBS News\r\nCopyright ©2022 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
                // },
                // {
                //     "source": {
                //         "id": "independent",
                //         "name": "Independent"
                //     },
                //     "author": "Liam James",
                //     "title": "Home secretary says police force ‘playing identity politics’ in transgender criminal row",
                //     "description": "Braverman repeats call for ‘focus on catching criminals’ after Twitter storm",
                //     "url": "http://www.independent.co.uk/news/uk/crime/suella-braverman-police-sussex-trans-b2176733.html",
                //     "urlToImage": "https://static.independent.co.uk/2022/09/07/13/cbf2df0cd645cc4bddf2f491870c9f60Y29udGVudHNlYXJjaGFwaSwxNjYyNjM2Mjc1-2.68677294.jpg?quality=75&width=1200&auto=webp",
                //     "publishedAt": "2022-09-27T21:03:55Z",
                //     "content": "The home secretary accused a police force of playing identity politics and denying biology after it said hateful comments about a transgender criminal would not be tolerated.\r\nDays after her plea for… [+2866 chars]"
                // },
                // {
                //     "source": {
                //         "id": "the-irish-times",
                //         "name": "The Irish Times"
                //     },
                //     "author": "Pat Leahy",
                //     "title": "Budget 2023′s three outstanding features, and what they tell us about Irish politics",
                //     "description": "Timely Government response to mounting domestic problems is to unleash a torrent of money",
                //     "url": "https://www.irishtimes.com/opinion/2022/09/28/pat-leahy-coalition-buys-time-and-goodwill-but-winter-looms/",
                //     "urlToImage": "https://www.irishtimes.com/resizer/LPCzuG_U7T-MYk8Dx08aKyfUhNg=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/YY2LXRESNLTKTVCPFBSRD6CHS4.jpg",
                //     "publishedAt": "2022-09-27T20:30:42Z",
                //     "content": "Bonanza, bazooka, baloney call it what you will, this was a remarkable budget.\r\nMinister for Finance Paschal Donohoe and Minister for Public Expenditure Michael McGrath unveiled their much-leaked pac… [+5852 chars]"
                // },
                // {
                //     "source": {
                //         "id": "newsweek",
                //         "name": "Newsweek"
                //     },
                //     "author": "Rabbi Yaakov Menken",
                //     "title": "Newsweek",
                //     "description": "Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.",
                //     "url": "https://www.newsweek.com/",
                //     "urlToImage": "https://d.newsweek.com/en/full/2119646/vladimir-putin-gestures-tv-address.jpg",
                //     "publishedAt": "2022-09-21T13:37:32.6645207Z",
                //     "content": null
                // },
                // {
                //     "source": {
                //         "id": "newsweek",
                //         "name": "Newsweek"
                //     },
                //     "author": "Darragh Roche",
                //     "title": "GOP Expected to Thwart Biden's Plan to Go After 'Dark Money' in Politics",
                //     "description": "The legislation would require the identity of donors who give at least $10,000 to be disclosed but is likely to fail on Wednesday.",
                //     "url": "https://www.newsweek.com/gop-expected-thwart-biden-plan-go-after-dark-money-politics-1744847",
                //     "urlToImage": "https://d.newsweek.com/en/full/2119848/joe-biden-discusses-disclose-act.jpg",
                //     "publishedAt": "2022-09-21T12:05:20Z",
                //     "content": "Senate Republicans look set to thwart President Joe Biden's plan to bring greater transparency to so-called \"dark money\" in U.S. politics in a procedural vote on Wednesday.\r\nBiden has argued in favor… [+2927 chars]"
                // },
                // {
                //     "source": {
                //         "id": "the-washington-times",
                //         "name": "The Washington Times"
                //     },
                //     "author": "The Washington Times https://www.washingtontimes.com",
                //     "title": "Latest Quizzes",
                //     "description": "Take a break from the hard news of the day and enjoy a quiz on entertainment, sports, history and politics only from The Washington Times.",
                //     "url": "https://www.washingtontimes.com/quiz/",
                //     "urlToImage": null,
                //     "publishedAt": "2022-08-30T16:37:43.8583104Z",
                //     "content": "Featured Quizzes\r\nTake the challenge to learn about the life and career highlights of famed nonagenarian actress and comedian Betty White.\r\n Shares \r\nRead our synopsis and correctly identify a litera… [+32510 chars]"
                // },
                // {
                //     "source": {
                //         "id": "the-american-conservative",
                //         "name": "The American Conservative"
                //     },
                //     "author": null,
                //     "title": "Politics Archives - The American Conservative",
                //     "description": null,
                //     "url": "https://www.theamericanconservative.com/category/politics/",
                //     "urlToImage": null,
                //     "publishedAt": "2022-07-07T21:37:27.3936289Z",
                //     "content": null
                // },
                // {
                //     "source": {
                //         "id": "usa-today",
                //         "name": "USA Today"
                //     },
                //     "author": null,
                //     "title": "Daily Briefing",
                //     "description": "The day's top stories, from sports to movies to politics to world events.",
                //     "url": "https://profile.usatoday.com/newsletters/daily-briefing/",
                //     "urlToImage": "https://profile.usatoday.com/newsletters/resources/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg",
                //     "publishedAt": "2021-08-15T15:35:07+00:00",
                //     "content": "The day's top stories, from sports to movies to politics to world events."
                // },
                // {
                //     "source": {
                //         "id": "the-jerusalem-post",
                //         "name": "The Jerusalem Post"
                //     },
                //     "author": null,
                //     "title": "Congresswoman Nita Lowey: I am proud to stand with Israel",
                //     "description": "Gantz: Security of Israel is above politics; PA: This is a crime.",
                //     "url": "https://www.jpost.com/Arab-Israeli-Conflict/Gantz-Security-of-Israel-is-above-politics-Palestinians-This-is-a-crime-607595",
                //     "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/448812",
                //     "publishedAt": "2019-11-13T04:41:00Z",
                //     "content": "US Ambassador David M. Friedman said the US stands “with our friend and ally Israel at this critical moment” on social media on Tuesday after roughly 170 rockets were fired on Israel from the Gaza St… [+6160 chars]"
                // }
            ],
            loading : true, 
            // loading : false,    //For sampleoutput
            page : 1,
            totalNews : 0,
            totalPages : 0
        }

        document.title = `${this.capitalize(this.props.category)} | TillNow - Get Your Daily Dose Of News For Free!`
    }  

    fetchNews = async (page) => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e52a562b601a460d95e1c69f5cb69e2c&page=${page}&pageSize=${this.props.pageSize}`;
        let data  = await fetch(url); 
        let parsedData = await data.json();
        if(parsedData.status === "ok") {
            this.setState({
                articles : this.state.articles.concat(parsedData.articles),
                totalNews : parsedData.totalResults,
                totalPages : Math.ceil(parsedData.totalResults/this.props.pageSize),
                loading : false     
            })
        }
    }    
    
    componentDidMount() {
        console.log("componentDidMount");
        this.fetchNews(this.state.page);
    }

    // Below functions were used when Previous and Next buttons were used, but now replaced with Infinite Scrillbar
    // handlePreviousClick = ()=> {
    //     this.setState({
    //         page : this.state.page - 1,
    //         loading : true
    //     });
    //     this.fetchNews(this.state.page-1);
    // }

    // handleNextClick = ()=> {
    //     this.setState({ 
    //         page : this.state.page + 1,
    //         loading : true
    //     });
    //     this.fetchNews(this.state.page+1);
    // }

    //For InfiniteScrllbar
    fetchMoreData = () => {
        this.setState({ 
            page : this.state.page + 1,
        });
        this.fetchNews(this.state.page+1);
    }
    
    capitalize = (title)=> {
        return title.charAt(0).toUpperCase() + title.substring(1)
    }  

  render() {
    console.log("render");
    return (
      <>
        <h3 className='text-center' style={{margin : "35px"}}>Top Headlines - {this.capitalize(this.props.category)}.</h3>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalNews }
          loader={<Spinner/>}
        >
            <div className='container my-3'>
            {<div className="row row-cols-1 row-cols-md-3 g-5">
                {this.state.articles.map((element)=>{
                    
                    return (
                        //map() emphasize to return key attribute with unique key for each return element.
                        <div className="col" key={element.url} >
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
            </div>
        </InfiniteScroll>
        
        {// Below section was used when Previous and Next buttons were used, but now replaced with Infinite Scrillbar
        /* <div className="d-flex justify-content-between my-4">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-outline-primary" onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button disabled={(this.state.page + 1) > (Math.ceil(this.state.totalNews/this.props.pageSize))}  id="nextBtn" type="button" className="btn btn-outline-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </>
    )
  }
}

export default News
