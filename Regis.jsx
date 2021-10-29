import React,{useState} from "react";

const Regis = () =>{
    const [user,setUser] = useState({
        name:"",dob:"" ,occupation:"",gender:"",contact:"",email:"",pwd:"",mother_name:"",
        father_name:"",mother_occupation:"",father_occupation:"",m_contact_no:"",
        f_contact_no:"",address:"",state:"",pin_no:"",photo:"",sign:"",
    });
    let name,value;
const handleInputs = (e) =>{
     console.log(e);
     name =e.target.name;
     value = e.target.value;

     setUser({...user,[name]:value});
}
    return(
        <div className="container">
           <div className="row">
           <div class="my-2 col-sm-12 text-center mb-3">
                    <h2 class="display-6">Registration Form</h2>
                    <hr class="mx-auto w-30" />
                </div>
               <div className="col-sm-6 p-2">
                  <div className="form-group">
                    <label for="Name">Name:</label>
                    <input type="text" name="name" value={user.name} onChange={handleInputs} placeholder="Your Name?" className="form-control" />
                  </div>
               </div>

               <div className="col-sm-6 p-2">
                  <div className="form-group">
                    <label for="dob">Date of Birth:</label>
                    <input type="date" name="dob" value={user.dob} onChange={handleInputs} className="form-control" />
                  </div>
               </div>

               <div className="col-sm-6 p-2">
                  <div className="form-group p-">
                    <label for="occupation">Occupation:</label>
                    <input type="text"  name="occupation" value={user.occupation} onChange={handleInputs}placeholder="Occupation?" className="form-control" />
                  </div>
               </div>
               <div className="col-sm-6 p-1">
                  <div className="form-group">
                    <label for="gender">Gender:</label>
                    <input type="text" name="gender" value={user.gender} onChange={handleInputs}placeholder="Gender?" className="form-control" />
                  </div>
               </div>
               <div className="col-sm-6 p-1">
                  <div className="form-group">
                    <label for="contact">Contact No:</label>
                    <input type="number" name="contact" value={user.contact} onChange={handleInputs}placeholder="Contact Number?" className="form-control" />
                  </div>
               </div>
               <div className="col-sm-6 p-1">
                  <div className="form-group">
                    <label for="email">Email Id:</label>
                    <input type="text" name="email" value={user.email} onChange={handleInputs}placeholder="Email Id?" className="form-control" />
                  </div>
               </div>
               <div className="col-sm-6 p-1">
                  <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" name="pwd" value={user.pwd} onChange={handleInputs}placeholder="Your Password?" className="form-control" />
                  </div>
               </div>
               
               {/* Parent Detail */}
               <div class="my-2 col-sm-12  mb-3">
                    <h4 class="display-6">Parent's Detail</h4>
                    <hr class="mx-auto w-30" />
                </div>

                <div className="col-sm-6 p-1">
                  <div className="form-group">
                    <label for="mother_name">Mother's Name:</label>
                    <input type="text" name="mother_name" value={user.mother_name} onChange={handleInputs}placeholder="Mother's Name?" className="form-control" />
                  </div>
               </div>
               <div className="col-sm-6 p-1">
                  <div className="form-group">
                    <label for="father_name">Father's Name:</label>
                    <input type="text" name="father_name" value={user.father_name} onChange={handleInputs}placeholder="Father's Name?" className="form-control" />
                  </div>
               </div>
          
               <div className="col-sm-6 p-1">
                  <div className="form-group">
                    <label for="mother_occupation">Mother's Occupation:</label>
                    <input type="text" name="mother_occupation" value={user.mother_occupation} onChange={handleInputs}placeholder="Mother's Occupation?" className="form-control" />
                  </div>
               </div>
               <div className="col-sm-6 p-1">
                  <div className="form-group">
                    <label for="father_occupation">Father's Occupation:</label>
                    <input type="text" name="father_occupation" value={user.father_occupation} onChange={handleInputs}placeholder="Father's Occupation?" className="form-control" />
                  </div>
               </div>
               <div className="col-sm-6 p-1">
                  <div className="form-group">
                    <label for="m_contact_no">Mother's Contact No:</label>
                    <input type="text" name="m_contact_no" value={user.m_contact_no} onChange={handleInputs}placeholder="Mother's Contact Number?" className="form-control" />
                  </div>
               </div>
               <div className="col-sm-6 p-1">
                  <div className="form-group">
                    <label for="f_contact_no">Father's Contact No:</label>
                    <input type="text" name="f_contact_no" value={user.f_contact_no} onChange={handleInputs}placeholder="Father's Contact Number?" className="form-control" />
                  </div>
               </div>
                {/* Address Detail */}
                <div class="my-2 col-sm-12  mb-3">
                    <h4 class="display-6">Address Detail</h4>
                    <hr class="mx-auto w-30" />
                </div>
               <div className="col-sm-12 p-1">
                  <div className="form-group">
                    <label for="address">Address:</label>
                    <input type="text" name="address" value={user.address} onChange={handleInputs}placeholder="Address?" className="form-control" />
                  </div>
               </div>
               <div className="col-sm-6 p-1">
                  <div className="form-group">
                    <label for="state">State:</label>
                    <input type="text" name="state" value={user.state} onChange={handleInputs}placeholder="State?" className="form-control" />
                  </div>
               </div>
               <div className="col-sm-6 ">
                  <div className="form-group">
                    <label for="pin_no">Pin No:</label>
                    <input type="number" name="pin_no" value={user.pin_no} onChange={handleInputs} placeholder="Pin No?" className="form-control" />
                  </div>
               </div>
                 {/* Document Section */}
               <div class="my-2 col-sm-12  mb-3">
                    <h4 class="display-6">Document Section</h4>
                    <hr class="mx-auto w-30" />
                </div>
               <div className="col-sm-6">
                  <div className="form-group">
                    <label for="photo">Photo:</label>
                    <input type="file" name="photo" value={user.photo} onChange={handleInputs} placeholder="photo?" className="form-control" />
                  </div>
               </div>
               <div className="col-sm-6">
                  <div className="form-group">
                    <label for="sign">Sign:</label>
                    <input type="file" name="sign" value={user.sign} onChange={handleInputs} placeholder="Sign?" className="form-control" />
                  </div>
               </div>

               <div class="my-2 col-sm-12 text-center mb-3">
                    <input type="submit" name="submit" className="m-2 w-3 p-2"/>
                    <input type="reset" name="Reset" className="m-2 w-3 p-2"/>
                </div>

           </div>
        </div>
    )
}

export default Regis;