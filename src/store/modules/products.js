export default {
    namespaced: true,
    state() {
        return {
            products: [
                {
                    id: 'p1',
                    image: 'https://www.duckychannel.com.tw/upload/2019_05_112/20190511120502dgnhbl7NU1.png',
                    title: 'Keyboard Ducky 60 Percent',
                    description: 'One 2 Mini RBG Edition',
                    price: 99.99
                },
                {
                    id: 'p2',
                    image: 'https://www.duckychannel.com.tw/upload/2019_05_152/20190515171033vj7f2uVeg1.png',
                    title: 'Keyboard Ducky 60 Percent',
                    description: 'Year Of The Pig Edition',
                    price: 199.99
                }
            ],
        };
    },
    getters: {
        products(state) {
            return state.products;
        }
    }
};