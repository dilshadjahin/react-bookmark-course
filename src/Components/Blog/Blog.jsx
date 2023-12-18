import { func, object } from "prop-types";
import { FaBookmark } from "react-icons/fa";


const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const {id, title, cover_img, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className="mb-20 space-y-4">
            <img className="w-full" src={cover_img} alt={`Cover picture of the title ${title}`} />
            <div className="flex justify-between mb-4 ">
                <div className="flex">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>

                    <button
                        onClick={()=>handleAddToBookmark(blog)}
                        className="ml-2 text-2xl text-red-800"> <FaBookmark></FaBookmark>
                    </button>

                </div>


            </div>
            <h2 className="text-4xl my-4">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>

            <button 
            onClick={() => handleMarkAsRead(id, reading_time)}
            className="text-purple-800 font-bold underline">
                Mark as read
            </button>

        </div>
    );
};
Blog.propTypes = {
    blog: object,
    handleAddToBookmark: func,
    handleMarkAsRead: func
}

export default Blog;