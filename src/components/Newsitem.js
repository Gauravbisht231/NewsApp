
import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let { title, description, imageurl, newsurl, author, source, date } = this.props;
    return (
      <div className='my-3'>

        <div className="card bg-dark text-white border">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger " style={{left:'85%' , zindex: '1'}}> {source} </span>
          <img src={!imageurl ? "https://media.istockphoto.com/id/1365692242/photo/mid-adult-man-working-on-his-personal-finance-in-his-jewellery-work-shop.jpg?s=2048x2048&w=is&k=20&c=7OslArk5Bsr2L1LEx01aYyCMGb95gc36KYo6LLFKlAw=" : imageurl} className="card-img-top rounded-circle" alt="..." />
          <div className="card-body ">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}....</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unkown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sn btn-dark">More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem