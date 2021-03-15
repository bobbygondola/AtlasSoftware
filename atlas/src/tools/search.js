import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './search.css';

function Search() {
    const [term, setTerm] = useState("Video Editing Software");
    const [results, setResults] = useState([])

    // Search all of api for results.

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('allOfAPI', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })
            setResults(data.query.search)
        }

        // renders results on initial render. (not needed, can take the timeoutID and cleanup return() => {} outside the if else)
        if (term && !results.length){
            search()
        } else {
            const timeOutId = setTimeout(() => {
                if (term){
                    search()
                }
            }, 500);
    
            return () => {
                clearTimeout(timeOutId)
            };
        }

    }, [term])

    // const renderedResults = results.map((result) => {
    //     return (
    //         <div key={result.pageid} className="item">

    //             <div className="right floated content">
    //                 <a 
    //                 className="ui button"
    //                 href="visit"
    //                 >
    //                     Visit
    //                 </a>
    //             </div>

    //             <div className="content">
    //                 <div className="header">
    //                     {result.title}
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // })

    return (
        <div className="searchComponent">
            <div className="ui form">
                <div className="field">
                    <label>Search</label>
                    <input 
                    className="input"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                     />
                </div>
            </div>
        </div>
    )
}

export default Search