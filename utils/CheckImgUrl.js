/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangxiangyu
 * @Date: 2022-01-21 13:59:41
 * @LastEditors: zhangxiangyu
 * @LastEditTime: 2022-01-21 14:23:46
 */
export const is_legal_img_url = (imgurl) => {
    return new Promise(function (resolve, reject) {
        var ImgObj = new Image(); // 生成一个Image对象
        ImgObj.src = imgurl;
        ImgObj.onload = function (res) {
            console.log(14, res)
            resolve(true); //  图片显示正常  就直接返回
            
        }
        ImgObj.onerror = function (err) {
            console.log(19, err)
            resolve(false) //  图片异常 就返回另一张图片
        }
    })
};