
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
//material ui
//components
import ResourceList from "../resourceList/ResourceList";
//firebase import
import db from '../../firebase'
import { collection, getDocs } from "firebase/firestore";
import './resourcelistcontainer.css'

const ResourcesListContainer =() =>{
    const params = useParams();
    const [prod, setProd] = useState([]);
    const [loading, setLoading] = useState(false);
    const categories = ['Youtube-Twitch', 'Series-Pelis', 'Servidores', 'Academias-Cursos', 'Anime-Manga'];
  
    useEffect(() => {
      setLoading(true);
  
      async function getProd (db){
        const prodFirestore = await getDocs(collection(db, "resources"));
        const productsFirestore = prodFirestore.docs.map((doc) => {
          let product = doc.data();
          product.id = doc.id;
          return product;   // contiene toda la info del producto + id  
          
        });
  
        const products = params.categoryId
          ? productsFirestore.filter(
              (item) => item.category === params.categoryId,
            )
          : productsFirestore;
  
        setProd(products);
        setLoading(false);
      };
      getProd(db);
    }, [params.categoryId, prod.id]);
  
    return (
        <div className="category">
          
          {categories.map((category) => {
            return (
              <>
              
                <Link to={`/Dashboard/${category}`} key={category}>
                  <button className="buttonCat">{category} </button>
                </Link>
              </>
            );
          })}
          
   <ResourceList data={prod} loader={loading}  />
      </div>
    );
  };

  
export default ResourcesListContainer;