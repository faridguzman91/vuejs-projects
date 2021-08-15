Vue.component('product', {
    template: `
    <div class="product">

    <div class="product-image">

        <img v-bind:src="image" alt="">
        <a v-bind:href="link">click here</a>
    </div>

    <div class="product-info">
        <h1>{{ title }}</h1>
        <h2>Description: {{ description }}</h2>

        <p v-if="inventory > 10">in stock</p>

        <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p>
        <p v-else>out of stock</p>
        <span v-if="onSale">On sale!</span>

        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box" :style="{ backgroundColor: variant.variantColor }" @mouseover="updateProduct(index)">

            <!--<ul>
                <li v-for="size in sizes">size: {{ size }} </li>
            </ul>-->

        </div>

        <button v-on:click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">+ Add to cart</button>

        <div class="cart">
            <p>Cart ({{ cart }})</p>
        </div>

        <button v-on:click="removeFromCart">
            <p> - Remove</p>
        </button>



    </div>

</div>

    `,
    data() {
        return {
            brand: 'Vue',
            product: 'Socks',
            description: 'These are cheap wool socks',
            selectedVariant: 0,
            link: 'https://www.bol.com/nl/nl/p/18-paar-pierre-cardin-herensokken-met-hoog-gehalte-aan-katoen-zwart-43-46/9300000025356074/?Referrer=ADVNLGOO002053-G-119117156342-S-1248283322046-9300000025356074&gclid=CjwKCAjw092IBhAwEiwAxR1lRicKZgioDI1CVKq2Ic_57KXZemlHPzgj8FJimJKXYR7m1iOv9DBlFBoCiAYQAvD_BwE',
            inStock: true,
            inventory: 0,
            onSale: true,
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [{
                    variantId: 2234,
                    variantColor: "green",
                    variantImage: "./img/green.jpg",
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: "red",
                    variantImage: "./img/red.jpg",
                    variantQuantity: 0
                }
            ],
            sizes: ["5", "10", "20", "30"],
            cart: 0,
        }
    },
    methods: {
        addToCart: function() {
            this.cart += 1
        },
        updateProduct(index) {
            this.selectedVariant = index
        },
        removeFromCart: function() {
            this.cart -= 1
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        onSale() {
            return this.brand + ' ' + this.product
        }
    }
})

var app = new Vue({
    el: '#app'
})