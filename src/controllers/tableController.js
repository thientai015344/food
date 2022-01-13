import tableSevice from '../services/tableSevice';



let handleGetAlltable = async(req, res) => {
    let id = req.query.id; 
    if(!id){
        return res.status(200).json({
            errCode : 1,
            errMessage :'missing required parameters',
            table:[]
        })
    }
    let tables = await tableSevice.getAlltables(id);
    return res.status(200).json({
        
        tables
    })

}


let handleCreateNewtable = async (req, res) =>{
    let message = await tableSevice.CreateNewtable(req.body);
    return res.status(200).json(message);

}

//let handleEdittable async (req, res) =>{}


let handleDeletetable = async (req, res) =>{
    if(!req.body.id){
        return res.status(200).json({
             errCode: 1,
             errMessage: 'missing required parameter !'

        })
    }
    let message = await tableSevice.deletetable(req.body.id);
    return res.status(200).json(message);
}

let handleEdittable = async(req, res) => {
    let data = req.body;
    let message = await tableSevice.updatetableData(data);
    return res.status(200).json(message);
    
 

}













module.exports ={
    handleGetAlltable: handleGetAlltable,
    handleCreateNewtable: handleCreateNewtable,
    handleDeletetable: handleDeletetable,
    handleEdittable: handleEdittable,
   
}