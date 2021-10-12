
import React, { useState ,useEffect} from 'react';
import Article from './components/Article';
import Form from './components/Form';
import './App.css'


function App() {

  const[articles, setArticles] =useState([])
  const[editArticle, setEditArticle] =useState(null)
  useEffect(() => {
    fetch('http://127.0.0.1:8000/apis/articles/',{
      'method':'GET',
      headers: {
        'content-Type':'application/json',
        'Authorization':'Token def26336c67d397b6766717657f5c39b2007e61c'
      }
    })
    .then(res => res.json())
    .then(res => setArticles(res))
    .catch(error => console.log(error))
  },[])

  const editBtn = (article) => {
      setEditArticle(article)
  }
  const UpdatedInformation =(article)=> {
    const new_article = articles.map(myarticle => {
      if(myarticle.id === article.id) {
        return article;
      }
      else {
        return myarticle;
      }
    })
    setArticles(new_article)

  }
  const articleForm =()=>{
    setEditArticle({tittle:'',description:''})
  }
  const InsertedInformation = (article) =>{

    const new_article =[...articles,article]
    setArticles(new_article)

  }
  const deleteBtn = (article) =>{
      const new_articles = articles.filter(myarticle => {
        if(myarticle.id === article.id) {
          return false
        }
        return true;
      })
      setArticles(new_articles)
  }
  return (
    <div className="App container ">
    <div className="row">
      <div className="col">
        <h2>Fc Blog</h2>
        <br />

      </div>
      <div className="col">
        <button onClick={articleForm} className='btn btn-success' >Insert Article</button>
      </div>
    </div>
    <br />
    <br />
   <Article articles ={articles} editBtn ={editBtn} deleteBtn={deleteBtn}></Article>
    {editArticle ? 
   <Form article ={editArticle} UpdatedInformation ={UpdatedInformation} InsertedInformation ={InsertedInformation}></Form> : null}
    
     </div>
  );
}

export default App;
