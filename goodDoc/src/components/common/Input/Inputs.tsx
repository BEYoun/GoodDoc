import React from 'react'

interface Props {
  value: string | number
}

export const Inputs: React.FC<Props> = ({ value }) => {
  return (
    <div className="col-span-6 sm:col-span-3">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Nom du cabinet
      </label>
      <input
        type="text"
        name="username"
        id="username"
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        autoComplete="given-name"
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
      {errors.username && touched.username && errors.username}
    </div>
  )
}
