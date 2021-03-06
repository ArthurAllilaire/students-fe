// https://www.nightprogrammer.com/tutorial/what-does-import-react-from-react-mean/
// https://stackoverflow.com/questions/41768205/difference-between-import-react-and-import-component-syntax
import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="text-center">
                <img
                src="https://logrocket-assets.io/img/logo.png"
                width="300"
                className="img-thumbnail"
                style={{ marginTop: "20px" }}
                alt=""
                />
                <hr />
                <h5>
                <i>presents</i>
                </h5>
                <h1>App with React + Django</h1>
            </div>
            );
    }
}

export default Header;
