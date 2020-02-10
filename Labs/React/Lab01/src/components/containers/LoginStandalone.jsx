import React from 'react';



/**stateful component */
export default class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="content">
			


		<div  className="innerLR">
		
		
			<div  className="row-fluid">		
			
				<div  className="span4">
				&nbsp;
				</div>
				<div  className="span4">
				
					
					<form  className="form-signin" method="post" action="index.html?lang=en">
						<div  className="widget widget-4">
							<div  className="widget-head">
								<h4  className="heading">Restricted area</h4>
							</div>
						</div>
						<h2  className="glyphicons unlock form-signin-heading"><i></i> Please sign in</h2>
						<div  className="uniformjs">
							<input type="text"  className="input-block-level text" placeholder="Email address"/> 
							<input type="password"  className="input-block-level password" placeholder="Password"/> 
							<label  className="checkbox">
							<div  className="checker" id="uniform-undefined">
								<span><input type="checkbox" value="remember-me" style={{opacity: "0"}}/></span>
							</div>Remember me</label>
						</div>
						<input  className="btn btn-primary" type="submit" value="Sign in" style={{height:"34px", width:"100px"}}/>
					</form>						
						
				
				
				</div>
				<div  className="span4">
					&nbsp;
				</div>
				
			</div>		
		</div>
			
			
		</div>
        );
    }


}
