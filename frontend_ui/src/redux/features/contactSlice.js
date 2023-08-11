import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getContact = createAsyncThunk('contact/getContacts',async ({id})=>{
    const res = await axios.get(`http://localhost:5000/api/get-contacts/${id}`)
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



export const updateContact = createAsyncThunk("contact/updateContact",async(data)=>{
    const { _id, ...values } = data;
    let config={
        headers:{
            "Content-type":"application/json",
        }
    },
    body= JSON.stringify(values)
    // let body = JSON.stringify({
    //     name:values.name,
    //     phone:values.phone,
    //     email:values.email,
    //     Company:values.Company,
    //     Title:values.Title,
    //     Group:values.Group,
    //     avatar:values.image,
    // })
    const res = await axios.put(`http://localhost:5000/api/update-contact/${_id}`,body,config)
    return res.data;
})



export const deleteContact = createAsyncThunk("contact/delContacts",async ({id})=>{
    const res = await axios.delete(`http://localhost:5000/api/delete-income/${id}`)
    return res.data;
})

const initialState={
    contact:[],
    loading:false,
    error:null,
    status:"idle",
    // edit:false,
    selectedContact:null,
}

const contactSlice = createSlice({
    name:'contact',
    initialState,
    reducers:{
        setSelectedContact: (state, action) => {
            const {_id} = action.payload;
            state.selectedContact = state.contact.find(contact => contact.id === _id);
          },
          addContacts:(state,action)=>{
            state.push(action.payload)
          },
          updateContacts:(state,action)=>{
            const{_id,name,phone,email,Company,Title,Group,avatar} = action.payload;
            const uu = state.find(contact=>contact.id==_id)
            if(uu){
                uu.name = name;
                uu.phone = phone;
                uu.email=email;
                uu.Company=Company;
                uu.Title=Title;
                uu.Group=Group;
                uu.avatar=avatar
            }
          },
          deleteContacts:(state,action)=>{
            const {_id} = action.payload;
            const uu = state.find(contact=>contact.id==_id);
            if(uu){
                return state.filter(f=>f.id !=_id);
            }
          },
          setContacts:(state,action)=>{
                return{
                    ...state,
                    contact:action.payload,
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
            state.contactId = [action.payload];
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
            state.contact=[action.payload];
        },
        [deleteContact.rejected]:(state,action)=>{
            state.loading='false';
            state.error = action.error;
        },
    },
});

export default contactSlice.reducer;
export const {setSelectedContact,addContacts,updateContacts,deleteContacts,setContacts} = contactSlice.actions
