import React from 'react'
import { Table } from 'react-bootstrap'
import './Result.css'
import { Glyphicon } from 'react-bootstrap';
class Result extends React.Component{
  createheaderRow = () => {
    let row = [];
    for (let i = 0;i<20;i++){
      row.push(<td align="center">{i+1}</td>)
    }
    return row;
  }
  createUserRow = (list) => {
    console.log(list);
      let row = [];
      for (let i =0;i<20;i++){
        row.push(<td>{list[i]}</td>)
      }
      return row;
  }

  createKeyRow = (list) => {
    console.log(list);
    let row = [];
    for (let i = 0;i<20;i++){
      row.push(<td>{list[i]}</td>)
    }
    return row;
  }
  createResult = () => {
    let table = [];
      table.push(<tr><td className="thead" align="left">Câu : </td>{this.createheaderRow()}</tr>);
      table.push(<tr><td className="thead" align="left">Bạn chọn : </td>{this.createUserRow(this.props.list)}</tr>);
      table.push(<tr><td className="thead" align="left">Đáp án : </td>{this.createKeyRow(this.props.keys)}</tr>);
    return table;
  }
  calculateScore = (list, keys) => {
    let score = 0;
    for (let i = 0;i<list.length;i++){
      if (list[i] === keys[i]) score++;
    }
    return score;
  }
  render(){
    let score = this.calculateScore(this.props.list, this.props.keys);
    return(
      <div className="result">
          <span className="score">Kết quả : {score}/20</span>
        <div className="table">
        <Table responsive striped bordered condensed hover>
        <tbody>
         {this.createResult()}
         </tbody>
        </Table>
        </div>
       
          <p>Nhấn nút
          <span>&nbsp;</span>
          <Glyphicon glyph="glyphicon glyphicon-th-list" />
          <span>&nbsp;</span>ở góc trái để thi lại.</p>
          <br/>
      </div>
    );
  }
}
export default Result;