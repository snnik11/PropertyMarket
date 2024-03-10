import { useQuery } from "@tanstack/react-query";
import  config from "../config";
//import { useEffect, useState } from "react";
import { House } from "../types/house";
import axios, { AxiosError } from "axios";

//const useFetchHouses =  () : House[] => {
  //  const [houses, setHouses] = useState<House[]>([]);

    //first parameter takes a function, second take an array with dependencies
    //only when one of the dependencies changes the function will fire
    //since the array now is empty function will only fire once when first rendered
    // useEffect(() => {
    //     const fetchHouses = async () => {
    //         const rsp = await fetch(`${config.baseApiURL}/houses`)
    //         const houses  = await rsp.json();
    //       //  console.log(houses);
    //      //   console.log("this is houses");
    //         setHouses(houses);
    //     }
    //   fetchHouses();
    // }, []); 
  //return houses ;
  

  //better way would be to use axios
    const useFetchHouses = () => {
        //axioserror returns any error
        //useQuery is a hook which uses internal state
        return useQuery<House[], AxiosError> ({
            //queryKey is a cache key here an array to cache the data 
            //cached data can be used in scenario when other component
            queryKey : ["houses"],
            //queryFn gets the data
            queryFn : () => axios.get(`${config.baseApiURL}/houses`).then((resp) => resp.data),
        }) 
    }

    const useFetchHouse = (id : number) => {
      return useQuery<House, AxiosError> ({ queryKey: ["houses", id], queryFn: () => axios.get(`${config.baseApiURL}/house/${id}`).then((resp)=> resp.data), })
    }


export default useFetchHouses;
export {useFetchHouse};