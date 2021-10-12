import React from 'react';
import APIser from '../APIser';
import {useCookies} from 'react-cookie';

function Article(props) {
    const[token] = useCookies(['mytoken'])

    const editBtn =(article) => {
        props.editBtn(article)
    }
    const deleteBtn =(article) =>{
        APIser.DeleteArticle(article.id,token['mytoken'])
        .then(()=> props.deleteBtn(article))
       
    }
    
    return (
        <div>
            

        {props.articles && props.articles.map(article => {
          return (
        <div key ={article.id}>
        <h1>{article.tittle}</h1>
        <h3>{article.description}</h3>
        <div className='row'>
            <div className="col-md-1">
            <button className='btn btn-primary'onClick={()=>editBtn(article)} >Update</button>

            </div>
            <div className="col">
            <button onClick={()=>deleteBtn(article)} className='btn btn-primary'>Delete</button>

            </div>

        </div>
        <hr className='bg-danger'/>
        </div>
      )
     })}
        </div>
     );
}

export default Article;