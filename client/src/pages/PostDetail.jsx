import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container"></div>
      <div className="post-detail__header">
        <PostAuthor />
        <div className="post-detail__buttons">
          <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
          <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
        </div>
      </div>
      <h1>This is the post title!</h1>
      <div className="post-detail__thumbnail">
        <img src={Thumbnail} alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore velit voluptas modi ipsum vel dolores nostrum cupiditate nesciunt a porro! A quia nihil asperiores, quibusdam incidunt voluptatum eum eos ad aperiam id numquam soluta amet voluptatem cumque, quasi aliquid porro?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam fugit officiis iusto inventore! Aliquam quia accusamus magni, repellendus esse aliquid porro necessitatibus fugiat. Sit corporis id autem magni qui facere cumque, alias voluptatem totam officiis, libero possimus. Doloribus natus est sunt, fugit numquam maiores vitae nobis cumque et dolorem expedita?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quibusdam ex in laudantium debitis blanditiis officia, corporis delectus eos qui dolores labore distinctio doloribus enim omnis facilis pariatur dolorum eius quas quisquam soluta doloremque ducimus adipisci! Omnis sunt ab iusto aperiam quas, voluptate, ducimus, laboriosam eaque velit autem nihil cum eum! Dolorem enim repudiandae cumque dignissimos eum natus, facere animi vitae omnis! Officia cupiditate tempore commodi optio! Vel quae vero minus quia quis tenetur dignissimos, iste, molestias fugit, soluta fuga inventore voluptate expedita numquam aliquam adipisci a! Ullam, nihil rerum repudiandae quam quas hic eligendi dolore laboriosam minima, laborum, corrupti quisquam consequuntur quibusdam provident pariatur natus commodi omnis iusto sequi et.
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa facilis iste assumenda suscipit dicta itaque magnam ratione dolore consectetur velit.
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui optio voluptate veritatis quod doloremque tempora? Dolor quas sint, id perspiciatis molestiae reprehenderit exercitationem, et iste aliquam placeat voluptates, voluptatibus corporis! Ut ullam, nulla quibusdam placeat autem qui exercitationem quaerat explicabo. Reiciendis recusandae adipisci sit, temporibus quo perspiciatis neque amet repellat in deserunt, suscipit facilis aliquid? Repudiandae ea aut dolor provident blanditiis rem odit soluta distinctio doloremque aspernatur! Mollitia ducimus corrupti non molestiae harum nam porro esse beatae veniam, deserunt deleniti voluptates aspernatur impedit est laboriosam laudantium. Quos asperiores aut natus quod sit dolores nisi soluta temporibus dicta incidunt. Optio commodi saepe ut fugiat neque voluptas reiciendis, quos voluptate distinctio impedit libero adipisci, minima quia reprehenderit? Ipsam fuga accusantium assumenda dolore, quia, similique aspernatur doloremque optio vel incidunt perspiciatis? Necessitatibus dolor numquam, ullam fugit, sed exercitationem corrupti eveniet ipsam voluptatem eligendi laborum consectetur asperiores. Rerum quasi, aperiam consequuntur similique vitae quidem incidunt ea? Soluta facere, debitis in recusandae animi dolorum vero ad sapiente? Recusandae dignissimos minima ut eligendi autem animi debitis, sapiente iusto laboriosam impedit eaque quae quo soluta! Praesentium, illo tenetur beatae et eveniet autem, ex aut iusto quidem quas amet laborum reiciendis atque optio. Quis similique quam facilis tempore?</p>
    </section>

  )
}

export default PostDetail