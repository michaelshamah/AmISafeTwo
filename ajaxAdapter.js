'use strict'

const ajaxAdapter ={
  getFelonies(long, lat){
    console.log('HERE', long, lat)
    return fetch(`http://localhost:3000/felonies?long=${long}&lat=${lat}`, {
    method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    }).then(res=>{
      return res.json()
      }).then( res=> {
        return res
    })
  },
  getAddress(address){
    return fetch(`http://localhost:3000/felonies/address?address=${address}`, {
    method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    }).then(res=>{
      return res.json()
    }).then( res=> {
      return res
    })
  },
    addNewUser(name, email, password){
    return fetch(`http://localhost:3000/users/new`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body : JSON.stringify({
        name: name,
        email: email,
        password: password
        })
      }).then( r=> {
        console.log(r)
        r.json()
    })
  },
  loginUser(email, password){
    return fetch(`http://localhost:3000/api/authenticate/:id`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body : JSON.stringify({
        email: email,
        password: password})
      }).then(res=>{
      return res.json()
      }).then( res=> {
        return(res)
    })
  },
  addNewLocation(location){
    return fetch(`http://localhost:3000/locations/new`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body : JSON.stringify({
        address: location.address,
        user_id: location.user})
      }).then(res=>{
      return res.json()
      }).then( res=> {
        console.log(res)
        return res
    })
  },
  deleteLocation(location){
    return fetch(`http://localhost:3000/locations/${location}`,{
      method: 'DELETE',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then( r=> r.json() )
  },
  getLocations(user){
    return fetch(`http://localhost:3000/locations?user=${user}`)
      .then( r => r.json())
  },

}
export default ajaxAdapter;
