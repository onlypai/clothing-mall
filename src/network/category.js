import { request2 } from './request'
//请求分类页面相关信息
// 1、左边分类列表
export function getCategoryList() {
    return request2({
        url: '/category'
    })
}
//2、右边分类商品中的列表商品
export function getCategoryTable(maitKey) {
    return request2({
        url: '/subcategory',
        params: {
            maitKey
        }
    })
}
//3、流行新款精品
export function getCategoryGoods(miniWallkey, type) {
    return request2({
        url: '/subcategory/detail',
        params: {
            miniWallkey,
            type
        }
    })
}