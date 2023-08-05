let names = ["chinmay", "deshpande", 22, 33]
let info = {    "firstName": "chinmay",
    "lastName": "deshpande",    "age": 22,
    "rollNo": 33}
// retrive  (dot notation and bracket notation)
console.log(info.firstName)
console.log(info['firstName'])
// add (dot notation and bracket notation)info.city = "pune"
info['language'] = "hindi"
console.log(info)
// update (dot notation and bracket notation)info.city = "nagpur"
info['language'] = "marathi"
console.log(info)
// delete(dot notation and bracket notation)delete info.city 
delete info['language']
console.log(info)

