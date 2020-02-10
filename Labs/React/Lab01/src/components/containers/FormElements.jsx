import React from 'react';



/**stateful component */
export default class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="content">
                <ul className="breadcrumb">
                    <li><a href="index.html?lang=en" className="glyphicons home"><i></i> AdminPlus</a></li>
                    <li className="divider"></li>
                    <li>Forms</li>
                    <li className="divider"></li>
                    <li>Form Elements</li>
                </ul>
                <div className="separator"></div>

                <div className="innerLR">
                    <div className="widget widget-4">
                        <div className="widget-head">
                            <h3 className="heading">Form Elements</h3>
                        </div>
                        <div className="widget-body">
                            <p>There are various form elements contained in AdminPlus, custom select controls, custom checkbox &amp; radio controls, custom input controls with &amp; without appended / prepended elements (icons, dropdowns, dropups, groups), toggle (on/off) buttons, icons &amp; many more.</p>
                        </div>
                    </div>

                    <div className="widget widget-gray widget-body-white">

                        <div className="widget-head">
                            <h4 className="heading">Input controls</h4>
                        </div>


                        <div className="widget-body" style={{ padding: "10px 0 0" }}>

                            <div className="row-fluid">

                                <div className="span2">
                                </div>

                                <div className="span8">

                                    <div className="widget widget-4">

                                        <div className="widget widget-4">
                                            <div className="widget-head"><h4 className="heading">Default</h4></div>
                                            <div className="separator"></div>
                                            <div className="row-fluid">
                                                <input type="text" placeholder="Text input" className="span12" />
                                            </div>
                                        </div>

                                        <div className="widget widget-4 row-fluid">
                                            <div className="widget-head"><h4 className="heading">Extended</h4></div>
                                            <div className="separator"></div>
                                            <div className="input-prepend">
                                                <span className="add-on">@</span>
                                                <input id="prependedInput" className="span12" type="text" placeholder="Username" />
                                            </div>
                                        </div>

                                        <div className="widget widget-4 row-fluid">
                                            <div className="widget-head"><h4 className="heading">Combined</h4></div>
                                            <div className="separator"></div>
                                            <div className="input-prepend input-append">
                                                <span className="add-on">$</span>
                                                <input className="span12" id="appendedPrependedInput" type="text" placeholder="100,000,000" />
                                                <span className="add-on">.00</span>
                                            </div>
                                        </div>

                                        <div className="widget widget-4 uniformjs">
                                            <div className="widget-head">
                                                <h4 className="heading">Checkbox</h4>
                                            </div>
                                            <div className="separator"></div>
                                            <label className="checkbox">
                                                <input type="checkbox" className="checkbox" value="1" />
                                                Option 1 - Sexy checkbox
							</label>
                                            <label className="checkbox">
                                                <input type="checkbox" className="checkbox" value="1" checked="checked" />
                                                Option 2 - Checked
							</label>
                                            <label className="checkbox">
                                                <input type="checkbox" className="checkbox" value="1" disabled="disabled" />
                                                Option 3 - Disabled checkbox
							</label>
                                        </div>

                                        <div className="widget widget-4 uniformjs">
                                            <div className="widget-head">
                                                <h4 className="heading">Radio</h4>
                                            </div>
                                            <div className="separator"></div>
                                            <label className="radio">
                                                <input type="radio" className="radio" name="radio" value="1" />
                                                Option 1 - Sexy radio
							</label><br />
                                            <label className="radio">
                                                <input type="radio" className="radio" name="radio" value="1" checked="checked" />
                                                Option 2 - Checked
							</label><br />
                                            <label className="radio">
                                                <input type="radio" className="radio disabled" name="radio" value="1" disabled="disabled" />
                                                Option 3 - Disabled radio
							</label>
                                        </div>



                                        <div className="widget widget-gray widget-body-white">
                                            <div className="widget-head">
                                                <h4 className="heading">Advanced Select controls</h4>
                                            </div>
                                            <div className="widget-body" style={{ padding: "10px 0" }}>
                                                <h5>Basics</h5>
                                                <div className="row-fluid">
                                                    <select style={{ width: "100%" }} id="select2_1">
                                                        <optgroup label="Alaskan/Hawaiian Time Zone">
                                                            <option value="AK">Alaska</option>
                                                            <option value="HI">Hawaii</option>
                                                        </optgroup>
                                                        <optgroup label="Pacific Time Zone">
                                                            <option value="CA">California</option>
                                                            <option value="NV">Nevada</option>
                                                            <option value="OR">Oregon</option>
                                                            <option value="WA">Washington</option>
                                                        </optgroup>
                                                        <optgroup label="Mountain Time Zone">
                                                            <option value="AZ">Arizona</option>
                                                            <option value="CO">Colorado</option>
                                                            <option value="ID">Idaho</option>
                                                            <option value="MT">Montana</option><option value="NE">Nebraska</option>
                                                            <option value="NM">New Mexico</option>
                                                            <option value="ND">North Dakota</option>
                                                            <option value="UT">Utah</option>
                                                            <option value="WY">Wyoming</option>
                                                        </optgroup>
                                                        <optgroup label="Central Time Zone">
                                                            <option value="AL">Alabama</option>
                                                            <option value="AR">Arkansas</option>
                                                            <option value="IL">Illinois</option>
                                                            <option value="IA">Iowa</option>
                                                            <option value="KS">Kansas</option>
                                                            <option value="KY">Kentucky</option>
                                                            <option value="LA">Louisiana</option>
                                                            <option value="MN">Minnesota</option>
                                                            <option value="MS">Mississippi</option>
                                                            <option value="MO">Missouri</option>
                                                            <option value="OK">Oklahoma</option>
                                                            <option value="SD">South Dakota</option>
                                                            <option value="TX">Texas</option>
                                                            <option value="TN">Tennessee</option>
                                                            <option value="WI">Wisconsin</option>
                                                        </optgroup>
                                                        <optgroup label="Eastern Time Zone">
                                                            <option value="CT">Connecticut</option>
                                                            <option value="DE">Delaware</option>
                                                            <option value="FL">Florida</option>
                                                            <option value="GA">Georgia</option>
                                                            <option value="IN">Indiana</option>
                                                            <option value="ME">Maine</option>
                                                            <option value="MD">Maryland</option>
                                                            <option value="MA">Massachusetts</option>
                                                            <option value="MI">Michigan</option>
                                                            <option value="NH">New Hampshire</option><option value="NJ">New Jersey</option>
                                                            <option value="NY">New York</option>
                                                            <option value="NC">North Carolina</option>
                                                            <option value="OH">Ohio</option>
                                                            <option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option>
                                                            <option value="VT">Vermont</option><option value="VA">Virginia</option>
                                                            <option value="WV">West Virginia</option>
                                                        </optgroup>
                                                    </select>


                                                </div>



                                                <div className="widget widget-4 row-fluid">
                                                    <div className="widget-head"><h4 className="heading">Alerts</h4></div>
                                                    <div className="separator"></div>

                                                    <div className="alert">
                                                        <button type="button" className="close" data-dismiss="alert">×</button>
                                                        <strong>Warning!</strong> Best check yo self, you're not looking
                                                        too good.
								</div>
                                                    <div className="alert alert-error">
                                                        <button type="button" className="close" data-dismiss="alert">×</button>
                                                        <strong>Oh snap!</strong> Change a few things up and try submitting
                                                        again.
								</div>

                                                    <div className="alert alert-success">
                                                        <button type="button" className="close" data-dismiss="alert">×</button>
                                                        <strong>Well done!</strong> You successfully read this important
                                                        alert message.
								</div>

                                                    <div className="alert alert-info">
                                                        <button type="button" className="close" data-dismiss="alert">×</button>
                                                        <strong>Heads up!</strong> This alert needs your attention, but
                                                        it's not super important.
								</div>

                                                    <div className="alert alert-block alert-error fade in">
                                                        <button type="button" className="close" data-dismiss="alert">×</button>
                                                        <h4 className="alert-titleing">Oh snap! You got an error!</h4>
                                                        <p>Change this and that and try again. Duis mollis, est non commodo
                                                            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
										elit. Cras mattis consectetur purus sit amet fermentum.</p>
                                                        <p>
                                                            <a className="btn btn-danger btn-icon glyphicons circle_arrow_right" href="#"><i></i>Take this action</a>
                                                            <a className="btn btn-success btn-icon glyphicons leaf" href="#"><i></i>Or do this</a>
                                                        </p>
                                                    </div>

                                                </div>


                                                <div className="widget widget-4 row-fluid">
                                                    <div className="widget-head"><h4 className="heading">Buttons</h4></div>
                                                    <div className="separator"></div>

                                                    <div className="widget-body" style={{ padding: "10px 0" }}>
                                                        <button className="btn dropdown-lead btn-default">Default</button>
                                                        <button className="btn dropdown-lead btn-success">Success</button>
                                                        <button className="btn dropdown-lead btn-info">Info btn</button>
                                                        <button className="btn dropdown-lead btn-warning btn-icon glyphicons circle_exclamation_mark">
                                                            <i></i>Warning
										</button>
                                                        <button className="btn dropdown-lead btn-inverse">Inverse</button>
                                                        <br />

                                                        <button className="btn dropdown-lead btn-default btn-small">Default</button>
                                                        <button className="btn dropdown-lead btn-success btn-small">Success</button>
                                                        <button className="btn dropdown-lead btn-info btn-small">Info btn</button>
                                                        <button className="btn dropdown-lead btn-warning btn-icon glyphicons circle_exclamation_mark btn-small">
                                                            <i></i>Warning
										</button>
                                                        <button className="btn dropdown-lead btn-inverse btn-small">Inverse</button>
                                                        <br />
                                                        <a className="btn btn-danger btn-icon glyphicons circle_arrow_right" href="#">
                                                            <i></i>Danger</a>

                                                        <a className="btn btn-success btn-icon glyphicons leaf" href="#">
                                                            <i></i>Success
										</a>
                                                    </div>





                                                </div>

                                            </div>


                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="span2">
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        );
    }


}
