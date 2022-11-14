import React, { Component } from 'react';

export class NewsItem extends Component {
	render() {
		let { title, description, imageUrl, newsUrl } = this.props;
		return (
			<div className="mx-2 my-2">
				<div className="card" style={{ width: '18rem' }}>
					<img src={imageUrl} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p className="card-text">{description}</p>
						{/* //TODO: newsUrl should be defined properly */}
						<a href={newsUrl} className="btn btn-primary btn-sm">
							ReadMore
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default NewsItem;
