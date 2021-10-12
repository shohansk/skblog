
export default class APIser {
    static updateArticle(article_id,body){
        return fetch(`http://127.0.0.1:8000/apis/articles/${article_id}/`,{
            'method':'PUT',
            headers: {
              'content-Type':'application/json',
              'Authorization':'Token def26336c67d397b6766717657f5c39b2007e61c'
            },
            body:JSON.stringify(body)
        }).then(res => res.json())
    }

    static insertArticle(body) {

        return fetch(`http://127.0.0.1:8000/apis/articles/`,{
            'method':'POST',
            headers: {
              'content-Type':'application/json',
              'Authorization':'Token def26336c67d397b6766717657f5c39b2007e61c'
            },
            body:JSON.stringify(body)
        }).then(res => res.json())
        

    }


    static DeleteArticle(article_id) {
        return fetch(`http://127.0.0.1:8000/apis/articles/${article_id}/`,{
            'method':'DElETE',
            headers: {
              'content-Type':'application/json',
              'Authorization':'Token def26336c67d397b6766717657f5c39b2007e61c'
            },
       
        })
    }
}