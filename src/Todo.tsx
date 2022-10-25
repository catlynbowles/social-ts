import { Hobby } from "./Interfaces"

type ActivityProps = {
  activity: string
  type: string
  participants: number
  price: number
  link: string
  key: string
  accessibility: number
  nums: number
}

const Activity: React.FC <ActivityProps> = ({activity, type, price, participants, nums}: ActivityProps) => {
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