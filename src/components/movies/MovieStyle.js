import styled from "styled-components";


export const Container = styled.div`

width: 100%;
height:100%;
margin:0 auto;
display: flex;
align-items: center;
flex-direction: column;
text-align: center;
margin-top: 20px;
p{
    width:100%;
    color:white ;
    margin-top:10px;
}
`

export const Title = styled.h1`
font-size: 2rem;
font-family:sans-serif;
color:white;
`
export const InfosFilmes = styled.ul`
max-width:500px;
display: flex;
background:FireBrick;
padding: 10px;
margin-top:10px;
border-radius:10px;
align-items: center;
flex-direction: column;

`
export const BoxImg = styled.div`
    overflow: hidden;
    border-radius:10px;
    img{
         &:hover{
        transition:1s all;
        transform:scale(1.2);
    }
}
`
export const List = styled.li`
font-size: 3rem;
list-style:none;
font-family: 'Anton', sans-serif;
`