import React, { Component } from "react";
import reactDom from "react-dom";
import QrReader from "react-qr-reader";

class QrContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            result: 'Hold QR Code Steady and clear to scan'
        }
        this.handleScan = this.handleScan.bind(this)
    }

    handleScan(data){
        console.log(data)
        this.setState({
            result: data
        })
    }

    handleError(err) {
        console.log(err)
    }

    render() {
        const  previewStyle = {
            height: 700,
            width: 1000,
            display: 'flex',
            justifyContent: "center"
        }

        const camStyle = {
            display: 'flex',
            justifyContent: "center",
            marginTop: "-50px"
        }

        const textStyle = {
            fontSize: "30px",
            textAlign: "center",
            marginTop: '-50px'
        }

        return (<div>
            <React.Fragment>
                <div style={camStyle}>
                    <QrReader
                        delay={100}
                        style={previewStyle}
                        onError={this.handleError}
                        onScan={this.handleScan}
                    />
                </div>
                <p style={textStyle}>
                    {this.state.result}
                </p>
            </React.Fragment>
        </div>);
    }
}

export default QrContainer;