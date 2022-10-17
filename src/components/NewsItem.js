import React, { Component } from 'react'
import noImage from '../res/no-image.png'

export class NewsItem extends Component {
  
    checkTextLength(text, type) {

        if(text !== null && text !== undefined) {
            const len = text.length
           
            if(type === "title") {
                if(len > 100) {
                    return true;
                }
            }else if(type === "description") {
                if(len > 500) {
                    return true;
                }
            }
        }
        return false;
    }

    render() {

    //Destructuring
    let {title, description, urlToImage, url, source, publishedAt, content, author} = this.props;

    return (
        // <div className="card my-2" style={{width: '18rem',/* marginRight: '3.2rem', marginLeft: '1.5rem'*/}}>
        <div className="card h-100">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex : '1', left:"86%"}}>
                {source.name} 
            </span>
            <img src={urlToImage ? urlToImage : noImage} className="card-img-top" alt="..." style={{height:"250px"}}/>
            <div className="card-body">
                <h5 className="card-title mb-3">
                    {/* <a href={url}>{this.checkTextLength(title, "title") ? title.slice(0,100)+"..." : title}</a> */}
                    <a href={url}>{title}</a>
                </h5>
                <p className="card-text">{ description !== null ? (this.checkTextLength(description, "description") ? description.slice(0,500)+"..." : description) : (this.checkTextLength(content, "description") ? content.slice(0,500)+"..." : content)}</p>
            </div>
            <div className='text-center'>
                <a rel="noreferrer" href={url} className="btn btn-sm btn-primary mb-2" target={'_blank'}>Read More</a>
                <div className="card-footer">
                    <small className='text-muted'>{(author) ? "By "+author : "By Unknown"} {publishedAt ? "At "+new Date(publishedAt).toLocaleString() : ""}</small>
                </div>
            </div>
            {/* <ul className="list-group list-group-flush">
                <li className="list-group-item">{source}</li>
                <li className="list-group-item">{author}</li>
                <li className="list-group-item">A third item</li>
            </ul> */}
        </div>
    )
  }
}

export default NewsItem
