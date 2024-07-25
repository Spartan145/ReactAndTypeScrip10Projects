export function formatCurrency(quantity : number){
    return new Intl.NumberFormat('en-US', {//We may change the the language code to make this dynamic
        style: 'currency', currency: 'USD'
    }).format(quantity)
}