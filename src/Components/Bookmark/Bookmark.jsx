import propTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <h3 className="text-2xl bg-slate-200 p-4 m-4 rounded-xl">
                {title}
            </h3>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: propTypes.object
}

export default Bookmark;