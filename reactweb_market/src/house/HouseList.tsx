
import ApiStatus from "../apiStatus";
import { currencyFormatter } from "../config";
import useFetchHouses from "../hooks/HouseHooks";


const HouseList = () => {
    //const houses = useFetchHouses();   
    const { data, status , isSuccess} = useFetchHouses(); //data is variable here coming from HouseHooks.ts
   
    if (!isSuccess)
        return (<ApiStatus status = {status}/>
        )
       

    return (
        <div>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses currently on the market
                </h5>
            </div>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th> Address</th>
                        <th> Country </th>
                        <th> Bidding Price</th>
                    </tr>
                </thead>
                <tbody>
                {/* houses earlier instead of data */}
                    {data && data.map((h) => (
                        //key used here to keep track fo each rendered item
                        <tr key = {h.id}>
                            <td>{h.address}</td>
                            <td>{h.country}</td>
                            <td>{currencyFormatter.format(h.price)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     
    )
    
}

export default HouseList;