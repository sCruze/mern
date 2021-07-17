import './MainLayout.scss'

import {Component} from "react";

export default class MainLayout extends Component{
    render() {
        return (
            <div className="main-layout__container">

                <main>
                    { this.props.children }
                </main>
            </div>
        )
    }
}
