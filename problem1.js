const numbers=[1,2,3,4,5,6,78,9,90,56,89,34,54,24]
const oddEven=(array)=>{
    let eventNumber=[]
    let oddNumber=[]
    for(let i=0;i<array.length;i++){
        const element=array[i];
        if(element%2==0){
            eventNumber.push(element)
        }
        else{
            oddNumber.push(element)
        }
        return eventNumber
    }
}
const result=oddEven(numbers)
console.log(result)