export default {
    state: {
        cartList: []
    },
    mutations: {
        addCount(state, payload) {
            //有重复的，数量加1
            payload.count += 1
        },
        addToCart(state, payload) {
            //商品数量：没有就直接添加进去，数量为1
            payload.count = 1
                //商品加入购物车默认选中，见购物车商品前面的按钮
            payload.isChecked = true //这个属性之所以在商品里面直接定义，是因为修改的时候也是修改这里的
            state.cartList.push(payload)
        }
    },
    getters: {
        cartLength(state) {
            return state.cartList.length
        }
    },
    actions: {
        addpro(context, payload) {
            return new Promise(resolve => {
                //判断新添加的商品的id有没有和添加过的重复的，一开始里面有这个商品，就把数量加1
                let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
                if (oldProduct) {
                    context.commit('addCount', oldProduct)
                    resolve('此商品数量加1')
                } else {
                    context.commit('addToCart', payload)
                    resolve('已添加此商品')
                }
                //mutations唯一的目的就是修改state中的状态，mutations中的每一个方法尽可能完成的事情单一一点，所以他把拿到actions里面，并且判断里面的两个功能分别放在mutations里面的两个函数
            })
        }
    }
}