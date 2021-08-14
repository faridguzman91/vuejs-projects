var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'These are cheap wool socks',
        image: './img/1200x1071.jpg',
        link: 'https://www.bol.com/nl/nl/p/18-paar-pierre-cardin-herensokken-met-hoog-gehalte-aan-katoen-zwart-43-46/9300000025356074/?Referrer=ADVNLGOO002053-G-119117156342-S-1248283322046-9300000025356074&gclid=CjwKCAjw092IBhAwEiwAxR1lRicKZgioDI1CVKq2Ic_57KXZemlHPzgj8FJimJKXYR7m1iOv9DBlFBoCiAYQAvD_BwE',
        inStock: true,
        inventory: 0,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [{
                variandI: 2234,
                variantColor: "green",
                variantImage: "./img/green.jpg"
            },
            {
                variantId: 2235,
                variantColor: "red",
                variantImage: "./img/red.jpg"
            }
        ],
        sizes: ["5", "10", "20", "30"],
        cart: 0,
    },
    methods: {
        addToCart: function() {
            this.cart += 1
        },
        updateProduct: function(variantImage) {
            this.image = variantImage
        }
    },




})