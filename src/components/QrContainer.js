import React, { Component } from "react";
import "./QrContainer.css"
import QrReader from "react-qr-reader";
import Indicateur from "./Indicateur";

class QrContainer extends Component {

    constructor(props) {
        super(props)
        this.handleScan = this.handleScan.bind(this)
        this.state = {
            isGood: null
        }
    }

    handleScan(data){
        if(data){
            if(this.state.isGood === null){
                if(data === "c'est ok"){
                    this.setState({
                        isGood: true
                    })
                }else if(data === "c'est pas ok"){
                    this.setState({
                        isGood: false
                    })
                }else{
                    console.log('null')
                }
            }
        }
    }

    handleError(err) {
        console.log(err)
    }

    render() {
        const  previewStyle = {
            height: "100vh",
            width: "100vw",
            display: 'flex',
            justifyContent: "center"
        }

        const camStyle = {
            display: 'flex',
            justifyContent: "center",
            marginTop: "-50px"
        }

        const handleOnClick = (isGood) => {
            if(isGood === true){
                this.setState({
                    isGood: null
                })
            }
            if(isGood === false){
                window.location.href = '/allergens';
            }
            if(isGood === null){
                console.log("C'est null sm, mais c'est bizarre que ca arrive hummmm")
            }
        } 

        return (<div>
            <React.Fragment>
                <div 
                className="qr-container"
                style={camStyle}
                onClick={() => {
                    this.setState({
                        isGood: null
                    })
                }}
                >
                    <QrReader
                        delay={100}
                        style={previewStyle}
                        onError={this.handleError}
                        onScan={this.handleScan}
                    />
                </div>
                <Indicateur isGood={this.state.isGood} handleOnClick={handleOnClick}/>
            </React.Fragment>
        </div>);
    }
}

export default QrContainer;