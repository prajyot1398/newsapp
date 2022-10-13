import React, { Component } from 'react'

export class NewsItem extends Component {
  
    checkTextLength(text, type) {

        if(text !== null && text !== undefined) {
            const len = text.length
           
            if(type === "title") {
                if(len > 45) {
                    return true;
                }
            }else if(type === "description") {
                if(len > 100) {
                    return true;
                }
            }
        }
        return false;
    }

    render() {

    //Destructuring
    let {title, description, urlToImage, url, source, publishedAt, content} = this.props;

    return (
        // <div className="card my-2" style={{width: '18rem',/* marginRight: '3.2rem', marginLeft: '1.5rem'*/}}>
        <div className="card my-2">
            <img src={urlToImage} className="card-img-top" alt="..." style={{height:"180px"}}/>
            <div className="card-body">
                <h5 className="card-title"><a href={url}>{this.checkTextLength(title, "title") ? title.slice(0,45)+"..." : title}</a></h5>
                <p className="card-text">{ description !== null ? (this.checkTextLength(description, "description") ? description.slice(0,100)+"..." : description) : (this.checkTextLength(content, "description") ? content.slice(0,100)+"..." : content)}</p>
                <a rel="noreferrer" href={url} className="btn btn-sm btn-primary" target={'_blank'}>Read More</a>
            </div>
            {/* <ul className="list-group list-group-flush">
                <li className="list-group-item">{source}</li>
                <li className="list-group-item">{author}</li>
                <li className="list-group-item">A third item</li>
            </ul> */}
            <div className="card-body">
                <h6 className="card-link">{source.name}</h6>
                <h6 className="card-link">{publishedAt}</h6>
            </div>
        </div>
    )
  }
}

export default NewsItem
