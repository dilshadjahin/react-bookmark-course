
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
    console.log(readingTime)
  return (
    <div className="md:w-1/3 bg-slate-300 ml-4 mt-2 pt-4">

        <div>
            <h3 className="text-xl">
                Reading Time: {readingTime}
            </h3>
        </div>
            <h2 className="text-xl text-center">
            Bookmarked Blogs: {bookmarks.length} 
            </h2>

            {
                bookmarks.map(bookmark => 
                <Bookmark
                     key={bookmark.id}
                     bookmark ={bookmark}>

                </Bookmark>)

            }
               
            
    </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.array
}

export default Bookmarks