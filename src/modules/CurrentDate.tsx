export function Month() {

  const today = new Date();

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  const month = monthNames[today.getMonth()]
  return (
    <time>
      {month}
    </time>
  )
}

export function Year() {

  const today = new Date();
  const year = today.getFullYear()

  return (
    <time>
      {year}
    </time>
  )
}

export function Day() {

  const today = new Date();
  const day = today.getDay()

  return (
    <time>
      {day}
    </time>
  )
}