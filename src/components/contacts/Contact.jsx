

function Contact({name, popularity, pictureUrl, wonOscar, wonEmmy, id, onDelete }) {
  return(
    <tr>
      <td>
        <img src={ pictureUrl } alt={ id }></img>
      </td>
      <td>{ name }</td>
      <td>{ popularity }</td>
      <td>{ wonOscar && "🏆" } </td>
      <td>{ wonEmmy && "🏆" }</td>
      <td><button onClick={onDelete}>Delete</button></td>
  </tr>
  )

}
export default Contact;