import { request2 } from './request'
//根据商品id请求的商品信息
export function getDetail(iid) {
    return request2({
        url: '/detail',
        params: {
            iid
        }
    })
}
//请求推荐商品信息
export function getRecommend() {
    return request2({
        url: '/recommend'
    })
}


//商品数据整合，封装成类，一次性传入子组件
//ES6里面定义类
export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.columns = columns;
        this.services = services;
        this.nowPrice = itemInfo.lowNowPrice;
    }
}

//店铺数据
export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods
    }
}

//商品参数
export class GoodsParam {
    constructor(info, rule) {
        // 注: images可能没有值(某些商品有值, 某些没有值)
        this.image = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}