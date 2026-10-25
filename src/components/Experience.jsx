import { useState } from 'react'

function Experience() {
  const [isEditing, setIsEditing] = useState(true)
  const [info, setInfo] = useState({
    company: '',
    position: '',
    responsibilities: '',
    from: '',
    until: '',
  })

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
        <h2>Practical Experience</h2>
        <p>Company: {info.company}</p>
        <p>Position: {info.position}</p>
        <p>Responsibilities: {info.responsibilities}</p>
        <p>From: {info.from}</p>
        <p>Until: {info.until}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </section>
    )
  }

  return (
    <section>
      <h2>Practical Experience</h2>
      <form onSubmit={handleSubmit}>
        <label>Company <input name="company" value={info.company} onChange={handleChange} /></label>
        <label>Position <input name="position" value={info.position} onChange={handleChange} /></label>
        <label>Responsibilities <textarea name="responsibilities" value={info.responsibilities} onChange={handleChange} /></label>
        <label>From <input name="from" type="date" value={info.from} onChange={handleChange} /></label>
        <label>Until <input name="until" type="date" value={info.until} onChange={handleChange} /></label>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default Experience