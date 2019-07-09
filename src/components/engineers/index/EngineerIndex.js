import React, { Component } from 'react';
import TableData from './TableData';
import Modal from '../../Modal';
import AddForm from '../add/AddForm';

class EngineerIndex extends Component { 
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }   
    render() {
        return (
          <div>
            <div className="row">
            <div className="col-md-24">
              <div className="portlet box green">
                <div className="portlet-title">
                  <div className="caption">
                    <i />Engineer Table </div>
                </div>
               
                 <TableData />
               
              </div>
            </div>
            </div>
            <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
                <AddForm />
            </Modal>
          </div>
        );
    }
}

export default EngineerIndex;