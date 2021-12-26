import React, { Component } from "react";
import "./QrContainer.css"
import QrReader from "react-qr-reader";
import Indicateur from "./Indicateur";
import { Navigate } from "react-router-dom";

class QrContainer extends Component {

    constructor(props) {
        super(props)
        this.handleScan = this.handleScan.bind(this)
        this.state = {
            isGood: null,
            redirectTo: false
        }
    }

    addHistory(product) {
        let history = JSON.parse(localStorage.getItem('historyAllergens'));
        if(history === null){
            history = [];
        }

        history.push(product)
        localStorage.setItem('historyAllergens', JSON.stringify(history));
    } 

    handleScan(data){
        if(this.state.isGood === null){
            console.log('Scanning...')
            let parseData = JSON.parse(data);
            console.log(parseData)
            if(parseData?.allergens && parseData?.product && Array.isArray(parseData.allergens)){

                this.addHistory(parseData);

                const tabData = parseData.allergens;
                //c'est un tableau contenant des allergènes
                const userAllergens = JSON.parse(localStorage.getItem('userAllergens'));
                localStorage.setItem('productAllergens', JSON.stringify(parseData))
                if(userAllergens !== null){
                    for(let i=0; i<userAllergens.length; i++){
                        for(let j=0; j<tabData.length; j++){
                            if(userAllergens[i] === tabData[j]){
                                this.setState({
                                    isGood: false
                                })
                                return;
                            }
                        }
                    }
                    this.setState({
                        isGood: true
                    })
                }else{
                    this.setState({
                        isGood: true
                    })
                }
            }
        }
    }

    handleError(err) {
        console.log(err)
    }

    render() {

        if(this.state.redirectTo !== false) {
            return <Navigate to={this.state.redirectTo} />
        }

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
                    redirectTo: "/allergens"
                })
            }
            if(isGood === false){
                this.setState({
                    redirectTo: "/allergens"
                })
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