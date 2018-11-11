const _data =[
    {id:"1",name:"ipnonex",price:"10000",inventory:"2"},
    {id:"2",name:"ipnone4",price:"8000",inventory:"5"},
    {id:"3",name:"ipnone5",price:"6000",inventory:"8"},
    {id:"4",name:"ipnone6",price:"1000",inventory:"15"}
    ,
]
export default ()=>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(_data)
        }, 1000);
    })
}