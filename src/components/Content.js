import React from "react";
import "./Content.css";
import { Glyphicon } from "react-bootstrap";
import { connect } from "react-redux";
import Spinner from 'react-spinkit';
import LoadingScreen from 'react-loading-screen'
import Question from "./Question";
import store from '../store/stateStore';
import quest3 from './Question3';
import quest1 from './Question1';
import quest2 from './Question2';
import Countdown from './Countdown';
import Footer from "./Footer";
class Content extends React.Component { 
  constructor(props) {
    super(props);
    this.state ={loaded:true}
  }
  componentDidMount(){
    setTimeout(() => this.setState({ loaded: false }), 1500); 
  }
  handleLoading(){
    this.setState({loaded:true});
  }
  render() {
   // console.log(this.props.startTest);
      if (this.props.startTest === false) {
      return (
        <div className="myHeader">
          <div
            ref={header => {
              this.myHeader = header;
            }}
            className="header">
            <h4> Chào mừng bạn đến với Thi Thử Quân Sự</h4>
            <h4>
              {" "}
              Nhấn nút
              <span>&nbsp;</span>
              <Glyphicon glyph="glyphicon glyphicon-th-list" />
              <span>&nbsp;</span>ở góc trái để chọn học phần.
            </h4>
            <h4>
              {" "}
              Câu hỏi và câu trả lời mình dựa vào{" "}
              <a href="#" target="blank">
                đây.
              </a>
            </h4>
          </div>
          <div className="footer">
            <Footer/>
          </div>
        </div>
      );
    } else {
     const { loaded } = this.state;
     if (loaded) {
       return null;
     }
     else {
       return (
         <div>
         <Countdown/>
        <Question store={store}
                  questionArray1={quest1}
                  questionArray2={quest2}
                  questionArray3={quest3}/>
         </div>
       );
     }
    }
  }
}
const mapStateToProps = state => ({
  startTest: state.startTest
});
export default connect(mapStateToProps)(Content);
