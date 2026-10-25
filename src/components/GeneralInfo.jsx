import { useState } from 'react'

function GeneralInfo() {
  const [isEditing, setIsEditing] = useState(true)
  const [info, setInfo] = useState({ name: '', email: '', phone: '' })

  function handleChange(e) {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setIsEditing(false)
  }

  if (!isEditing) {
    return (
      <section>
        <h2>General Info</h2>
        <p>Name: {info.name}</p>
        <p>Email: {info.email}</p>
        <p>Phone: {info.phone}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </section>
    )
  }

  return (
    <section>
      <h2>General Info</h2>
      <form onSubmit={handleSubmit}>
        <label>Name <input name="name" value={info.name} onChange={handleChange} /></label>
        <label>Email <input name="email" type="email" value={info.email} onChange={handleChange} /></label>
        <label>Phone <input name="phone" type="tel" value={info.phone} onChange={handleChange} /></label>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default GeneralInfo