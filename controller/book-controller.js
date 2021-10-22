book=[]
category=[]

const getallcategory=(request,response)=>{
    response.json(category)
}

const getallbooks=(request,response)=>{
    response.json(books)
}

const storecategory=(request,response)=>{
    category.push(request.body)
    response.status(201).json(request.body)
}

const storebooks=(request,response)=>{
    books.push(request.body)
    response.status(201).json(request.body)
}

const getbycategory=(request,response)=>{
    let catid=category.find(catid=>catid.id === parseInt(request.params.id))
    if (!catid) {
       return response.status(404).json({
           error:"ERROR!! ERROR!! ERROR!!  The category with the given ID was not found."
       })
       }
   
       response.json(catid)
}
module.exports={
    getallcategory,
    getallbooks,
    storebooks,
    storecategory,
    getbycategory
}