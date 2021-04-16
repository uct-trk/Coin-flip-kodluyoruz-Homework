import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      toplam: 0,
      yaziToplam:0,
      turaToplam:0
    };
  }
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    
    // rastgele sayı üretip bu sayıya göre state değerlerini güncelleyeceğiz 0 veya 1
    const random = () => {
      return Math.floor(Math.random() * 2);  
    }
    console.log(random)
    const randomNumber = random();
    
    if(randomNumber === 0){
      setTimeout(() => this.setState((state) => {
        return {toplam: state.toplam + 1, side: "tura", turaToplam: state.turaToplam + 1, flipping: false}
      }), 1000)
    } else {
      setTimeout(() => this.setState((state) => {
        return {toplam: state.toplam + 1, side: "yazi", yaziToplam: state.yaziToplam + 1, flipping: true}
      }))
    }

    // 1 saniye sonra paranın yüzünü false yapıyoruz
    setTimeout(() => this.setState({flipping: false}), 1000);
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong>{this.state.toplam}</strong>
          atıştan
          <strong> {this.state.turaToplam} </strong>ü tura
          <strong> {this.state.yaziToplam} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
