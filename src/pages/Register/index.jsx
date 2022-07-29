import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents"

import bigodesimg from '../../assets/bigodesdevv.png'



export const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("")
  const [password, setPassword] = useState("");

  return (
    <LayoutComponents >
      <form className="login-form">
        <span className="login-form-title"> Crie agora sua conta </span>

        <span className="login-form-title">
          {/* <img src={bigodesimg} alt="IMAGEM DOS BIGODES" /> */}
        </span>

        {/* <div className="wrap-input">
          <input
            className={name !== "" ? "has-val input" : "input"}
            type="email"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div> */}

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="E-mail"></span>
        </div>

        <div className="wrap-input">
          <input
            className={name !== "" ? "has-val input" : "input"}
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome Completo"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Senha"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Confirme sua senha"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn">Criar conta</button>
        </div>

        <div className="text-center">
          <span className="txt1">Já possui conta? </span>
          <Link className="txt2" to="/login">
            Acessar com Email e Senha.
          </Link>
        </div>
      </form>
      <h2> Acessar com email e senha </h2>
    </LayoutComponents>
  )
}