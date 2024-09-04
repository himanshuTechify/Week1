const arr =  [29, 295, 103, -15, 100, -23, -19, 67, 30, 44, 87, -55, 16, -250]
let len = arr.length;
const result = []
 
const sum = 48 	;
 
const solve = (arr) =>{
	
	for(let i=0; i<len; i++){
		
		for(let j=i+1; j< len; j++){
			
			if(arr.at(i)+ arr.at(j) === sum ) result.push([arr.at(i), arr.at(j)])
		}
	}
}
 
solve(arr);
 
for(const value of result){
	console.log(value)
}