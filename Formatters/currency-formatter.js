const formatNumber = (x, amountAfterComma) => {
    return x.toFixed(amountAfterComma).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
