<template src='./market-table.html'></template>
<style lang='scss'>
  @import './market-table.scss';
</style>

<script>
import {HTTP} from '../../utils/services/http-service';
import {socketInstance} from '../../utils/services/socket-service';
import {getPercentageChange} from '../../utils/helpers';

export default {
    name: 'MarketTable',
    data() {
        return {
            markets: []
        };
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
            const pricesWs = socketInstance(req);

            pricesWs.onmessage = (msg) => {
                const response = JSON.parse(msg.data);
                this.updateMarketItems(response);
            };
        },
        updateMarketItems(data) {
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    const unit = this.sortedMarketItems.find((item) => item.name.toLowerCase() === key);
                    this.getDifference(unit, data[key]);
                }
            }
        },
        getDifference(coin, newValue) {
            const diff = getPercentageChange(coin.priceUsd, newValue).toFixed(2);
            const verge = 0.03;

            if (Math.abs(parseFloat(diff)) >= verge) {
                const isLess = parseFloat(diff) < 0;
                return this.fillUnitLine(coin.id, isLess);
            }
        },
        fillUnitLine(elementId, isLess) {
            const elNode = document.getElementById(elementId);
            const colors = {
                less: '#ff8080',
                better: '#99e699'
            }
            
            elNode.animate(
                [
                    { background: 'transparent' },
                    { background: (isLess) ? colors.less : colors.better },
                ],
                {
                    duration: 1000
                }
            );
            
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


