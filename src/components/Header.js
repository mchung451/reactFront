import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div>
                <header className="header">
                    <nav className="navbar bg-dark">
                        <div><a href="https://javaguides.net" className="navbar-brand">TSI Zoo</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent