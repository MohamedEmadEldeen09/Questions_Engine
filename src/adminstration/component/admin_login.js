import axios from 'axios'
import React, { useRef } from 'react'
import { useQuery } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import { admin_url, set_adminLogin } from '../../commen/admin_slice'
import { useDispatch } from 'react-redux'


function admin_login() {
 const password  = useRef(null)
 
 const {data:adminsData , isLoading , error} = useQuery("admins" ,async ()=>{
  return (await axios.get(admin_url)).data
 })

 const dispatch = useDispatch()
 const route = useNavigate()

 const handleLogin = ()=>{
  let adminInf = adminsData.filter(admin => admin.passid === password.current.value)
  if(adminInf.length === 0){
    alert('wrong password try again')
    password.current.value = ""
    password.current.focus()
    return
  }else{   
    dispatch(set_adminLogin(adminInf[0]))
    route("/Questions_Engine/questions")
  } 
 }

if(isLoading)  return <h3>Wait...</h3>
if(error){
  return (
   <h4>
    there is some thing wrong -
    {error.message} -
    <Link to="/Questions_Engine" >try agin</Link> 
   </h4>
  )
}  
  return (
    <div className="admin-login">
      <h3>Hello Admin <i className='bx bx-user-pin'></i></h3>
      <article>         
      <label htmlFor="log-A">Type Your ID
      <input type="text" id="log-A" ref={password}/>
      </label>
      </article>
      
        <button type="button" onClick={handleLogin} className="btn_login submit-add">
          Log in
        </button>
      <hr/>
      <div style={{padding:"15px 0"}}>
        <p>you can choose id from these data</p>
        {adminsData.map(admin=>{
          return (
            <div key={admin.id} style={{margin:"8px 0" , backgroundColor:"white"}}>
             <h3><span> Name : </span>{admin.name}</h3>
             <p style={{opacity:"0.8"}}><span> ID : </span>{admin.passid}</p>
            </div>
          )
        })
        }
        
      </div>
    </div>      
  )
}

export default admin_login