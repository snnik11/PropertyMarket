type Args = 
{
    status : "idle" |"success" | "error" | "pending";
};

//destruct the status
const ApiStatus = ({status}: Args) => 
{
     switch (status) 
     {
        case "error" :
            return <div> Error communicating with data backend</div>;
        case "idle" :
            return             <div>Idle</div>;
        case "pending" :
            return             <div> Loading..</div>;
        default : 
            throw Error("Unknown API state");
        
     }
}

export default ApiStatus;