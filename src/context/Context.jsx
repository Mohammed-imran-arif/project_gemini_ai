import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props)=>{

    //total 6 state 
    const [input,setInput] = useState("")
    const [recentPrompt,setRecentPrompt] = useState("")
    const [prevPrompt,setPrevPrompt] = useState([])
    const [showResult,setShowResult] = useState(false)
    const [loading,setLoading] = useState(false)
    const [resultData,setResultData] = useState("");

  

    const newChat=()=>{
        setLoading(false)
        setShowResult(false)
        setInput("")
    }

    const onSend = async(prompt)=>{
        
        setResultData(""),/*web page la erukura previous response ah remove pannurathuku */
        setLoading(true),
        setShowResult(true) /* main container cards will hidden response will show */
        
        let response
        if(prompt !== undefined){  // recent tab side bax click panni vara prompt 
            setRecentPrompt(prompt)
            response = await run(prompt)
            
        }else{                    // input la erunthu vara prompt
            setPrevPrompt(prev=>[...prev,input])               
            setRecentPrompt(input) /* namma input la type pannathu web page la icon pakkathula text ah varum */
            
            response = await run(input)
        }
        
        
        /* let responseArr = response.split("**")
        
        let newResponse;
        for (let i=0;i<responseArr.length;i++){
            if(i==0 || i%2 == 0){
                newResponse += responseArr[i]
            }else{
                newResponse+="<b>"+responseArr[i]+"</b>"
            }
        } */ 
       /*  let finalResponse = response.split("**").join("<b>") */
        /* setResultData(response) */ /* new response ah web page la display pannurathuku */
        let newResponseArray=response.split(" ");
        for(let i=0;i<newResponseArray.length;i++){
            const index=i;
            const nextWord=newResponseArray[i]+" ";
            setTimeout(function(){
                setResultData(prev=>prev+nextWord)
            },75*index)
        }
        setLoading(false)
        setInput("")
    }

    
    const ContextValue ={
        onSend  ,
        input,
        setInput,
        recentPrompt,setRecentPrompt,
        prevPrompt,setPrevPrompt,
        showResult,
        loading,
        resultData,
        newChat
    }

    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )


}

export default ContextProvider