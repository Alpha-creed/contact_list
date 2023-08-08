import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getContact = createAsyncThunk('contact/getContacts',async ({id})=>{
    const res = await axios.get(`http://localhost:5000/api/get-contacts/${id}`)
    return res.data;
})

// export const createContact = createAsyncThunk('users/createContact',async({values})=>{
//     let config={
//         headers:{
//             "Content-type":"application/json",
//         }
//     }
//     let body = JSON.stringify({
//         name:values.name,
//         image:values.image,
//         phone:values.phone,
//         email:values.email,
//         Company:values.Company,
//         Title:values.Title,
//         Group:values.Group,
//     })
//     const res = await axios.post('http://localhost:5000/api/add-contact/',body)
//     console.log(res.data);
//     return res.data;
  
// })

// const response = await fetch('http://localhost:5000/api/add-contact', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ 
//         name:values.name,
//         image:values.image,
//         phone:values.phone,
//         email:values.email,
//         Company:values.Company,
//         Title:values.Title,
//         Group:values.Group,
//      }),
//   });

//   if (response.ok) {
//     console.log('Contact added successfully');
//     // Handle success
//   } else {
//     console.error('Failed to add contact');
//     // Handle error
//   }
// };

export const createContact = createAsyncThunk('contact/addContact', async (values) => {
    try {
      const response = await fetch('http://localhost:5000/add-contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add contact');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  });

export const updateContact = createAsyncThunk("contact/updateContact",async({id,data})=>{
    let config={
        headers:{
            "Content-type":"application/json",
        }
    }
    let body = JSON.stringify({
        name:data.name,
        image:data.image,
        phone:data.phone,
        email:data.email,
        Company:data.Company,
        Title:data.Title,
        Group:data.Group,
    })
    const res = await axios.put(`http://localhost:5000/api/update-contact/${id}`,body,config)
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
}

const contactSlice = createSlice({
    name:'contact',
    initialState,
    reducers:{},
    extraReducers:{
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
        // builder.addCase(createContact.pending,(state,action)=>{
        //     state.status = "pending"
        //     state.loading='true';
  
        // });
        // builder.addCase(createContact.fulfilled,(state,action)=>{
        //     state.status = "fulfilled"
        //     state.loading='false';
        //     state.contact=[...action.payload.data]
        // });
        // builder.addCase(createContact.rejected,(state,action)=>{
        //     state.status = "rejected"
        //     state.loading='false';
        //     state.contact=[...action.payload]
        // });
    },
});

export default contactSlice.reducer;

