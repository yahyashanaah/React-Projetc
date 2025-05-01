export default function Post({postName = "Post Name", postType = "Post Type", children}) {
    return (
        <div style={{
        padding: '10px',
        border: 'solid teal 5px',
        margin: '25px',
        }}>
            <h1>{postName}</h1>
            <hr />
            <h2>{children}</h2>
            <p>{postType}</p>
        </div>
    );
}