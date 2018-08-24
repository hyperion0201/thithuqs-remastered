import React from "react";
import "./Content.css";
import { Glyphicon } from "react-bootstrap";
import { connect } from "react-redux";
import Question from "./Question";
import store from '../store/stateStore';
import quest3 from './Question3';
import quest1 from './Question1';
import quest2 from './Question2';
import Footer from "./Footer";
class Content extends React.Component { 
  
  render() {
   // console.log("loading status : ", this.state.loaded);  
    console.log(this.props.startTest);
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
              <a href="https://drive.google.com/file/d/0B6hAMrMAqD_AM1JCSU9OdTd3Y2M/view" target="blank">
                đây.
              </a>
            </h4>
          </div>
          <div className="footer">
            <Footer whereFooter ="footerhome"/>
          </div>
        </div>
      );
    }
       else {
       return (
         <div>
        <Question store={store}
                  questionArray1={quest1}
                  questionArray2={quest2}
                  questionArray3={quest3}/>
         </div>
       );
      }
     
    }
  }
const mapStateToProps = state => ({
  startTest: state.startTest,
  
});
export default connect(mapStateToProps)(Content);
