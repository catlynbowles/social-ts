import { Hobby } from "./Interfaces"

type Activity = {
  activity: string
  type: string
  participants: number
  price: number
  link: string
  key: string
  accessibility: number
}

const Activity = (activity: Activity) => {
  return (
    <div>
      <h1>{activity.activity}</h1>
      <p>{activity.type}</p>
    </div>
  )
}

export default Activity