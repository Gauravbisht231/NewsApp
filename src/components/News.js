import React, { Component } from 'react'
import Newsitem from './Newsitem';
import Spinning from './Spinning';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
    static defaultProps = {
        country: 'in',
        pagesize: 5,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string
    }

    capitalise = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        console.log("hello I am a constructor form news component");
        this.state = {
            articles: [],
            loading: 0,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalise(this.props.category)} - Democrats'`;
    }
    async updatenews() {
        this.props.setprogress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d705998498544ed4adec74096b4a86b7&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,

        })
        this.props.setprogress(100);
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d705998498544ed4adec74096b4a86b7&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })

    }
    handleNextClick = async () => {
        console.log("next click");

        this.setState({ page: this.state.page + 1 });
        this.updatenews()
    }
    handlePrevClick = async () => {
        console.log("previous click")

        this.setState({ page: this.state.page - 1 });
        this.updatenews()
    }

    fetchMoreData = async() => {
        this.setState({ page:this.state.page + 1 })
         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d705998498544ed4adec74096b4a86b7&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        
        let data =  await fetch(url);
        let parsedData =  await data.json()
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults

        })
    };

    render() {

        return (
            <>
                <h1 className='text-center  p-3 mb-2 bg-warning text-dark' style={{ margin: '54px' }}> Democrats' Top Headlines</h1>

                { this.state.loading && <Spinning />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={<h4><Spinning /></h4>}>
                        <div className="container ">
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageurl={element.urlToImage} newsurl={element.url}
                                    author={element.author} date={element.publishedAt} source={element.source.name} />

                            </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>
               
          </>

        )
    }
}

export default News