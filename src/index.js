// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var result = {};
    var array = ['H', 'Q', 'D', 'N', 'P'];
    var coins = {H : 50, Q : 25, D : 10, N : 5, P : 1};

    if (currency >= 10001) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else if (currency <= 0) {
        return result;
    }

    for (var i = 0; i < array.length; i++) {
        result[array[i]] = Math.trunc(currency/coins[array[i]]);
        if (result[array[i]] <= 0){
            delete result[array[i]];
        }
        currency = currency % coins[array[i]];
    }
    return result;
}
