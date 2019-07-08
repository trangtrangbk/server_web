import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';
import TagsInput from 'react-tagsinput'; 
import 'react-tagsinput/react-tagsinput.css';


import moment     from 'moment';
import 'moment-timezone';



 
import "react-datepicker/dist/react-datepicker.css";
import getData from '../../../services/GetDetailEng';
class EditForm extends Component {
  constructor(props){
      super(props);
      this.state = {
          id : props.id,
          startDate: "",
          tags: []
      };      
    }
    handleChange = (tags)=> {
      this.setState({tags})
    }

  async componentDidMount(){
    const res = await getData(this.state.id);
    // let tagsTemp = []
    res.skills.forEach(element => {
      this.setState({ tags: [...this.state.tags, element.name] })
    });
    // this.setState({tags : tagsTemp})

    this.setState({
      id : res.id,
      firstName : res.firstName,
      lastName : res.lastName,
      englishName : res.englishName,
      phoneNumber : res.phoneNumber,
      address : res.address,
      email : res.email,
      skype : res.skype,
      expYear : res.expYear,
      dayOffRemain : res.dayOffRemain,
      status : res.status,
      createdAt : moment(res.createdAt).format('DD/MM/YYYY'),
      updatedAt : moment(res.updatedAt).format('DD/MM/YYYY'),
      skills : res.skills
      // startDate: new Date("")
    });
  }
  selected = ()=>{
      if(this.state.status == 1) return (<input type="text" name="status" value="Available" className="form-control" disabled /> );
      else return (<input type="text" name="status" value="Unavailable" className="form-control" disabled />);
  }

  // displaySkills = ()=>{
  //   console.log(this.state.skills)
  //   const display= "";
  //   this.state.skills.map((item, i) =>{     
  //       display += item.name
  //   })
  //   return display;
  // }
  
 
    render() {
      
      console.log( this.state.skills);
        return (
            <div className="portlet light bordered">
            <div className="portlet-title tabbable-line">
              <div className="caption caption-md">
                <i className="icon-globe theme-font hide" />
                <span className="caption-subject font-blue-madison bold uppercase">{this.state.englishName} </span>
              </div>
            </div>
            <div className="portlet-body">
              <div className="tab-content">
                <div className="tab-pane active" id="tab_1_1">
                  <form role="form" action="#">
                    <div className="form-group" style={{textAlign: 'center'}}>     
                      <img height="130px" src="../assets/layouts/layout6/img/none-avatar.png" alt /><br /><br /> 
                    </div> 
                    <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label">English Name</label>
                    <input type="text" name="Engname" value={this.state.englishName} className="form-control" disabled/> </div>
                  <div className="form-group">
                    <label className="control-label">First Name</label>
                    <input type="text" name="firstName" value = {this.state.firstName} className="form-control" disabled/> </div>
                  <div className="form-group">
                    <label className="control-label">Last Name</label>
                    <input type="text" name="lastName" value = {this.state.lastName} className="form-control" disabled/> </div>
                  <div className="form-group">
                    <label className="control-label">Address</label>
                    <input type="text" name="address" value = {this.state.address} className="form-control" disabled /> </div>
                  <div className="form-group">
                    <label className="control-label">Experiences</label>
                    <input type="text" name="exp" value = {this.state.expYear + " exp year"}  className="form-control" disabled/> </div>
                  <div className="form-group">
                    <label className="control-label">Phone Number</label>
                    <input type="text" name="phone" value = {this.state.phoneNumber} className="form-control" disabled /> </div>
                </div>

                

                    <div className="col-md-6">                   
                    <div className="form-group">
                      <label className="control-label">Email</label>
                      <input type="text" name="email" value = {this.state.email}  className="form-control" disabled /> </div>                    
                    <div className="form-group">
                      <label className="control-label">Skype</label>
                      <input type="text" name="skype"  value = {this.state.skype} className="form-control" disabled /> </div>
                    <div className="form-group">
                      <label className="control-label">Birthday</label><br/>
                      <DatePicker  selected={this.state.startDate}  disabled/></div>
                      <div className="form-check">
                        
                        <label className="form-check-label"> Skills <br />
                          {/* <input type = "text" value = {this.state.skills} name="skill" className="form-control" disabled/> */}
                          <TagsInput value={this.state.tags} onChange={(tags) =>this.handleChange(tags)} disabled  />
                        </label>
                       
                      </div>
                    <div className="form-group">
                      <label className="control-label">Status</label>
                     {this.selected()}
                    </div>    

                    <div className="form-group">
                      <label className="control-label">Create at </label>
                      <input type="text" name="createdAt" value = {this.state.createdAt}  className="form-control" disabled /> </div>   

                      <div className="form-group">
                      <label className="control-label">Last update at</label>
                      <input type="text" name="updatedAt" value = {this.state.updatedAt}   className="form-control" disabled /> </div>   

                    </div>        
                  </form>
                </div>
              </div>
            </div>
          
          </div>
         
        );
        
    }
}


export default EditForm;