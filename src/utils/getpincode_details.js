import axios from "axios"

export default async function getpincode_details(pincode,setDistrict,setState,setTownlist,setTownlistHeight) {
    await axios.get(`https://api.postalpincode.in/pincode/${pincode}`)
    .then((result) =>{
           if (!result.data[0].PostOffice) {
              alert("Enter a valid PIN code")
           }
           else{
               setDistrict(result.data[0].PostOffice[0].District)
               setState(result.data[0].PostOffice[0].State)
               setTownlist(result.data[0].PostOffice.map((e) =>{
                   return e.Name
                }))
                setTownlistHeight("flex")
            }
    })
 
}
