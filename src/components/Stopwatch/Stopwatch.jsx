
import { useEffect , useState } from "react";
import "./Stopwatch.css"


export const Stopwatch = () => {
    const [hours , setHours] = useState(0);
    const [min ,setMin] = useState(0);
    const [sec ,setSec] = useState(0);
    const [mini ,setMini] = useState(0);
    const [print ,setPrint] = useState(false);

var id ;
    useEffect(()=> {
       id = setInterval(()=> {
            setMini((prv)=> {

                if(prv == 100){
                    setSec(sec+1)
                    setMini(0);
                }
                if(sec > 59){
                    setMin(min+1);
                    setSec(0);
                }
                if(min > 59){
                    setHours(hours+1);
                    setMin(0);
                }
                return prv+1;
            })
        },10);

        return () => {clearInterval(id)}
    });



    return (
        <div>
             <h2>Stopwatch</h2>
             <button onClick={() => {setPrint(true)}} className="sub1">START</button>

           
            {
                print ? 
                <h2>{hours<10 ? "0"+ hours : hours} : {min<10 ? "0"+ min : min} : {sec<10 ? "0" + sec : sec} : {mini<10 ? "0"+ mini : mini}
               </h2>
                : null
            }

<div className="D2">
            <button onClick = {
                ()=>{
                    clearInterval(id);
                }
                }>Stop</button>
            <button onClick={()=>{
                clearInterval(0);
                setMin(0);
                setSec(0);
                setHours(0);
                setMini(0);
            }}>Reset</button>
            <button onClick={()=> {
               id = setInterval(()=> {
                setMini((prv)=> {
    
                    if(prv == 100){
                        setSec(sec+1)
                        setMini(0);
                    }
                    if(sec > 59){
                        setMin(min+1);
                        setSec(0);
                    }
                    if(min > 59){
                        setHours(hours+1);
                        setMin(0);
                    }
                    return prv+1;
                })
            },10);
        
            }}>Start</button>
    </div> 
            


        </div>
       
    )
}