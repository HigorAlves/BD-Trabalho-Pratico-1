import React, { Component } from 'react';
import '../assets/css/post.css';
import { NEWSPAPER } from '../lib/fontAwesome';

export default class Posts extends Component {
	render() {
		return (
			<section>
				<h4>Artigos recentes</h4>
				<section>
					<NEWSPAPER />
					<h5>Titulo do artigo deve aparecer aqui</h5>
					<h6>pessoas que participaram do artigo aqui</h6>
					<p className="limit-text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
						rem odit quis quaerat. In dolorem praesentium velit ea esse
						consequuntur cum fugit sequi voluptas ut possimus voluptatibus
						deserunt nisi eveniet!Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Dolorem voluptates vel dolorum autem ex
						repudiandae iste quasi. Minima explicabo qui necessitatibus porro
						nihil aliquid deleniti ullam repudiandae dolores corrupti eaque.
					</p>
				</section>
			</section>
		);
	}
}
