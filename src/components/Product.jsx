import { useContext } from "react"
import { UserContext } from "../App"

const Product = () => {
    const user = useContext(UserContext)

  return (
    <div>
        This is {user.username} Product, productId: {user.productId}
        <button onClick={() => user.setUsername('User two')}>Change name</button>
    </div>
  )
}

export default Product