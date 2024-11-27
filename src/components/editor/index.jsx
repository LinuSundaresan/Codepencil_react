import './editor.css';
import { useState, useEffect } from 'react'

const Editor = () => {

    const [html , setHtml] = useState("");
    const [css , setCss] = useState("");
    const [js , setJs] = useState("");
    const [codePenCode , setcodePenCode] = useState("");

    useEffect(() => {

        setcodePenCode(
            `
            <html>
                <head>
                    <style>${css}</style>
                </head>
                <body>${html}</body>
                <script>${js}</script>

            </html>
            `
        );
    }, [html, css, js]);

    return (
        <div className='container'>
        <div className='header'>
            <img src="./logo.png" alt="" style={{'width':'10%'}}/>
        </div>

            <div>
                <div className='input-container'>
                    <textarea name="html" id="html" value={html} onChange={(e)=>{setHtml(e.target.value)}} placeholder='html' className='input'></textarea>
                    <textarea name="css" id="css" value={css} onChange={(e)=>{setCss(e.target.value)}} placeholder='css' className='input'></textarea>
                    <textarea name="js" id="js" value={js} onChange={(e)=>{setJs(e.target.value)}} placeholder='js' className='input'></textarea>
                </div>
                <div className='output'>
                    <h3>Output</h3>
                    <iframe srcDoc= {codePenCode}
                    title="Output"
                    sandbox='allow-scripts'
                    width='100%' 
                    height='100%'
                    />
                </div>
            </div>
        
        </div>
    )
}

export default Editor
