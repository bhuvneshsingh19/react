import React from 'react'

function Card({username = " BS ", post = "Not assigned yet", image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYaHEOSmMjBgPk3QdiT25rKH8AoSdXl2KBk3ZumrDU_P31abVsjjjY4TU&usqp=CAE&s"}) {
    //console.log(props);
  return (
    <div>
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src={image} />
  </div>
  <div className="flex items-center md:items-start">
    <span className="text-2xl font-medium">Class Warfare</span>
    <span className="font-medium text-sky-500">
        {username }
    </span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>
        {post}
      </span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
    </div>
  )
}

export default Card