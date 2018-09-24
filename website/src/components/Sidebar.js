import React, { Component } from 'react';
import '../assets/css/table.css';

export default class Sidebar extends Component {
	render() {
		return (
			<div className="d-none d-sm-none d-lg-block col-xl-2 bd-toc">
				<div className="table-responsive">
					<table>
						<thead>
							<tr>
								<th className="texto">Items</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>ola mundo</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
