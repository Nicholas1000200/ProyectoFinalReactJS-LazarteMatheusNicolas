import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import  ItemList  from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

 export const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error =>{
                console.error(error)
            })
    }, [categoryId])
    return (
        <div>
            <h1>{greetings}</h1>
            <ItemList products={products}/>
        </div>
    )
}