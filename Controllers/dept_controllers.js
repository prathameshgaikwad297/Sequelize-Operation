
const db=require('../Models');
const dept=db.dept;
module.exports={
    getAllDept:(req,res)=>{
        // sequelize.query('select * from users');

        dept.findAll().then((emp)=>{
            res.send(emp);
        }).catch((err)=>{
            res.send(err.message);
        })
    },

    createDept:(req,res)=>{
        // sequelize.query('select * from users');
        
        dept.create({dName:req.body.dName}).then((Newdept)=>{
            res.send(Newdept);
        }).catch((err)=>{
            res.send(err.message);
        })
    }, 
    updateDept:(req, res)=>{
        let id=req.params.id;
        users.update({dName:req.body.dName},{where:{deptId:id}}).then((data) => {
            if(data>0){
                res.send({error:false, message:"dept updated"});
            }else{
                res.send({error:false, message:"dept not updated"}); 
            }
    
        }).catch((err) => {
            res.send(err);
          });
      }, 
      deleteDept:(req, res)=>{
        let id=req.params.id;
        dept.destroy({where:{deptId:id},truncate:false}).then((data) => {
            if(data>0){
                res.send({error:false, message:"dept deleted"});
            }else{
                res.send({error:false, message:"dept not deleted"}); 
            }
    
        }).catch((err) => {
            res.send(err);
          });
      }
}