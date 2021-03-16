import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {  editProfile } from "../JS/actions/index";
import './EditProfil.css'
import { Link } from "react-router-dom";
    const EditProfile = () => 
{
      const user = useSelector((state) => state.userReducer.user);
    const [name , setName] = useState()
    const [email , setEmail] = useState()
    const [diplome , setDiplome] = useState()
    const [phoneNumber , setPhone] = useState()
    const [mobileNumber,setMobil] =useState()
    const [dateNaissance,setDate] = useState() 
    const [adress,setAdress]=useState() 
    const [experience,setExperience]= useState()
    const [cv,setCv]=useState()
    const [profession,setProfession]=useState()
    const [webside,setWebside]=useState()
    const [githup,setGithup]=useState()
    const [twitter,setTwitter]=useState()
    const [instagram,setInstagram]=useState()
    const [facebook,setFacebook]=useState()
      const dispatch = useDispatch();

    const obj = {
      name , 
      email,
      diplome,
      phoneNumber,
      mobileNumber,
      dateNaissance,
      adress,
      experience,
      profession,
      cv,
      webside,
      githup,
      twitter,
      instagram,
      facebook

    }

  // const UserId = useSelector((state) => state.UserId);
  // useEffect(() => {
  //     setUsertest(UserId);
  // }, [UserId]);

  return (
    <div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
      <div className="col-md-3 border-right">
        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" src="https://bootdey.com/img/Content/avatar/avatar7.png" /><span className="font-weight-bold">{user.name}</span><span className="text-black-50">amelly12@bbb.com</span><span> </span></div>
      </div>
      <div className="col-md-5 border-right">
        <div className="p-3 py-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="text-right">Modifier Profile </h4>
          </div>
          <div className="row mt-3">
            <div className="col-md-12"><label className="labels">Nom</label><input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} defaultValue={user.name} /></div>
            <div className="col-md-12"><label className="labels">Email</label><input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} defaultValue={user.email} /></div>
            <div className="col-md-12"><label className="labels">Adresse</label><input type="text" className="form-control" onChange={(e)=> setAdress(e.target.value)} defaultValue={user.adress} /></div>
            <div className="col-md-12"><label className="labels">Diplôme</label><input type="text" className="form-control" onChange={(e)=>setDiplome(e.target.value)} defaultValue={user.diplome} /></div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6"><label className="labels">Phone Number</label><input type="number" className="form-control" onChange={(e)=> setPhone(e.target.value)} defaultValue={user.phoneNumber} /></div>
            <div className="col-md-6"><label className="labels">Mobile Number</label><input type="number" className="form-control" onChange={(e)=> setMobil(e.target.value)} defaultValue={user.mobileNumber} /></div>
          </div>
          
          <div className="row mt-3">
            <div className="col-md-6"><label className="labels">Date Naissance</label><input type="date" className="form-control" onChange={(e)=>setDate(e.target.value)} defaultValue={user.dateNaissance} /></div>
            <div class="mb-3">
                <label for="formFileSm" class="form-label">CV</label>
                <input class="form-control form-control-sm" id="formFileSm" type="file"  onChange={(e)=>setCv(e.target.value)} defaultValue={user.cv}/>
                </div>
             </div>
          
        </div>
      </div>
      <div className="col-md-4">
      <br/><br/><br/>
        <div className="row mt-3">
            <div className="col-md-12"><label className="labels">Experience</label><input type="text" className="form-control" onChange={(e)=>setExperience(e.target.value)} defaultValue={user.experience} /></div> <br />
            <div className="col-md-12"><label className="labels">Profession</label><input type="text" className="form-control" onChange={(e)=>setProfession(e.target.value)} defaultValue={user.profession} /></div>
            <div className="col-md-12"><label className="labels">Facebook</label><input type="text" className="form-control" onChange={(e)=>setFacebook(e.target.value)} defaultValue={user.facebook} /></div>
        </div>
        
        <div className="row mt-1">
            <div className="col-md-6"><label className="labels">Webside</label><input type="text" className="form-control" onChange={(e)=>setWebside(e.target.value)} defaultValue={user.webside} /></div>
            <div className="col-md-6"><label className="labels">Githup</label><input type="text" className="form-control" onChange={(e)=>setGithup(e.target.value)} defaultValue={user.githup} /></div>
        </div>
        <div className="row mt-1">
            <div className="col-md-6"><label className="labels">Twitter</label><input type="text" className="form-control" onChange={(e)=>setTwitter(e.target.value)} defaultValue={user.twitter} /></div>
            <div className="col-md-6"><label className="labels">Instagram</label><input type="text" className="form-control" onChange={(e)=>setInstagram(e.target.value)} defaultValue={user.instagram} /></div>
        </div>
        <Link to="/profile">
          <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={ dispatch(editProfile(user._id, obj))}>Enregistrer</button></div>
        </Link>
        
      </div>
      

    </div>
  </div>



  );
};

export default EditProfile;
