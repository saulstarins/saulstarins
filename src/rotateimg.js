import React, {Component} from 'react'
class Rotate extends Component{
    constructor(){
        super()
        this.onClickForward=this.onClickForward.bind(this)
        this.onClickBack = this.onClickBack.bind(this)
        const img1 = require('./Shop-images/1.jpg');
        const img2 = require('./Shop-images/2.JPG');

        this.state={
            index:0,
            imgList: [img1,img2]
        }
    }
    onClickForward(){
        if (this.state.index + 1===this.state.imgList.length){
            this.setState({
                index:0
            })
        } else{
            this.setState({
                index: this.state.index +1
            })
        }
    }
    onClickBack(){
        if (this.state.index -1 === -1){
            this.setState({
                index: this.state.imgList.length -1
            })
        } else{
            this.setState({
                index: this.state.index -1
            })
        }
    }
    render(){
        return(
            null
        )
    }

}
export default Rotate;