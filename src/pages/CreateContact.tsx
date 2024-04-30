import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../lib/features/contact/contactSlice';

interface Contact {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
}

function CreateContact() {
    const initialState: Contact = {
        id: '',
        email: '',
        firstName: '',
        lastName: '',
        isActive: true,
    };
  const [formData, setFormData] = useState<Contact>(initialState);

  const [errors, setErrors] = useState<Partial<Contact>>({}); // Track validation errors

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // setFormData({ ...formData, [event.target.name]: event.target.value });
    if (event.target.type === 'radio') {
        setFormData({...formData, [event.target.name]: event.target.value === 'true' });
      } else {
        setFormData({...formData, [event.target.name]: event.target.value });
      }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors: Partial<Contact> = {};
    let isValid = true;

    if (!formData.email) {
      validationErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.firstName) {
      validationErrors.firstName = 'First name is required';
      isValid = false;
    }

    setErrors(validationErrors);

    if (isValid) {
      // Generate 8-digit numeric ID, convert to string
      let newId = '';
      while (newId.length < 8) {
        newId += Math.floor(Math.random() * 10).toString(); // Generate random digits
      }
        formData.id = newId;
      dispatch(addContact(formData));
    // console.log(formData)
      setFormData({ ...initialState }); // Reset form on successful submission
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Add Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 mb-2">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${errors.firstName ? 'border-red-500' : ''}`}
          />
          {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 mb-2">
            Last Name: (Optional)
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${errors.lastName ? 'border-red-500' : ''}`}
            />
            {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
        </div>
        <div className="mb-4">
  <label className="block text-gray-700 mb-2">Status:</label>
  <div className="flex items-center">
    <input
      type="radio"
      id="active"
      name="isActive"
      value="true"
      checked={formData.isActive} // Set checked based on formData.isActive
      onChange={handleChange}
      className="mr-2"
    />
    <label htmlFor="active">Active</label>
  </div>
  <div className="flex items-center">
    <input
      type="radio"
      id="inactive"
      name="isActive"
      value="false"
      checked={!formData.isActive} // Set checked based on the opposite of formData.isActive
      onChange={handleChange}
      className="mr-2"
    />
    <label htmlFor="inactive">Inactive</label>
  </div>
</div>

        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600" >
            Add Contact
        </button>
        </form>
        </div>
    );
}

export default CreateContact;
