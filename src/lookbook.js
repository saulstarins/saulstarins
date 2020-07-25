import React, {Component} from 'react'
import arrow_right from './arrow-right.png'
import arrow_left from './arrow-left.jpg'
class Lookbook extends Component {
    constructor(){
        super()
        this.onClickForward=this.onClickForward.bind(this)
        this.onClickBack = this.onClickBack.bind(this)
        const img1 = require('./Lookbook-images/1.JPG');
        const img2 = require('./Lookbook-images/2.JPG');
        const img3 = require('./Lookbook-images/3.JPG');
        const img4 = require('./Lookbook-images/4.PNG');
        const img5 = require('./Lookbook-images/5.PNG');
        const img6 = require('./Lookbook-images/6.PNG');
        const img7 = require('./Lookbook-images/7.PNG');
        const img8 = require('./Lookbook-images/8.PNG');
        const img9 = require('./Lookbook-images/9.JPG');
        const img10 = require('./Lookbook-images/10.jpg');
        const img11 = require('./Lookbook-images/11.JPG');
        const img12 = require('./Lookbook-images/12.PNG');
        const img13 = require('./Lookbook-images/13.PNG');
        const img14 = require('./Lookbook-images/14.JPG');
        const img15= require('./Lookbook-images/15.JPG');
        const img16 = require('./Lookbook-images/16.JPG');
        const img17 = require('./Lookbook-images/17.JPG');
        const img18 = require('./Lookbook-images/18.JPG');
        const img19 = require('./Lookbook-images/19.JPG');
        const img20 = require('./Lookbook-images/20.JPG');
        const img21 = require('./Lookbook-images/21.JPG');
        const img22 = require('./Lookbook-images/22.JPG');
        const img23 = require('./Lookbook-images/23.JPG');
        const img24 = require('./Lookbook-images/24.JPG');
        const img25 = require('./Lookbook-images/25.JPG');
        const img26 = require('./Lookbook-images/26.JPG');
        const img27 = require('./Lookbook-images/27.JPG');
        const img28 = require('./Lookbook-images/28.jpg');
        const img29 = require('./Lookbook-images/29.png');








        this.state={
            index:0,
            imgList: [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17
                ,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27,img28,img29            ]
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
                <h4>Lookbook </h4>
                <img src={this.state.imgList[this.state.index]} className="lookbook-image" alt="" /> <br />
                <button onClick={this.onClickBack} ><img src={arrow_left} alt=" " className="arrow"/></button>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <button onClick={this.onClickForward}><img src={arrow_right} alt=" " className="arrow"/></button>
            </div>
        )

    }
}
export default Lookbook;