/* eslint-disable */
import React from 'react';
import Header from 'Components/Header/Header';
import Footer from 'Components/Footer/Footer';

export default class Page extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                {this.props.children}
                <Footer />
            </React.Fragment>
        );
    }
}
