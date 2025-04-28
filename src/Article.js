export default function userInfo({personName, email, bio, content = "Default content",children}) {
   
    return( 
        <div style={{backgroundColor: "lightblue", boxShadow: "0 0 10px black", padding: "20px", borderRadius: "10px"}}>
            <h1>{personName}</h1>
            <p>{email}</p>
            <p>{bio}</p>

            <hr></hr>
            <p>{children}</p>
        </div>
    )   
}