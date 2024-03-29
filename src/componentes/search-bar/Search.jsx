import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import BotonSubmit from '../Boton/BotonSubmit';
import styled from 'styled-components'
import './estilo.css'

const Input = styled.input`
        width:${props => props.width};
        font-size: ${props => props.fontSize};
        font-weight: ${props => props.fontWeight};
        padding: ${props => props.padding};
        color: ${props => props.textColor};
        background: ${props => props.backgroundColor};
        border: ${props => props.border};
        border-radius: ${props => props.borderRadius};
        transition: all 0.3s;
        margin:${props => props.margin};
        cursor:pointer;

        :focus{
            outline: none;
        }

        ::placeholder{
            color:${props => props.placeholderColor};
        }
    `

function Search({ jobBankSearch, name, type, placeholder, placeholderColor, fontSize, fontWeight, padding, textColor, backgroundColor, borderRadius, margin, marginButtom, paddingButtom, border }) {
    const [inputText, setInputText] = useState("");

    const [showButtom, setShowButtom] = useState(false);

    const onChangeInput = (e) => {
        // var lowerCase = e.target.value.toLowerCase();
        setInputText(e.target.value)

        if(e.target.value.length >= 3){
            setShowButtom(true)
        }else{
            setShowButtom(false)
        } 
    }

    const navigate = useNavigate();

    const inputHandlerJobBank = (e) => {
        e.preventDefault()
        console.log(inputText)
      
    }

    const inputHandler = (e) => {
        e.preventDefault()
        console.log(inputText)
        navigate('/job-bank')
        
    }

    return (
        jobBankSearch ? 
        <form onSubmit={inputHandlerJobBank} className="form-search" >
            <Input
                type={type}
                placeholder={placeholder}
                placeholderColor={placeholderColor}
                value={inputText}
                onChange={onChangeInput}
                name={name}
                fontSize={fontSize}
                fontWeight={fontWeight}
                padding={padding}
                textColor={textColor}
                backgroundColor={backgroundColor}
                borderRadius={borderRadius}
                margin={margin}
                border={border}
               
            />

            {
                showButtom &&
                
                <BotonSubmit
                    text={"Search"}
                    fontSize={fontSize}
                    fontWeight={"500"}
                    textColor={"white"}
                    buttonColor={"#3B37FF"}
                    borderButton={"none"}
                    borderRadius={borderRadius}
                    margin={marginButtom}
                    padding={paddingButtom}
                />
            

            }

        </form>

        :

        <form onSubmit={inputHandler} className="form-search" >
            <Input
                type={type}
                placeholder={placeholder}
                placeholderColor={placeholderColor}
                value={inputText}
                onChange={onChangeInput}
                name={name}
                fontSize={fontSize}
                fontWeight={fontWeight}
                padding={padding}
                textColor={textColor}
                backgroundColor={backgroundColor}
                borderRadius={borderRadius}
                margin={margin}
                border={border}
               
            />

            {
                showButtom &&
                
                <BotonSubmit
                    text={"Search"}
                    fontSize={fontSize}
                    fontWeight={"500"}
                    textColor={"white"}
                    buttonColor={"#3B37FF"}
                    borderButton={"none"}
                    borderRadius={borderRadius}
                    margin={marginButtom}
                    padding={paddingButtom}
                />
            

            }

        </form>

    )
}

export default Search