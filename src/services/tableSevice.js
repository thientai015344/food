import db from '../models'

let checknumbertable = (numbertable) => {
    return new Promise(async(resolve, reject) =>{
        try {
            let table = await db.tables.findOne({
              where: { numbertable: numbertable}
            })
            if(table){
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


let getAlltables = (tableId) => {

    return new Promise(async(resolve, reject) =>{
        try {
            let tables = '';
            if(tableId === 'ALL') {

                tables = await db.tables.findAll({

                    attributes: ['id', 'numbertable',],
                        raw: true

                });

            }
            
            if(tableId && tableId !== 'ALL') {
                tables = await db.tables.findOne({
                    where:{id : tableId},
                    attributes: ['id', 'numbertable',],
                    raw: true
                })
                   
            }
            resolve(tables);
        
        } catch (error) {
            reject(error);     
        }
    })
    
}
   
let CreateNewtable = (data) =>{
    return new Promise(async(resolve, reject) =>{
        try {
            let check = await checknumbertable(data.numbertable);
            if(check==true){
                
                resolve({
                    errCode : 1, 
                    errMessage: 'this numbertable is already in used, plz try another numbertable'
                })
                
            }else{
                
                await db.tables.create({
    
                    numbertable: data.numbertable,
                   
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

let deletetable = (id) => {
    return new Promise(async(resolve, reject) => {
        let table = await db.tables.findOne({
            where: { id: id}
        })
        if(!table){
            resolve ({ 
                errCode: 2,
                errMessage : `The table isn't exist`
            })
        }
       // awaxit table.destroy();
       await db.table.destroy({
           where: { id: id}
       });
        
        resolve({ 
            errCode: 0,
            message : `delete successfully'`


        })

        
    })

}

let updatetableData = (data) => {

    return new Promise(async(resolve, reject) => {
        try {
            if(!data.id){
                resolve({ 
                    errCode: 2,
                    errMessage:'missing required data'
                })
            }
            let table  = await db.tables.findOne({ 
                where : {id : data.id},
                raw : false
            })
            if(table) {
                table.numbertable = data.numbertable,        
                await table.save();
                    // sername = data.numbertable,
                    // mail = data.email,
                    // phonenumber = data.phonenumber,

               // });
               
               
            } else{
                resolve(
                    {
                        errCode: 1,
                        errMessage: `table's not found`
                    }
                );
            }

            
        } catch (error) {
            reject(error);
            
        }
    })

}

    
    










module.exports = {
    getAlltables: getAlltables,
    CreateNewtable: CreateNewtable,
    deletetable: deletetable,
    updatetableData: updatetableData,
}