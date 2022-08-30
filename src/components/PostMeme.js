import React from 'react'
import { Tag } from 'antd'

const PostMeme = ({memes}) => {

    return (
        <>
            { memes.map(item => (
                <div className="col-lg-4 col-md-6" key={item._id}>
                    <div className="card border-0 shadow rounded-3">
                        <img src={item.preview[2]} className="card-img-top" alt={item.title}/>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <a href={`https://www.reddit.com/r/${item.subreddit}`} target='_blank' rel="noreferrer">
                                <Tag color="orange">/{item.subreddit}</Tag>
                            </a>
                            <a href={`https://www.reddit.com/user/${item.author}`} target='_blank' rel="noreferrer">
                                <Tag color="default">
                                    <i className="fas fa-user"></i> {item.author}
                                </Tag>
                            </a>
                            
                            {/* <Link to={`https://www.reddit.com/r/${item.subreddit}`} target='_blank' className="btn btn-sm btn-light rounded">/{item.subreddit}</Link>&nbsp;
                            <Link to={`https://www.reddit.com/user/${item.author}`} target='_blank' className="btn btn-sm btn-light text-muted rounded"><i className="fas fa-user"></i> {item.author}</Link>&nbsp; */}

                            <p className='my-2'>
                                <i className="fas fa-chevron-up"></i> {item.ups}
                            </p>
                            <a href={`${item.postLink}`} className="btn btn-lg btn-primary float-end fw-bold text-white w-50" target='_blank' rel="noreferrer">
                                <i className="fab fa-reddit"></i> Go to post
                            </a>
                    
                            {/* <Link to={`${item.postLink}`} className="btn btn-lg btn-info float-end fw-bold text-white w-50" target='_blank'>
                                <i className="fab fa-reddit"></i> Go to post
                            </Link> */}

                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default PostMeme