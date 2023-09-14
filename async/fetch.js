class  IbrahimHTTP{
    async get(url_link){
        const res = await fetch(url_link);
        const resData = await res.json();
        return resData;
    }

    async post(url_link,playload){
        const res = await fetch(url_link, {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },

            body:JSON.stringify(playload)
        })
        const resData = await res.json();
        return resData;
    }
}

