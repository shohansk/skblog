import React, { useEffect, useState } from 'react';
import {useCookies} from 'react-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import APIser from '../APIser';

function Form(props) {
    const [tittle,setTitle] = useState('')
    const [description,setDescription] = useState(props.article.description)
    const[token] = useCookies(['mytoken'])

    const updateArticle = () => {
        APIser.updateArticle(props.article.id,{tittle,description},token['mytoken'])
        .then(res =>props.UpdatedInformation(res))
    }
    useEffect(() =>{
         setTitle(props.article.tittle)
         setDescription(props.article.description)
    },[props.article])

    const insertArticle= ()=> {
        APIser.insertArticle({tittle,description},token['mytoken'])
        .then(res =>props.InsertedInformation(res))

    }
    return (
        <div>
            <h1>form</h1>
            {props.article ? (
                <div className="mb-3">
                    <label htmlFor ="title" className= "form-level">Title</label>
                    <input type='text' className ='form-control' id="title" placeholder ='please Enter The Title' 
                    value={tittle}
                    onChange ={e=> setTitle(e.target.value)}
                    
                    ></input>

                    <label htmlFor ="description" className= "form-level">Description</label>
                    <textarea className ="form-control" id="description" rows="5"
                    
                    value={description}
                    onChange ={e=> setDescription(e.target.value)}
                    
                    >

                    </textarea>
                    <br />
                    {
                        props.article.id ?  <button onClick={updateArticle} className="btn btn-success">Update</button>
                        :  <button onClick={insertArticle} className="btn btn-success">Insert</button>
                    }
                   

                </div>
            ) : null}
        </div>
    );
}

export default Form;