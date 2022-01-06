import foodSevice from '../services/foodSevice';



let handleGetAllfood = async(req, res) => {
    let id = req.query.id; 
    if(!id){
        return res.status(200).json({
            errCode : 1,
            errMessage :'missing required parameters',
            food:[]
        })
    }
    let foods = await foodSevice.getAllfoods(id);
    return res.status(200).json({
        errCode : 0,
        errMessage :'ok',
        foods
    })

}


let handleCreateNewfood = async (req, res) =>{
    let message = await foodSevice.CreateNewfood(req.body);
    return res.status(200).json(message);

}

//let handleEditfood async (req, res) =>{}


let handleDeletefood = async (req, res) =>{
    if(!req.body.id){
        return res.status(200).json({
             errCode: 1,
             errMessage: 'missing required parameter !'

        })
    }
    let message = await foodSevice.deletefood(req.body.id);
    return res.status(200).json(message);
}

let handleEditfood = async(req, res) => {
    let data = req.body;
    let message = await foodSevice.updatefoodData(data);
    return res.status(200).json(message);
    
 

}













module.exports ={
    handleGetAllfood: handleGetAllfood,
    handleCreateNewfood: handleCreateNewfood,
    handleDeletefood: handleDeletefood,
    handleEditfood: handleEditfood,
}