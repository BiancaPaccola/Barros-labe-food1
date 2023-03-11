import { BannerContainer } from "./style"
import clock from '../assets/clock.svg'

export const Banner = (props) => {
    return (
      <BannerContainer>
        <div className="clock">
          <img src={clock} alt="" />
        </div>
        <div className="info">
          <p>Pedido em andamento</p>
          <p>{props.name}</p>
          <p>
            <strong>Subtotal R${props.price}</strong>
          </p>
        </div>
      </BannerContainer>
    );
}
