import React,{Component} from 'react'
import img1 from "./Shop-images/1.jpg";
import arrow_left from "./arrow-left.jpg";
import arrow_right from "./arrow-right.png";

class Shop extends Component{
    constructor(){
        super()
        this.onClickForward=this.onClickForward.bind(this)
        this.onClickBack = this.onClickBack.bind(this)
        const img1 = require('./Shop-images/1.jpg');
        const img2 = require('./Shop-images/2.JPG');
        const img3 = require('./Shop-images/3.JPG');
        const img4 = require('./Shop-images/4.JPG');
        const img5 = require('./Shop-images/5.JPG');
        const img6 = require('./Shop-images/6.JPG');
        const img7 = require('./Shop-images/7.JPG');
        const img8 = require('./Shop-images/8.JPG');
        const img9 = require('./Shop-images/9.JPG');
        const img10 = require('./Shop-images/10.png');
        const img11 = require('./Shop-images/11.png');
        const img12 = require('./Shop-images/12.png');
        const img13 = require('./Shop-images/13.png');
        const img14 = require('./Shop-images/14.png');
        const img15 = require('./Shop-images/15.png');
        const img16 = require('./Shop-images/16.png');





        this.state={
            index:0,
            imgList: [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16]
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
    render() {
        return (
            <div className="container">
                <h4>Shop</h4>
                <div className="item-div">
                    <img src={this.state.imgList[this.state.index]} className="shop-image" alt="" /> <br />
                    <span>Hello there</span>
                </div>
                <button onClick={this.onClickBack} ><img src={arrow_left} alt=" " className="arrow"/></button>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <button onClick={this.onClickForward}><img src={arrow_right} alt=" " className="arrow"/></button>
            </div>
        )
    }

}
export default Shop;