import React, { Component } from 'react';
import RowData from './RowData';
import getData from '../../../services/GetViewEng';
import Pagination from "react-js-pagination";

class TableData extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: "",
      itemsCountPerPage: 1,
      totalItemsCount: 10,
      pageRangeDisplayed: 3,
      activePage : 1
    }
  }
  handlePageChange =(pageNumber)=> {
    console.log('active page is: ' + pageNumber);
    this.setState({activePage: pageNumber})
    // this.setState({activePage: pageNumber});
  }
  async componentWillMount(){
    const res = await getData();
    let dataRender = res.results.map((value,key) =>(
      <RowData  
      key = {key}
      id = {value.id}
      firstName={value.firstName} 
      lastName= {value.lastName}
      englishName={value.englishName}
      phoneNumber={value.phoneNumber}
      address={value.address}
      email={value.email}
      skype={value.skype}
      expYear = {value.expYear}
      status = {value.status}
      create = {value.createdAt}
      update = {value.updatedAt}
      dayOffRemain={value.dayOffRemain}
      />
    )
  )
  this.setState({
    data : dataRender
  })
}
    render() {
      
        return (
            <div className="table-scrollable">
            <table className="table table-striped table-bordered table-advance table-hover">
              <thead>
                <tr>
                  <th style={{fontWeight: 'bold'}}>Id </th>
                  <th style={{fontWeight: 'bold'}}>Name </th>
                  <th style={{fontWeight: 'bold'}}>Fullname </th>
                  <th style={{fontWeight: 'bold'}}>Email </th>
                  <th style={{fontWeight: 'bold'}}>Phone </th>
                  <th style={{fontWeight: 'bold'}}>Experiences </th>
                  <th style={{fontWeight: 'bold'}}>Actions </th>
                </tr>
              </thead>
              <tbody>
                {this.state.data}
              </tbody>
            </table>
            <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.itemsCountPerPage}
          totalItemsCount={this.state.totalItemsCount}
          pageRangeDisplayed={this.state.pageRangeDisplayed}
          onChange={this.handlePageChange}
          itemClass = 'page-item'
        />
          </div>
        );
    }
}

export default TableData;