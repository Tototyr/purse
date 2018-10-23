<template src="./market-table.html"></template>
<style lang="scss">
  @import "./market-table.scss";
</style>

<script>
import {HTTP} from '../../utils/services/http-service';

export default {
    name: "MarketTable",
    data() {
        return {
            markets: []
        }
    },
    mounted() {
        HTTP.get('/assets')
            .then((response) => {
                return response.data;
            })
            .then((items) => {
                this.markets = items.data;
                this.followTrades();
            })
            .catch((err) => {
                throw err;
            });
        
    },
    methods: {
        followTrades() {
            const req = `${this.sortedMarketItems.map((item) => item.name.toLowerCase())}`;
            const pricesWs = new WebSocket(`wss://ws.coincap.io/prices?assets=${req}`);
            let self = this;

            pricesWs.onmessage = (msg) => {
                const response = JSON.parse(msg.data);       
                self.updateMarketItems(response);
            }
        },
        updateMarketItems(data) {
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    this.sortedMarketItems.find((item) => item.name.toLowerCase() === key).priceUsd = data[key];
                }
            }
        }
    },
    computed: {
        sortedMarketItems(items) {
            this.markets.sort((x, y) => {
                const quoteX = parseFloat(x.priceQuote).toPrecision(10);
                const quoteY = parseFloat(y.priceQuote).toPrecision(10);

                return quoteY - quoteX;
            });

            return this.markets.slice(0, 15);
        }
    }
}
</script>


