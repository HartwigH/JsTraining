import React from 'react';
import Navbar from '../containers/Navbar.jsx';
import InnerMenu from '../containers/InnerMenu.jsx';
import Content from '../containers/Content.jsx';
import Footer from '../containers/Footer.jsx';
import FormElements from '../containers/FormElements.jsx';
import LoginStandalone from '../containers/LoginStandalone.jsx';

/**stateful component */
export default class MasterLayout extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid fixed">
                {/**/}
                <Navbar/>
                <div id="wrapper">
                    <InnerMenu/>
                    <Content/>
                </div>
                <Footer/> 

                {/*<FormElements/>
                <LoginStandalone/>*/}
                
            </div>

        );
    }


}