/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './styles.css'
import logo from '../../assets/images/blizzard.png'

const Footer = () => {
  return (
    <footer className="blizzard-footer">
      <div className="lenguage">
        <i className="fas fa-globe-africa globe"></i>
        <p>Português (Brasil)</p>
      </div>
      <a
        href="https://www.blizzard.com/pt-br/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={logo} alt="blizzard logo" className="blizzard-logo" />
      </a>
      <div className="links">
        <a href="#" className="link">
          CARREIRAS
        </a>
        <a href="#" className="link">
          SOBRE
        </a>
        <a href="#" className="link">
          SUPORTE
        </a>
        <a href="#" className="link">
          CONTATO
        </a>
        <a href="#" className="link">
          IMPRENSA
        </a>
        <a href="#">API</a>
      </div>
      <p>
        Um aplicativo, todos os jogos:{' '}
        <a href="#" className="app">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            id="icon"
            part="icon"
            width="20"
            height="20"
            role="img"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 48 48"
          >
            <path d="M38.0157 18.2906C39.2461 14.5025 39.4776 11.0484 38.639 8.4313C38.6312 8.40735 38.623 8.38269 38.615 8.35838C38.5647 8.21637 38.4396 7.9162 38.281 7.9162C38.1605 7.9162 38.1588 8.11711 38.1658 8.21925C38.1682 8.23889 38.1707 8.25828 38.173 8.27804C38.4403 10.6147 37.7254 13.9491 36.2886 17.44C33.3416 16.102 29.8021 15.0333 25.8763 14.4032C22.3475 13.8364 18.9696 13.7113 15.906 13.9615C16.2703 11.5515 17.1702 9.87543 18.6467 9.52185C20.6791 9.03525 22.8959 10.372 25.0096 12.8048C25.3749 12.8547 25.7408 12.909 26.1073 12.9676C27.1503 13.1352 28.174 13.334 29.1785 13.5638C25.3248 6.31497 20.1557 2.25234 16.2245 3.75203C13.2329 4.89239 11.7046 9.00843 11.8867 14.5402C7.99083 15.3688 4.88381 16.8954 3.03665 18.9301C3.01941 18.9491 3.00253 18.9683 2.98552 18.9873C2.8877 19.1019 2.69026 19.3603 2.77 19.4977C2.82987 19.602 3.00504 19.503 3.09005 19.446C3.10574 19.434 3.1213 19.4221 3.13723 19.4101C5.02726 18.0102 8.27233 16.9621 12.0138 16.461C12.3286 19.6819 13.1734 23.2814 14.5902 26.9967C15.8636 30.3361 17.4442 33.3241 19.1928 35.8521C16.9233 36.7415 15.0221 36.8001 13.9776 35.6983C12.5399 34.1816 12.5887 31.5936 13.6392 28.5464C13.4999 28.2052 13.3639 27.8612 13.2313 27.5144C12.8549 26.5274 12.5152 25.5416 12.2121 24.5569C7.86032 31.5187 6.9265 38.0267 10.1905 40.6817C12.6743 42.7022 17.0035 41.9677 21.7032 39.0445C24.3686 42.0041 27.2442 43.9316 29.9299 44.5139C29.9549 44.5193 29.9799 44.5243 30.0051 44.5296C30.1532 44.557 30.4756 44.5988 30.555 44.4613C30.6149 44.3569 30.4421 44.255 30.3501 44.2099C30.3319 44.2022 30.3142 44.1947 30.2957 44.1868C28.1383 43.2499 25.608 40.9637 23.3031 37.974C25.9353 36.0908 28.63 33.5596 31.1392 30.475C33.3945 27.7024 35.1918 24.8396 36.5068 22.0613C38.4118 23.5819 39.4133 25.1992 38.9813 26.6547C38.3867 28.6581 36.1209 29.9098 32.9568 30.5237C32.731 30.815 32.501 31.1047 32.267 31.3929C31.6004 32.2124 30.9164 32.9996 30.215 33.7545C38.4196 34.0419 44.5224 31.5963 45.1897 27.4421C45.6979 24.2811 42.8974 20.8994 38.0157 18.2906ZM30.8893 26.5763C27.996 30.1333 24.3893 33.1617 21.1821 34.9126C19.9762 32.9748 18.908 30.8731 18.0905 28.7296C16.4567 24.4455 15.6372 19.8076 15.7247 16.1548C18.0056 16.0794 20.36 16.205 22.625 16.5689C27.152 17.296 31.5782 18.9052 34.6979 20.8075C33.6226 22.8207 32.3375 24.7968 30.8893 26.5765V26.5763Z"></path>
          </svg>{' '}
          <strong>Aplicativo Battle.net</strong>
        </a>
      </p>
      <span>
        ©2022 Clone feito por{' '}
        <a
          href="http://github.com/laianribas"
          target="_blank"
          className="github"
          rel="noreferrer"
        >
          Laian Ribas
        </a>
        .
      </span>
      <a
        href="https://www.gov.br/mj/pt-br/assuntos/seus-direitos/classificacao-1"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://images.blz-contentstack.com/v3/assets/blt3d2b37a4c9c0ce28/blt8023367772f98590/5d5f377fa1306e110698e70f/l-18.1E6DT.png"
          alt=""
        />
      </a>
    </footer>
  )
}

export default Footer
