// Tempature of year 2022
let Temp= [72,78,92,56,45,48,91,78,56,59,48,72]
// using map function 
let p1 = Temp.map
(
    function(point)
    {
        return 100-point
    }
)
console.log(p1)

// using filters()
let p2 = Temp.filter
(
    function(point)
    {
        return point > 60
    }
)
console.log(p2)