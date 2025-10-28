
import GrandChild from './GrandChild'
import { useContext } from 'react'
import { MyAppContext } from './main'
function Child() {
    const {key1} = useContext(MyAppContext);
  return (
    <div style={{
        padding : "2rem",
        backgroundColor : "#7EAA92"
    }}>
        <h2>Child</h2>
        <p>key1 = {key1}
        </p>
        <GrandChild />
    </div>
  )
}

export default Child