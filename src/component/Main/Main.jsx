import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'


const Main = () => {

    const {onSend,input,setInput,recentPrompt,resultData,showResult,loading,} = useContext(Context)

  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini AI</p>
             <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
           {!showResult?
           <>
             <div className="greet">
                <p><span>Hello,Dev</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on a upcoming road trips</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summarize this concept: urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Improve the readability of the following code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
           </>:
           <div className="result">
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className='result-response'>
                    <img src={assets.gemini_icon} alt="" />
                    {loading?
                    <div className='loaders'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                   : 
                   /* <div className="pre-container">
                    <pre dangerouslySetInnerHTML={{__html:resultData}}></pre>
                   </div> */
                   <pre dangerouslySetInnerHTML={{__html:resultData}}></pre>
                    
                    }
                </div>
           </div>
           }
            <div className="main-bottom">
                <div className="searchbox">
                    <input onChange={(e)=>{setInput(e.target.value)}} value={input} type="text" placeholder='Enter a prompt here'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img onClick={()=>onSend()} src={assets.send_icon} alt="" />:null} 
                        {/* namma onSend() mattum kuta kudukalam but context.jsx la run(input) kudukanum*/}
                    </div>
                    </div>
                <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps.
                    </p>
            </div>
        </div>
    </div>
  )
}

export default Main