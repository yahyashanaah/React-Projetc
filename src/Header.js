export default function Header(){
    return (
        <div style={{
             backgroundColor: 'darkblue',
             height:"200px",
             width: '100%',
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             fontSize: '24px',
             boxShadow: '0 5px 13px rgba(0, 0, 0, 0.4)',
            }}>
            <h1>My Custom Header</h1>
        </div>
    );
}
