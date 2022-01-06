import db from '../models'
import bcrypt  from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

let hashUserPasswords = (password) => {
    return new Promise( async (resolve, reject) => {

        try {       
            var hashPassword =  await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
            
        } catch (error) {
            reject(error);
            
        }
    })
    
}



let handleUserLogin = (foodname, password) =>{
    return new Promise(async(resolve, reject) =>{
        try {
            let userData ={};

            let isExist = await checkfoodname(foodname);
            if(isExist) {
                let user = await db.user.findOne({
                    where: {foodname: foodname},
                    attributes: ['id', 'roleId', 'password'],
                    raw: true

                });
                if(user){
                   let check = await bcrypt.compareSync(password, user.password);
                    if(check){
                     
                        userData.errCode = 0;
                        userData.errMessage = 'Ok';
                        delete user.password;
                        userData.user = user;
                        
                    }
                    else {
                        userData.errCode = 3;
                        userData.errMessage = 'sai mật khẩu'
                    }
                }else{
                    userData.errCode = 2;
                    userData.errMessage = `User's not found`;
                }
                
           
            }
            else{

                userData.errCode = 1;
                userData.errMessage =`Your's foodname isn't exist your system. please try other foodname !`;
              
            }
            resolve(userData);
            
        } catch (error) {
            reject(error);
            
        }
    })
}


let checkfoodname = (foodname) => {
    return new Promise(async(resolve, reject) =>{
        try {
            let user = await db.user.findOne({
              where: { foodname: foodname}
            })
            if(user){
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

                foods = await db.foods.findAll();
         

            }
            
            if(foodId && foodId !== 'ALL') {
                foods = await db.user.findOne({
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
                let hashPasswordFromBcrypt = await hashUserPasswords(data.password);
                
                await db.user.create({
    
                    foodname: data.foodname,
                    email: data.email,
                    phonenumber: data.phonenumber,
                    roleId: data.roleId,
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

let deleteUser = (id) => {
    return new Promise(async(resolve, reject) => {
        let user = await db.user.findOne({
            where: { id: id}
        })
        if(!user){
            resolve ({ 
                errCode: 2,
                errMessage : `The user isn't exist`
            })
        }
       // awaxit user.destroy();
       await db.user.destroy({
           where: { id: id}
       });
        
        resolve({ 
            errCode: 0,
            message : `delete successfully'`


        })

        
    })

}

let updateUserData = (data) => {

    return new Promise(async(resolve, reject) => {
        try {
            if(!data.id){
                resolve({ 
                    errCode: 2,
                    errMessage:'missing required data'
                })
            }
            let user  = await db.user.findOne({ 
                where : {id : data.id},
                raw : false
            })
            if(user) {
                user.foodname = data.foodname,
                user.email = data.email,
                user.phonenumber = data.phonenumber,
                user.interfaceName = data.interfaceName,
                user.avata = data.avatasinger,
                await user.save();
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
                        errMessage: `user's not found`
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
    deleteUser: deleteUser,
    updateUserData: updateUserData,
}