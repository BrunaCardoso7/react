import React from "react";
import './Hello.css';

const Hello = ({ children })=>{
    return(
        <>
            { children }
        </>
    );
}
export { Hello }
// export default function Hello({ children }){
//     return(
//         <>
//             {children}
//         </>
//     );
// }