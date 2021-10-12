
export default class APIser {
    static updateArticle(article_id,body,token){
        return fetch(`http://127.0.0.1:8000/apis/articles/${article_id}/`,{
            'method':'PUT',
            headers: {
              'content-Type':'application/json',
              'Authorization':`Token ${token}`
            },
            body:JSON.stringify(body)
        }).then(res => res.json())
    }

    static insertArticle(body,token) {

        return fetch(`http://127.0.0.1:8000/apis/articles/`,{
            'method':'POST',
            headers: {
              'content-Type':'application/json',
              'Authorization':`Token ${token}`
            },
            body:JSON.stringify(body)
        }).then(res => res.json())
        

    }


    static DeleteArticle(article_id,token) {
        return fetch(`http://127.0.0.1:8000/apis/articles/${article_id}/`,{
            'method':'DElETE',
            headers: {
              'content-Type':'application/json',
              'Authorization':`Token ${token}`
            },
       
        })
    }

    static loginUser(body) {

        return fetch(`http://127.0.0.1:8000/auth/`,{
            'method':'POST',
            headers: {
              'content-Type':'application/json',
             
            },
            body:JSON.stringify(body)
        }).then(res => res.json())
        

    }
}