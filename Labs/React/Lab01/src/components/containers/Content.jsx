import React from 'react';
import AddProduct from '../widgets/AddProduct.jsx';
import Products from '../widgets/Products.jsx';
import Login from '../widgets/Login.jsx';


/**stateful component */
export default class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="content">
		        <div  className="innerLR">	
			        	
                        {/*  <Login/>
                            <Products/>*/}
                        <AddProduct/>

                </div>
            </div>

        );
    }
}

