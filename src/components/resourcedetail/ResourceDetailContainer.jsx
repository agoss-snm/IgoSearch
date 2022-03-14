import React, { useState, useEffect } from "react";
import  ResourceDetail from './ResourceDetail'
import { useParams } from "react-router-dom";
//firebase
import { doc, getDoc } from "firebase/firestore";
import db from '../../firebase'
import Header from "../Header";
import styled from 'styled-components';


export default function ResourceDetailContainer() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getProduct(db) {
      const docRef = doc(db, "resources", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        let producto = docSnap.data();
        producto.id = docSnap.id;
        setProduct(producto);
      } else {
        console.log("No such document!");
      }
    }

    getProduct(db);
  }, [id]);

  return (
      <>
        <Header/>
        <Container>
      <ResourceDetail data={product} />
    </Container>
    </>
  );
}


const Container= styled.main `
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);`