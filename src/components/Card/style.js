import styled from "styled-components";


export const CardWorker = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
transition: 0.3s;
width: 250px;
border-radius: 5px;
display: inline-block;
background-color: white;
margin: 20px;

&:hover{
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

`
export const CardWorkerImg = styled.img`
width: 100%;
height: auto;
border-radius: 5px 5px 0 0;
`
export const Container = styled.div`
padding: 2px 16px;
`

export const CardSalario = styled.h4`
color: ${(props)=>props.salario<= 2000? "red":"blue"}
`