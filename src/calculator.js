import React from "react";
import DisplayScreen from "./displayScreen.js";
import FormulaScreen from "./formulaScreen.js";
import Input from "./input.js";

export default class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            result: "0",
            formula: "",
            isResultFormulasAnswer: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(input){
        if(this.state.result != "Exceeds the limit"){
            switch (input) {
                case "CE":
                    this.clearResult();
                    break;
                case "C":
                    this.clearResult();
                    this.clearFormula();
                    break;
                case "D":
                    this.deleteLastSymbolFromResult();
                    break;
                case "±":
                    this.handleResultsSign();
                    break;
                case "+":
                case "×":
                case "÷":
                case "−":
                    this.handleOperator(input);
                    break;
                case "=":
                    this.handleResult();
                    break;
                case ".":
                    this.handleDecimal();
                    break;
                default:
                    this.handleNumber(input);
                    break;
            }
        }
        else{
            this.setState({
                result: "0"
            });
        }
    }
    clearResult(){
        if(this.state.result != "0"){
            this.setState({
                result: "0"
            });
        }
    }
    clearFormula(){
        if(this.state.formula != ""){
            this.setState({
                formula: ""
            });
        }
    }
    deleteLastSymbolFromResult(){
        if(!this.state.isResultFormulasAnswer){
            if(this.state.result.length == "1" || (this.state.result.length == "2" && this.state.result.charAt(0) == "-")){
                this.setState({
                    result: "0"
                });
            }
            else{
                this.setState({
                    result: this.state.result.slice(0, -1)
                });
            }
        }
    }
    handleResultsSign(){
        if(this.state.result != "0"){
            this.setState({
                result: (parseFloat(this.state.result, 10) * (-1)).toString()
            });
        }
    }
    handleNumber(value){
        if(!(this.state.isResultFormulasAnswer || this.state.result == "0")){
            if (this.state.result.length <= 14){
                this.setState({
                    result: this.state.result + value
                });
            }
        }
        else{
            this.setState({
                result: value,
                isResultFormulasAnswer: false
            });
        }
    }
    handleOperator(value){
        if(this.state.isResultFormulasAnswer && this.state.formula != ""){
            this.setState({
                formula: this.state.formula.slice(0, -1) + value
            });
        }
        else{
            
            this.setState({
                formula: this.state.formula + (this.state.result.charAt("0") == "-" ? "(" + this.state.result + ")" : this.state.result) + value
            }, () => {
                this.setState({
                    result: this.evalString(this.state.formula),
                    isResultFormulasAnswer: true
                });
            });
        }
    }
    handleDecimal(){
        if(!this.state.isResultFormulasAnswer){
            if(this.state.result.length <= 14 && this.state.result.search(/\./) == "-1"){
                this.setState({
                    result: this.state.result + "."
                });
            }
        }
        else{
            this.setState({
                result: "0.",
                isResultFormulasAnswer: false
            });
        }
    }
    handleResult(){
        this.setState({
            result: this.evalString(this.state.formula + this.state.result),
            isResultFormulasAnswer: true
        }, () => {
            this.clearFormula();
        });
    }
    evalString(string){
        const stringWithRealOperators = string.replace(/÷/g, "/").replace(/×/g, "*").replace(/−/g, "-").replace(/[+-/\*]$/, "");
        const evaledString  = (Math.round(eval(stringWithRealOperators) * 10000000000) / 10000000000).toString();
        if(evaledString.length > 16){
            return "Exceeds the limit";
        }
        return evaledString;
    }
    render(){
        return (
        <div id="calculator">
            <FormulaScreen value={this.state.formula}/>
            <DisplayScreen value={this.state.result}/>
            <Input handleChange={this.handleChange}/>
        </div>);
    }
}