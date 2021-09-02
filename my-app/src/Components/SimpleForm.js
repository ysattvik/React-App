import React, { Component, useEffect } from 'react'
import { useState } from 'react'
import './MyCSS.css';

    const SimpleForm =(props)=>{
        // const nameInputRef=useRef();
        const[enteredName,setEnteredName]=useState('');
        // const[enteredNameIsValid,setEnteredNameIsValid]=useState(false);
        const[enteredNameTouched,setEnteredNameTouched]=useState(false)
        // const[formIsValid, setFormIsValid]=useState(false)

        // useEffect(()=>{
        //     if(enteredNameIsValid){
        //         console.log("name input is valid");
        //     }
        // }, [enteredNameIsValid]);
        const enteredNameIsValid= enteredName.trim()!=='';
        const nameInputIsInValid=!enteredNameIsValid && enteredNameTouched;
        
        let formIsValid=false;
        if(enteredNameIsValid){
            formIsValid=true;
        }

        // useEffect(() =>{
        //     if(enteredNameIsValid){
        //         // setFormIsValid(true);
        //         formIsValid=true;
        //     }
        //     else{
        //         setFormIsValid(false);
        //     }
        // },[enteredNameIsValid])

        const nameInputChangeHandler= event =>{
            setEnteredName(event.target.value)
            // if(event.target.value.trim()!==''){
            //     setEnteredNameIsValid(true)   
            // }
        }

        const nameInputBlurHandler=event =>
        {
            setEnteredNameTouched(true)

            // if(enteredName.trim()===''){
            //     setEnteredNameIsValid(false)
            //     return
            // }

        }

        const formSubmissionHandler= event =>{
            event.preventDefault()
            setEnteredNameTouched(true)
            if(!enteredNameIsValid){
                return
            }

            // if(enteredName.trim()===''){
            //     setEnteredNameIsValid(false)
            //     return
            // }
           
        //    setEnteredNameIsValid(true)
            console.log(enteredName)
            // nameInputRef.current.value=''//not ideal don't manipulate the DOM
            setEnteredName('')
            setEnteredNameTouched(false)
        }  
   
        const nameInputClasses=nameInputIsInValid
        ?'form-control invalid'
        :'form-control '

    return (
        <form onSubmit={formSubmissionHandler}>
        <div className={nameInputClasses}>
            <label htmlFor="name">Your Name
            </label>
            <input 
            // ref={nameInputRef}
            type="text" 
            id="name" 
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={enteredName}/>
            {nameInputIsInValid && (
            <p className="error-text">Name must not be empty</p>
            )}
        </div>
        
        <div className="form-actions">
            <button disabled={!formIsValid}>Submit</button>

         </div>
        </form>
     )
 }

export default SimpleForm
