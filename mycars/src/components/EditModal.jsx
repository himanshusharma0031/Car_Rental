import React from "react";
const EditModal =(props) =>{
    const {editModel,setEditModel,uname,setUname,phone,setPhone,password,setPassword,handleUpdate} = props;
    return(
        <>
     <div className="modal d-flex" tabIndex={-1}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header bg-dark text-light">
        <h5 className="modal-title">MANAGE PROFILE</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>setEditModel(false)} />
      </div>
      <div className="modal-body">
      <div className ="mb-3">
        <label htmlfor ="" className="form-label">Name</label>
        <input type="text" className="form-control mb-3"
        value={uname}
        onChange={(e) => setUname(e.target.value)} />
        </div>

          <div className ="mb-3">
        <label htmlfor ="" className="form-label">Phone</label>
        <input type="text" className="form-control mb-3"
        value={phone}
        onChange={(e) => setPhone(e.target.value)} />

        </div>
          <div className ="mb-3">
        <label htmlfor ="" className="form-label">password</label>
        <input type="text" className="form-control mb-3"
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
        </div>
         
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setEditModel(false)}>Close</button>
        <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
      </div>
    </div>
  </div>
</div>

        </>
    )
};
export default EditModal;