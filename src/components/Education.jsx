import { useState } from 'react'

function Education() {
  const [isEditing, setIsEditing] = useState(true)
  const [info, setInfo] = useState({ school: '', title: '', date: '' })

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
        <h2>Education</h2>
        <p>School: {info.school}</p>
        <p>Title of study: {info.title}</p>
        <p>Date of study: {info.date}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </section>
    )
  }

  return (
    <section>
      <h2>Education</h2>
      <form onSubmit={handleSubmit}>
        <label>School <input name="school" value={info.school} onChange={handleChange} /></label>
        <label>Title of study <input name="title" value={info.title} onChange={handleChange} /></label>
        <label>Date of study <input name="date" type="date" value={info.date} onChange={handleChange} /></label>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default Education