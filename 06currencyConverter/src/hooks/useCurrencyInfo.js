import {useEffect , useState} from 'react'




function useCurrencyInfo(currency){
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    const [data , setData ] = useState({})
    useEffect(()=>{
        fetch(url)
        .then( (res)=>{
            return res.json()
        })
        .then((res)=> setData(res[currency]))
        console.table(data)
    }, [currency])

    console.log(data);
    return data;
}


export default useCurrencyInfo;