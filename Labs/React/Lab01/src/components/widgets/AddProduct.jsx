import React from 'react';



/**stateful component */
export default class AddProduct extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div  className="row-fluid">	
            <div className="span12">

                <div className="widget-head">
                    <div className="heading-buttons">
                        <h3 className="glyphicons cart_in"><i></i> Add product</h3>
                        <div className="clearfix"></div>
                    </div>
                </div>

                <hr className="separator bottom" />

                <div className="widget-body" style={{ padding: "10px" }}>
                    <div className="tab-pane active" id="productDescriptionTab">
                        <div className="row-fluid">
                            <div className="span3">
                                <strong>Product</strong>
                                <p className="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="span9">
                                <label for="inputTitle">Name</label>
                                <input type="text" id="inputTitle" className="span6" value="" placeholder="Enter Name ..." />
                                <div className="separator"></div>

                                <label for="inputTitle">Brand</label>
                                <input type="text" id="inputTitle" className="span6" value="" placeholder="Enter Brand ..." />
                                <div className="separator"></div>

                                <label for="inputTitle">Price</label>
                                <input type="text" id="inputTitle" className="span6" value="" placeholder="Enter Price  ..." />
                                <div className="separator"></div>

                                <label for="inputTitle">Quantity</label>
                                <input type="text" id="inputTitle" className="span6" value="" placeholder="Enter quantity..." />
                                <div className="separator"></div>

                                <label for="inputTitle">OtherField</label>
                                <input type="text" id="inputTitle" className="span6" value="" placeholder="Enter value ..." />
                                <div className="separator"></div>
                            </div>
                            <hr className="separator bottom" />
                            <br />
                            <br />
                            <div className="buttons pull-right">
                                <a href="" className="btn btn-default btn-icon glyphicons share"><i></i> Preview</a>
                                <a href="" className="btn btn-primary btn-icon glyphicons ok_2"><i></i> Save</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        );
    }
}




