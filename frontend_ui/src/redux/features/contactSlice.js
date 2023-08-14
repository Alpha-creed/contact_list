import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getContact = createAsyncThunk('contact/getContacts',async ()=>{
    const res = await axios.get(`http://localhost:5000/api/get-contacts`)
    return res.data;
})

export const createContact = createAsyncThunk('contact/createContact',async({values})=>{
    let config={
        headers:{
            "Content-type":"application/json",
            
        }
    }
    let body = JSON.stringify({
        name:values.name,
        phone:values.phone,
        email:values.email,
        Company:values.Company,
        Title:values.Title,
        Group:values.Group,
        avatar:values.image,
    })
    const res = await axios.post('http://localhost:5000/api/add-contact',body,config)
    console.log(res.data);
    return  res._id;
  
})


export const updateContact = createAsyncThunk("contact/updateContact",async({id,values})=>{
    let config={
        headers:{
            "Content-type":"application/json",
            
        }
    }
    let body = JSON.stringify({
        name:values.name,
        phone:values.phone,
        email:values.email,
        Company:values.Company,
        Title:values.Title,
        Group:values.Group,
        avatar:values.image,
    })
    const res = await axios.put(`http://localhost:5000/api/update-contact/${id}`,body,config)
    return res.data;
})



export const deleteContact = createAsyncThunk("contact/delContacts",async (id)=>{
    try{
        const res = await axios.delete(`http://localhost:5000/api/delete-contact/${encodeURIComponent(id)}`)
        return res.id;
    }catch(error){
      throw error;
    }
  
})

const initialState={
    contact:[],
    loading:false,
}

const contactSlice = createSlice({
    name:'contact',
    initialState,
    reducers:{
        getContacts:(state,action)=>{
            state.loading=false;
            state.contact=action.payload.map(cont=>{
                return {
                    id:cont._id,
                    name:cont.name,
                    avatar:cont.avatar,
                    phone:cont.phone,
                    email:cont.email,
                    Company:cont.Company,
                    Title:cont.Title,
                    Group:cont.Group,
                }
            })
        },
        updateContacts:(state,action)=>{
            const index = state.contact.findIndex(x=>x.id===action.payload.id)
            state.contact[index]={
                    id:action.payload.id,
                    name:action.payload.name,
                    avatar:action.payload.avatar,
                    phone:action.payload.phone,
                    email:action.payload.email,
                    Company:action.payload.Company,
                    Title:action.payload.Title,
                    Group:action.payload.Group,
            }
        },
        deleteContacts:(state,action)=>{
          const id=action.payload.id;
          const uu = state.contact.find(contact =>contact.id == id);
          if(uu){
              return state.filter(f=>f.id != id);
          }
        }
       
    },
    extraReducers:{
        [createContact.pending]:(state,action)=>{
            state.loading="true"
        },
        [createContact.fulfilled]:(state,action)=>{
            state.loading='false';
            state.contact=[action.payload];
        },
        [createContact.rejected]:(state,action)=>{
            state.loading='false';
            state.error = action.error;
        },
        [getContact.pending]:(state,action)=>{
            state.loading="true"
        },
        [getContact.fulfilled]:(state,action)=>{
            state.loading='false';
            state.contact=[action.payload];
        },
        [getContact.rejected]:(state,action)=>{
            state.loading='false';
            state.error = action.error;
        },
        [updateContact.pending]:(state,action)=>{
            state.loading="true"
        },
        [updateContact.fulfilled]:(state,action)=>{
            state.loading='false';
            state.contact=[action.payload];
        },
        [updateContact.rejected]:(state,action)=>{
            state.loading='false'; 
            state.error = action.error;
        },
        [deleteContact.pending]:(state,action)=>{
            state.loading="true"
        },
        [deleteContact.fulfilled]:(state,action)=>{
            state.loading='false';
            state.contact = action.payload;
        },
        [deleteContact.rejected]:(state,action)=>{
            state.loading='false';
            state.error = action.error;
        },
    },
});

export default contactSlice.reducer;
export const {getContacts,updateContacts,deleteContacts} = contactSlice.actions
export const selectContact = state=>state.contact;  