import React from 'react'
import CreateContact from './CreateContact'
import { useParams } from 'react-router-dom';
import { useAppSelector } from "../lib/hook";
import { RootState } from "../lib/store";

function EditContact() {
  const { id } = useParams();
  const contacts = useAppSelector((state: RootState) => state.contact.contacts);
  const data = contacts.find((contact) => contact.id === id);
  console.log("thisis the data",data)
  // console.log("thisis the id", id)
  return (
    <>
      <CreateContact initialData={data} isUpdateMode={true}/>
    </>
  )
}

export default EditContact