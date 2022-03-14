import './Login.css'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

const Login=(props)=>{

    return(
       <Container>
        <Content>
            <CTA>
                <CTALogoOne src='/images/igo.png' alt=''/>
                <NavLink to='/Dashboard' id='Navv'>ENTRAR</NavLink>
                <Description>
                   Ten acceso a toda la información y recursos que necesitas sobre el juego de Go, películas, series, streamers, servidores y mucho más!  totalmente gratuito
                </Description>
                
            </CTA>
            <BgImage/>
        </Content>
       </Container>
    )
};

const Container= styled.section `
overflow: hidden;
display:flex;
flex-direction: column;
text-align:center;
height:100vh;
`;

const Content= styled.div `
margin-bottom:10vw;
width:100%;
position: relative;
min-height: 100vh;
box-sizing:border-box;
display:flex;
justify-content: center;
align-items:center;
flex-direction:column;
padding: 80px 40px;
height:100%;

`;

const BgImage= styled.div `
height:100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url('/images/home-background.png');
top: 0;
right: 0;
left: 0;
z-index:-1;
position: absolute;



`;

const CTA= styled.div `
margin-bottom: 2vw;
max-width: 550px;
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content:center;
margin-top: 0;
align-items: center;
text-align: center;
margin-right: auto;
margin-left:auto;
transition-timing-function: ease-out;
transition: opacity 0.2s;
width: 100%;     // cambiar tama;o  del goke
`;

const CTALogoOne= styled.img `
animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-top: 5px;
margin-bottom: 12px;
max-width: 250px;
min-height: 1px;
display: block;
width: 100%; 
@keyframes floating {
    from { transform: translate(0,  0px); }
    65%  { transform: translate(0, 15px); }
    to   { transform: translate(0, -0px); }    
  }
`;


const Description= styled.p `
color: hsla(0, 0%, 95.3%, 1);
font-size: 12px;
margin: 0 0 24px;
line-height: 1.5;
letter-spacing: 1.5px;
`;

const CTALogoTwo= styled.img `
max-width: 600px;
margin-bottom:20px;
display: inline-block;
vertical-align: bottom;
width: 100%; 
`;


export default Login;