import React from "react";
import { useAppSelector } from "../lib/hook";
import { RootState } from "../lib/store";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../lib/hook";
import { deleteContact } from "../lib/features/contact/contactSlice";

function Contact() {
  const contacts = useAppSelector((state: RootState) => state.contact.contacts);
  const dispatch = useAppDispatch();
  console.log(contacts);
  return (
    <>
      <div className="flex flex-col items-center">
        <button
          type="button"
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 w-3/12 mt-2"
        >
          <Link to="/create" className="text-white">
            Add Contact
          </Link>
        </button>
        {contacts.length > 0 ? (
          <div className="mt-4 grid justify-center grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 ">
            {/* Responsive grid for cards */}
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className=" border-solid border-2 hover:scale-105 card shadow-md rounded-md overflow-hidden"
              >
                <div className="p-4">
                  <h5 className="text-lg font-medium leading-tight mb-2">
                    {contact.firstName} {contact.lastName}
                  </h5>
                  <p className="text-gray-700">{contact.email}</p>
                  <p className="text-gray-500">
                    {contact.isActive ? "Active" : "Inactive"}
                  </p>
                </div>
                <div className="flex justify-center items-center p-2 border-t border-gray-200">
                  <Link to={`/edit/${contact.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-sm mr-2">
                      Edit
                    </button>
                  </Link>
                  <button 
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full shadow-sm"
                  onClick={() => dispatch(deleteContact(contact.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="">
            <p>No contact found</p>
            <p>Please Add contact from Create Contact Button</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Contact;
