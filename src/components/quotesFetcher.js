import React,{useState,useEffect} from "react"

function FetchQuote() {
    const [quote,setQuote] = useState('');
    const [author,setAuthor]= useState('');

    useEffect(()=>{
        getQuote();
       const intervalID = setInterval(()=>{
        getQuote()
       }, 24 * 60 * 60 * 1000);
    return ()=>{
        clearInterval(intervalID);
    }
    },[])
    function getQuote() {
        fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data=>{
            console.log(`${data.content} —${data.author}`)
            setQuote(data.content);
            setAuthor(data.author);
        })
    }
return(
    <>
    <div className="QuoteText"><h4>"{quote}"</h4></div>
    <div className="Author"><h5>- {author}</h5></div>
    </>
)
}
export default FetchQuote