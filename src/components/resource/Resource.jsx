import {Link} from 'react-router-dom';
// Semantic UI
import {Card, Icon, Image} from 'semantic-ui-react';
import { Button} from 'semantic-ui-react'
//Styles
import styled from "styled-components";


const Resource= ({data}) => {
    return (
        <Container>
                <Wrap key={data.id}>
                  <Link to={`/item/${data.id}`}>
                    <img src= {data.cardImg} alt={data.title} />
                  </Link>
                  </Wrap>
              
        </Container>
      );
    };
    
    const Container = styled.div`
      padding: 0 0 26px;
    `;
 
    const Wrap = styled.div`
      padding-top: 56.25%;
      border-radius: 10px;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      cursor: pointer;
      overflow: hidden;
      position: relative;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      border: 3px solid rgba(249, 249, 249, 0.1);
      
      img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
        
      }
      &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
          rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
      }
    `;

  export default Resource;