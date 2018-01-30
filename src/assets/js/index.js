// 修改图片禁止访问问题
export function attachImageUrl(srcUrl){
    if (srcUrl !== undefined) {
        return srcUrl.replace(/http\w{0,1}:\/\/p/g, "https://images.weserv.nl/?url=p");
    }
}
