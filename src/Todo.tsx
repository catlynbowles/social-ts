import { Hobby } from "./Interfaces"

const Activity: React.FC <Hobby> = ({activity, type, price, participants, nums}: Hobby) => {
  return (
    <div>
      <h1>{activity}</h1>
      <p>{type}</p>
      <p>{price}</p>
      <p>{participants}</p>
      <p>{nums}</p>
    </div>
  )
}

export default Activity