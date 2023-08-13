import { useDispatch } from "react-redux"
import { deleteContact } from "../redux/features/contactSlice"
import { useNavigate } from "react-router-dom"


export const HandleDelete=((e)=>{

    useDispatch(deleteContact(e))
    console.log("it gone")
    useNavigate("/")
})


