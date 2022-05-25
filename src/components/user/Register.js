import { useState } from 'react'
import Card from '../ui/Card'
import styles from './Register.module.css'

const initialFormValues = {
  first_name: 'name',
  last_name: 'last',
  email: 'test@gmail.com',
  info: '',
}

const Register = () => {
  const [credentials, setCredentials] = useState(initialFormValues)

  const InputChangeHandler = ({ target }) => {
    const { value, name } = target

    setCredentials({
      ...credentials,
      [name]: value,
    })
  }

  const fetchForm = async () => {
    try {
      const response = await fetch('https://testapireact-af87a-default-rtdb.firebaseio.com/form.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials),
      })
      .then(res => {
        console.log(res)
        if(res.status !== 200) {
          setCredentials({...credentials,'info' : 'Error: '+res.statusText})
        }
      })
      console.log(response)
    } catch (error) {
      setCredentials({...credentials,'info' : 'Error: '+error.message})
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const { first_name, last_name, email } = credentials
    console.log(credentials, first_name, last_name, email)

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const formValid = first_name && last_name && emailValid
    
    if (formValid) {
      fetchForm()
      setCredentials(initialFormValues)
    } else {
      setCredentials({...credentials,'info' : 'Error: Datos invalidos'})
    }
  }

  return (
    <Card>
      <p className={styles.info}>{credentials.info}</p>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label>First name</label>
          <input type="text" name="first_name" 
            onChange={InputChangeHandler} value={credentials.first_name}/>
        </div>
        <div className={styles.control}>
          <label>Last name</label>
          <input type="text" name="last_name" 
            onChange={InputChangeHandler} value={credentials.last_name}/>
        </div>
        <div className={styles.control}>
          <label>Email</label>
          <input type="text" name="email" 
            onChange={InputChangeHandler} value={credentials.email} />
        </div>
        <div className={styles.actions}>
          <button className={styles.btn} type="submit">
            send
          </button>
        </div>
      </form>
    </Card>
  )
}

export default Register
