import db from '../models'

let checkfoodname = (foodname) => {
    return new Promise(async(resolve, reject) =>{
        try {
            let food = await db.foods.findOne({
              where: { foodname: foodname}
            })
            if(food){
                resolve(true);
            }
            else{
                resolve(false);
            }
            
        } catch (error) {
            reject(error);   
        }
    })
}


let getAllfoods = (foodId) => {

    return new Promise(async(resolve, reject) =>{
        try {
            let foods = '';
            if(foodId === 'ALL') {

                foods = await db.foods.findAll({
                    
                    attributes: ['id', 'foodname', 'price', 'description', 'imgfood'],
                    raw: true
                });
         

            }
            
            if(foodId && foodId !== 'ALL') {
                foods = await db.foods.findOne({
                    where:{id : foodId},
                })
                   
            }
            resolve(foods);
        
        } catch (error) {
            reject(error);     
        }
    })
    
}
   
let CreateNewfood = (data) =>{
    return new Promise(async(resolve, reject) =>{
        try {
            let check = await checkfoodname(data.foodname);
            if(check==true){
                
                resolve({
                    errCode : 1, 
                    errMessage: 'this foodname is already in used, plz try anothe foodname'
                })
                
            }else{
               
                await db.foods.create({

                    foodname: data.foodname,
                    price: data.price,
                    description: data.description,
                    imgfood: data.imgfood,
                })
    
                resolve({
                    errCode :0 ,
                    message : 'ok'
    
                })
            }
        } catch (error) {
        reject (error); 
            
        }
    })
}

let deletefood = (id) => {
    return new Promise(async(resolve, reject) => {
        let food = await db.foods.findOne({
            where: { id: id}
        })
        if(!food){
            resolve ({ 
                errCode: 2,
                errMessage : `The food isn't exist`
            })
        }
       // awaxit food.destroy();
       await db.foods.destroy({
           where: { id: id}
       });
        
        resolve({ 
            errCode: 0,
            message : `delete successfully'`


        })

        
    })

}

let updatefoodData = (data) => {

    return new Promise(async(resolve, reject) => {
        try {
            if(!data.id){
                resolve({ 
                    errCode: 2,
                    errMessage:'missing required data'
                })
            }
            let food  = await db.foods.findOne({ 
                where : {id : data.id},
                raw : false
            })
            if(food) {
                food.foodname = data.foodname,
                food.email = data.email,
                food.phonenumber = data.phonenumber,
                food.interfaceName = data.interfaceName,
                food.avata = data.avatasinger,
                await food.save();
                    // sername = data.foodname,
                    // mail = data.email,
                    // phonenumber = data.phonenumber,

               // });
                resolve({
                    errCode: 0,
                    message:'updata successfully',
                })
               
            } else{
                resolve(
                    {
                        errCode: 1,
                        errMessage: `food's not found`
                    }
                );
            }

            
        } catch (error) {
            reject(error);
            
        }
    })

}

 

module.exports = {
    getAllfoods: getAllfoods,
    CreateNewfood: CreateNewfood,
    deletefood: deletefood,
    updatefoodData: updatefoodData,
}