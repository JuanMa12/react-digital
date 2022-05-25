import Register from './components/user/Register'
import Detail from './components/user/Detail'
import Layout from './components/layout/Layout'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    
      <Layout>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Layout>
  )
}

export default App
