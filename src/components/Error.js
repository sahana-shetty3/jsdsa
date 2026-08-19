import { useRouteError } from "react-router-dom";

const Error =()=>{

    const err=useRouteError();
    console.log(err);
    return(
        <div>
            <div>
                <h1>Ooops Something went wrong!!!</h1>
                <h3>{err.status}:Page {err.statusText}</h3>
            </div>
        </div>
    )
}
export default Error;