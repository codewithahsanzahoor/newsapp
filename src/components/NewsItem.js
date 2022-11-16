import React, { Component } from 'react';
import './css/All.css';
export class NewsItem extends Component {
	render() {
		let { title, description, imageUrl, newsUrl } = this.props;
		return (
			<div className="mx-2 my-2">
				<div className="card" style={{ width: '18rem' }}>
					<img
						src={
							imageUrl == null
								? 'https://cdn.arstechnica.net/wp-content/uploads/2022/11/installed_modchip-760x380.jpg'
								: imageUrl
						}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body customColorBackground">
						<h5 className="card-title">{title}</h5>
						<p className="card-text">{description}</p>
						<a
							href={newsUrl}
							className="btn btn-dark btn-sm"
							target="_blank"
							rel="noreferrer"
						>
							ReadMore
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default NewsItem;
