import React from "react";
import "./Content.css";
import { Glyphicon } from "react-bootstrap";
import MainContent from "./MainContent";
import quest1 from "./Q1";
import { connect } from "react-redux";
class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
              <a href="#" target="blank">
                đây.
              </a>
            </h4>
          </div>
        </div>
      );
    } else {
      return <MainContent details={quest1} />;
    }
  }
}
const mapStateToProps = state => ({
  startTest: state.startTest
});
export default connect(mapStateToProps)(Content);
