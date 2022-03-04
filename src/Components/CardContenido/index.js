import ButtonDrop from "../ButtonDrop"
import ButtonGral from "../ButtonGral"
function CardContenido() {
    return <card>
    <div><ButtonDrop /></div>
    <div>
      <p><strong>Add tags for solutions</strong></p>
      <p>Lorem picsum</p>
      {ButtonGral('Prueba')}
    </div>
    <div>
      <img></img>
      <p>2</p>
    </div>      
  </card>
}
export default CardContenido