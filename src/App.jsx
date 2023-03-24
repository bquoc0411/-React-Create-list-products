import React from "react";
import Logo from './Logo/Logo';
import Content from './Content/Content'
import Status from './Status/Status'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
const App = () => {
    return (
        <div className="wrapper">
            <div className="container px-4 py-5">
                <div className="row items-list">

                    <div className="col-lg-4">
                        <div className="item">
                            <Logo day='1' name='Mailchimp' kind='Design' icon='mailchimp' />
                            <Content title="Senior product designer-Singapore" value="50" />
                            <Status applied="32" capacity="50" />
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="item">
                            <Logo day='4' name='Dribbble' kind='Product' icon='dribbble' />
                            <Content title="Junior Product designer-Singapore" value="50" />
                            <Status applied="42" capacity="70" />
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="item">
                            <Logo day='2' name='Mailchimp' kind='Design' icon='mailchimp' />
                            <Content title="Software Architect Java - USA" value="50" />
                            <Status applied="52" capacity="100" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default App;