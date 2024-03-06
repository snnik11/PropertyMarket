const config = 
{
    baseApiURL : "http://localhost:4000"
     
}

const currencyFormatter = Intl.NumberFormat("en-US",
{
    style : "currency",
    currency: "AUD",
    maximumFractionDigits: 0
})

export default config;
export {currencyFormatter};

