const router = require('express').Router();
const axios = require ('axios')

const url = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API}`
// const getData = async (url) => {
//     try {
//       const response = axios.get(url)
//       const data = response.data
//       return data
//     } catch (error) {
//       console.log(error)
//     }
//   }

router.get("/", function (req, response) {
    
    axios.get(url)
    .then(res => {
        response.send(res.data)
    })
})


module.exports = router;