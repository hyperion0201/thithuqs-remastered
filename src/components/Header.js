import React from 'react';
import './Header.css';
import { Glyphicon } from 'react-bootstrap';
class Header extends React.Component{
  render(){
    return(
     <div className="myHeader">
      <div ref ={header => {
        this.myHeader = header;
      }} className="header">
      <h4> Chào mừng bạn đến với Thi Thử Quân Sự</h4>
      <h4> Nhấn nút
      <span>&nbsp;</span>
      <Glyphicon glyph="glyphicon glyphicon-th-list"/>
      <span>&nbsp;</span>
      ở góc trái để chọn học phần.</h4>
      <h4> Câu hỏi và câu trả lời mình dựa vào <a href="#" target="blank">đây.</a>
      </h4>
     </div>
     </div>
  );
}
}

export default Header;