export const fetchActivity = () => {
  return fetch('https://www.boredapi.com/api/activity')
    .then(response => response.json())
}