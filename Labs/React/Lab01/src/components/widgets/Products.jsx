import React from 'react';



/**stateful component */
export default class Products extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div  className="row-fluid">	
            <div className="span12">
                <div className="widget-head">
                    <div className="heading-buttons">
                        <h3 className="glyphicons gift"><i></i>Products</h3>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <hr className="separator bottom" />
                <div className="widget-body" style={{padding: "10px"}}>

                    <table className="table table-bordered table-condensed table-striped table-primary table-vertical-center checkboxs">
                        <thead>
                            <tr>
                                <th className="center">No.</th>
                                <th className="center">Time</th>
                                <th>Client</th>
                                <th className="center">Phone</th>
                                <th className="center">Amount</th>
                                <th className="center">Heard from</th>
                                <th className="center" style={{width: "90px"}}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="selectable">
                                <td className="center">1</td>
                                <td className="center">11:00</td>
                                <td><strong>Lorem Ipsum</strong><br/><small>Location: Miami</small></td>
                                    <td className="center">0740000000</td>
                                    <td className="center">#30</td>
                                    <td className="center">Friend</td>
                                    <td className="center">
                                        <a href="#" className="btn-action glyphicons eye_open btn-info"><i></i></a>
                                        <a href="#" className="btn-action glyphicons pencil btn-success"><i></i></a>
                                        <a href="#" className="btn-action glyphicons remove_2 btn-danger"><i></i></a>
                                    </td>
						        </tr>
                                <tr className="selectable selected">
                                    <td className="center">2</td>
                                    <td className="center">12:00</td>
                                    <td><strong>Lorem Ipsum</strong><br/><small>Location: Hollywood</small></td>
                                        <td className="center">0740000000</td>
                                        <td className="center">#39</td>
                                        <td className="center">Friend</td>
                                        <td className="center">
                                            <a href="#" className="btn-action glyphicons eye_open btn-info"><i></i></a>
                                            <a href="#" className="btn-action glyphicons pencil btn-success"><i></i></a>
                                            <a href="#" className="btn-action glyphicons remove_2 btn-danger"><i></i></a>
                                        </td>
						        </tr>
                                    <tr className="selectable">
                                        <td className="center">3</td>
                                        <td className="center">13:00</td>
                                        <td><strong>Lorem Ipsum</strong><br/><small>Location: Miami</small></td>
                                            <td className="center">0740000000</td>
                                            <td className="center">31</td>
                                            <td className="center">Google Search</td>
                                            <td className="center">
                                                <a href="#" className="btn-action glyphicons eye_open btn-info"><i></i></a>
                                                <a href="#" className="btn-action glyphicons pencil btn-success"><i></i></a>
                                                <a href="#" className="btn-action glyphicons remove_2 btn-danger"><i></i></a>
                                            </td>
						            </tr>
                                        <tr className="selectable">
                                            <td className="center">4</td>
                                            <td className="center">14:00</td>
                                            <td><strong>Lorem Ipsum</strong><br/><small>Location: Miami</small></td>
                                                <td className="center">0740000000</td>
                                                <td className="center">43</td>
                                                <td className="center">Google Search</td>
                                                <td className="center">
                                                    <a href="#" className="btn-action glyphicons eye_open btn-info"><i></i></a>
                                                    <a href="#" className="btn-action glyphicons pencil btn-success"><i></i></a>
                                                    <a href="#" className="btn-action glyphicons remove_2 btn-danger"><i></i></a>
                                                </td>
						                </tr>
					    </tbody>
				    </table>
				</div>					
		    </div>
            </div>
        );
    }
}
                    
                    
                    
                    
