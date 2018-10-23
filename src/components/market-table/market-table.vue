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
            })
            .catch((err) => {
                throw err;
            });
        
    },
    methods: {

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


