import { useContent } from "react";
import { UserContent } from "./index";

const User = () => {
  const user = useContext(UseContext)
  return (
    <>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Hobby: {user.hobby}</p>
    </>
  )
}

export default User;