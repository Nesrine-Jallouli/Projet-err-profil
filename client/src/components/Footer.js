import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <div className="bg-dark text-light">
			<div className="row text-center text-xs-center">
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5 className="margin-form">Home</h5>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5 className="margin-form">Company</h5>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5 className="margin-form">Jobs</h5>
				</div>
			</div>
			
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul className="list-unstyled list-inline social text-center">
						<li className="list-inline-item"><i className="fa fa-facebook"></i></li>
						<li className="list-inline-item"><i className="fa fa-twitter"></i></li>
						<li className="list-inline-item"><i className="fa fa-instagram"></i></li>
						<li className="list-inline-item"><i className="fa fa-google-plus"></i></li>
						<li className="list-inline-item"><i className="fa fa-envelope"></i></li>
					</ul>
				</div>
				<hr></hr>
			</div>	
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p className="h6">All right Reversed By <strong>Nesrine JALLOULI</strong></p>
				</div>
				<hr></hr>
			</div>	
		</div> 
		
    )
}
