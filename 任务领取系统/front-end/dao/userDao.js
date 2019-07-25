
const db = require('../util/db');
const sql = require('../util/userSqlCommand');

/**
 * @description 查询所有的user
 * @param req
 * @param res
 * @param callback
 */
function queryAllUser(req,res,callback) {
    let result = {};
    db.query(sql.userSql.selectAllUser,function (err,rows) {
        if(err){
            result = {
                "code":201,
                "msg":"err:"+err
            }
        }else{
            result = {
                "code":200,
                "msg":"success",
                "data":rows
            }
        }
        callback(result);
    })
}

/**
 * @description 根据name查询user
 * @param req为请求对象，req.body.name获取请求参数
 * @param res
 * @param callback
 */
function queryUserByName(req, res, callback){
    let result = {};
    let args = [req.body.name];
    db.queryArgs(sql.userSql.selectUserByName, args, function (err,rows) {
        if(err){
            result = {
                "code":201,
                "msg":"err:"+err
            }
        }else{
            result = {
                "code":200,
                "msg":"success",
                "data":rows
            }
        }
        callback(result);
    })
}
module.exports={
    queryAllUser,
    queryUserByName
}