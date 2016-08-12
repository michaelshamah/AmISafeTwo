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
    console.log(address)
    return fetch(`http://localhost:3000/felonies?address=${address}`, {
    method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    }).then(res=>{
      return res.json()
    }).then( res=> {
      return res
    })
  }
}
export default ajaxAdapter;
