import Thumbnail1 from './images/blog1.jpg'
import Thumbnail2 from './images/blog2.jpg'
import Thumbnail3 from './images/blog3.jpg'
import Thumbnail4 from './images/blog4.jpg'
import { useState } from 'react'

export const DUMMY_POSTS = [
    {
        id: '1',
        thumbnail: Thumbnail1,
        category: 'education',
        title: 'This is the title of the very first post on this blog.',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe itaque cum voluptatibus ea distinctio laudantium, quasi accusamus, impedit cupiditate necessitatibus tempore perferendis. Sit quo eos neque reprehenderit, inventore perspiciatis earum.",
        authorID: 3
    },
    {
        id: '2',
        thumbnail: Thumbnail2,
        category: 'science',
        title: 'Welcome to Ghana',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe itaque cum voluptatibus ea distinctio laudantium, quasi accusamus, impedit cupiditate necessitatibus tempore perferendis. Sit quo eos neque reprehenderit, inventore perspiciatis earum.",
        authorID: 1   
    },
    {
        id: '3',
        thumbnail: Thumbnail3,
        category: 'weather',
        title: 'This is the title of the very first post on this blog.',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe itaque cum voluptatibus ea distinctio laudantium, quasi accusamus, impedit cupiditate necessitatibus tempore perferendis. Sit quo eos neque reprehenderit, inventore perspiciatis earum.",
        authorID: 13
    },
    {
        id: '4',
        thumbnail: Thumbnail4,
        category: 'farming',
        title: 'This is the title of the very first post on this blog.',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe itaque cum voluptatibus ea distinctio laudantium, quasi accusamus, impedit cupiditate necessitatibus tempore perferendis. Sit quo eos neque reprehenderit, inventore perspiciatis earum.",
        authorID: 11
    },
      
]