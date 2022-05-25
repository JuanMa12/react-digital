import Card from '../ui/Card'
import styles from './Detail.module.css'
import { useEffect, useState } from 'react'

const Detail = () => {

  const [data , setData] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('https://testapireact-af87a-default-rtdb.firebaseio.com/form.json')
      const data = await response.json()
      console.log(data)

      let userData = [];
      for (const [key, currentValue] of Object.entries(data)) {
        userData.push({
          key: key,
          first_name: currentValue.first_name,
          last_name: currentValue.last_name,
          email: currentValue.email
        })
      }
      setData(userData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  let userData;
  if (data.length > 0) {
    userData = data.map((currUser, index) => {
      return (
        <li className={styles.listItem} key={currUser.key}>
          <div className={styles.description}>
          <h3>{`User: ${currUser.first_name} ${currUser.last_name}`}</h3>
          <p>{`Email: ${currUser.email}`}</p>
          </div>
        </li>
      )
    })
  }
  
  return( 
    <Card>
        <ul className={styles.main}>
          {userData}
        </ul>
    </Card>
  )
}

export default Detail
