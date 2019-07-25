/**
 * @description 该文件封装了数据库连接操作
 */

const mysql = require('mysql');
const mysql_config = require('./dbConfig');

const pool = mysql.createPool(mysql_config);

function responseDoReturn(res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }

};

/**
 * 封装query之sql带不占位符func
 */
function query(sql, callback) {
    pool.getConnection(function (err, connection) {
        if (err) {
            callback(err, null, null);
        } else {
            console.log("数据库连接成功");
            connection.query(sql, function (err, rows) {
                connection.release();
                callback(err, rows);               //释放链接
            });
        }

    });
}

/**
 * 封装query之sql带占位符func
 */
function queryArgs(sql, args, callback) {
    pool.getConnection(function (err, connection) {
        if (err) {
            callback(err, null, null);
        } else {
            connection.query(sql, args, function (err, rows) {
                connection.release();
                callback(err, rows);
            });
        }

    });
}

//exports
module.exports = {
    query: query,
    queryArgs: queryArgs,
    doReturn: responseDoReturn
}

