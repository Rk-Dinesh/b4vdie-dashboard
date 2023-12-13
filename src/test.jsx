<div className="col-span-6">
            <Card>
              <div className="bg-transparent">
                <form className="space-y-3" onSubmit={onUpdate}>
                  <div>
                    {/* <div className="form-group">
                      <label htmlFor="password" className=" col-sm-2 col-form-label"><b>New Password*</b></label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control py-2"
                        placeholder="Password"
                        value={(userData.password || "").substring(0, 5)}
                        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className=" col-sm-2 col-form-label"><b>Confirm Password*</b></label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control py-2"
                        placeholder="Password"
                        value={''}
                        onChange={''}
                      />
                    </div> */}
                    <div className="form-group">
                      <label htmlFor="newPassword" className=" col-form-label py-2"><b>New Password<span style={{ color: 'red' }}>*</span></b></label>
                      <input
                        type="password"
                        name="newPassword"
                        id="newPassword"
                        className="form-control py-2"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirmPassword" className=" col-form-label py-2"><b>Confirm Password <span style={{ color: 'red' }}>*</span></b></label>
                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        className="form-control py-2"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>

                    <br />
                    <div className="ltr:text-right rtl:text-left">
                      <button className="btn btn-dark text-center" type="submit">
                        Change Password
                      </button>
                    </div>
                  </div>

                </form>
              </div>
            </Card>
          </div>



const handleDelete = async (tripid) => {
  const endpoints = ['deletrip','deletealltransport','deletealltaveller','deleteallpitstop','deleteallalert'];
  for(const endpoint of endpoints){
  try {
    const response1 = await axios.delete(`http://localhost:4000/deletrip?tripid=${tripid}`);
    const response2= await axios.delete(`http://localhost:4000/deletealltransport?tripid=${tripid}`);
    const response3 = await axios.delete(`http://localhost:4000/deletealltaveller?tripid=${tripid}`);
    const response4 = await axios.delete(`http://localhost:4000/deleteallpitstop?tripid=${tripid}`);
    const response5 = await axios.delete(`http://localhost:4000/$deleteallalert?tripid=${tripid}`);
    console.log(response1);
    window.location.reload();
  } catch (error) {
    console.error(`Error deleting : `, error);
  }

}
};

router.put('follow',(req,res) => {
  UserModel.findOneAndUpdate(req.body.userid,{
      $push:{followers:req.user.userid}
  },{
      new:true
  },(err,result) => {
      if(err){
          return res.status(400).json({error:err})
      }
      UserModel.findOneAndUpdate(req.user.userid,{
          $push:{following:req.body.userid}
      },{
          new : true
      }).then(result => {
          res.json(result)
      }).catch(err => {
          return res.status(400).json({error :err})
      })
  })
})