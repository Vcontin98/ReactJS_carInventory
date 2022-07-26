export default function Post(props) {
  console.log(props)

  return (
      <div className="card">
          <h2>{ props.post.Name }</h2>
          <p>{ props.post.special }</p>
          <button type="button" >I want this Agent</button>
 
       
      </div>
  )
}