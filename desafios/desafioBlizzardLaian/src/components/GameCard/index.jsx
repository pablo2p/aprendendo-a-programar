/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './styles.css'

const GameCard = (props) => {
  return (
    <div className="game-card col">
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="game-image">
          <img src={`${props.image}`} />
          <img src={`${props.logo}`} className="game-logo" />
        </div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="icons">
          {props.battle ? (
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
            </svg>
          ) : (
            false
          )}
          {props.xbox ? (
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
              <path d="M11.3007 11.1911C8.21538 14.281 6.34886 18.3807 6.0442 22.7366C5.73955 27.0925 7.01723 31.4121 9.64243 34.9014C9.65235 34.9168 9.66732 34.9282 9.68478 34.9338C9.70223 34.9393 9.72107 34.9386 9.73805 34.9318C9.75198 34.9214 9.7617 34.9064 9.76542 34.8894C9.76914 34.8725 9.76661 34.8547 9.7583 34.8395C8.40038 30.597 15.3396 20.3129 18.9308 16.0018C18.9448 15.9873 18.9538 15.9688 18.9567 15.9489C18.9555 15.9373 18.9519 15.9261 18.9461 15.916C18.9403 15.9059 18.9324 15.8972 18.9229 15.8904C12.8893 9.82529 11.2782 11.2102 11.3007 11.1911ZM36.3363 11.19C39.4206 14.2803 41.2863 18.3799 41.5905 22.7354C41.8947 27.0909 40.6171 31.41 37.9924 34.8991C37.9826 34.9147 37.9677 34.9263 37.9501 34.9319C37.9326 34.9374 37.9137 34.9366 37.8968 34.9295C37.8836 34.9186 37.8744 34.9036 37.8707 34.8869C37.867 34.8702 37.8691 34.8527 37.8765 34.8373C39.2344 30.5947 32.2974 20.3028 28.7119 15.9905C28.6977 15.9772 28.6885 15.9593 28.686 15.9399C28.6866 15.9279 28.6899 15.9161 28.6957 15.9055C28.7016 15.895 28.7098 15.886 28.7198 15.8792C34.7556 9.81179 36.3566 11.2091 36.3363 11.19ZM23.8191 6.00014C27.0988 5.98822 30.3154 6.90146 33.0996 8.635C33.1134 8.6436 33.1236 8.65697 33.1282 8.67258C33.1327 8.68819 33.1315 8.70494 33.1245 8.71965C33.1176 8.73437 33.1055 8.74602 33.0905 8.7524C33.0755 8.75877 33.0587 8.75943 33.0433 8.75425C29.5939 8.0016 24.3512 11.0122 23.8562 11.3126C23.8458 11.3222 23.8322 11.3276 23.818 11.3276C23.8038 11.3276 23.7901 11.3222 23.7797 11.3126C22.4645 10.5498 17.6179 7.9836 14.5667 8.77338C14.5508 8.77922 14.5333 8.77915 14.5174 8.77316C14.5015 8.76717 14.4882 8.75567 14.4801 8.74075C14.4737 8.72475 14.4732 8.70699 14.4788 8.69068C14.4844 8.67437 14.4956 8.6606 14.5105 8.65187C17.3005 6.90617 20.528 5.98675 23.8191 6.00014ZM23.8191 20.4356C23.8404 20.4387 23.8601 20.4485 23.8754 20.4637C29.2069 24.5634 38.3322 34.6888 35.5454 37.5475C32.3121 40.416 28.1397 42 23.8174 42C19.4951 42 15.3227 40.416 12.0894 37.5475C9.30716 34.6888 18.4313 24.5634 23.7572 20.4648C23.7745 20.4493 23.7961 20.4383 23.8191 20.4356Z"></path>
            </svg>
          ) : (
            false
          )}
          {props.playstation ? (
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
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.4698 14.3094V24.9187C32.934 27.0788 36.4518 24.9187 36.4518 19.2127C36.4518 13.387 34.3914 10.7916 28.3261 8.70324C25.9343 7.90864 21.5021 6.56301 18.4475 6V37.6842L25.6229 39.9561V13.391C25.6229 12.1412 26.1819 11.3066 27.0763 11.5941C28.2422 11.9176 28.4698 13.0715 28.4698 14.3094ZM42.7052 28.2567C39.7025 27.1267 35.8813 26.7394 32.7628 27.0788C29.6403 27.4182 27.4202 28.2048 27.4202 28.2048L26.981 28.3486V32.665L34.6474 29.9617C35.9651 29.4866 37.8778 29.3867 38.9479 29.7381C40.002 30.0815 39.8024 30.7404 38.5006 31.2235L26.977 35.3243V39.473L42.6294 33.8509C42.6294 33.8509 44.7337 33.0683 45.6041 31.9902C46.4706 30.9001 46.0873 29.3348 42.7052 28.2567ZM5.29903 34.8891C1.83313 33.9228 1.25416 31.8784 2.83537 30.7005C4.29679 29.6224 6.78441 28.8118 6.78441 28.8118L17.0543 25.1503V29.3189L9.66333 31.9663C8.35364 32.4374 8.15799 33.0963 9.21213 33.4397C10.2862 33.799 12.1909 33.7032 13.5006 33.22L17.0543 31.9383V35.6597L16.9852 35.6707C16.7758 35.7037 16.548 35.7396 16.3396 35.7755C12.7978 36.3665 9.02446 36.1229 5.29903 34.8891ZM43.1803 36.5621C42.17 36.5621 41.4753 37.3128 41.4753 38.2592C41.4753 39.2135 42.17 39.9562 43.1803 39.9562C44.1905 39.9562 44.8693 39.2135 44.8693 38.2592C44.8693 37.3128 44.1905 36.5621 43.1803 36.5621ZM43.1803 39.7086C42.3058 39.7086 41.7468 39.0617 41.7468 38.2631C41.7468 37.4725 42.3058 36.8257 43.1803 36.8257C44.0387 36.8257 44.6058 37.4725 44.6058 38.2631C44.6058 39.0617 44.0387 39.7086 43.1803 39.7086ZM43.5475 38.2592V38.2671C43.6753 38.2991 43.7631 38.3989 43.823 38.6225C43.8583 38.7439 43.896 38.8616 43.9322 38.9743C43.9614 39.0655 43.9896 39.1535 44.0147 39.2374H43.6553C43.6257 39.1461 43.5899 39.0151 43.5575 38.8963C43.5375 38.8229 43.5188 38.7542 43.5036 38.7024C43.4477 38.4748 43.3838 38.4029 43.0883 38.4029H42.8567V39.2374H42.5053V37.2729H43.2839C43.6433 37.2729 43.9068 37.3807 43.9068 37.784C43.9068 38.0156 43.795 38.1873 43.5475 38.2592ZM42.8607 38.1553H43.1721C43.4197 38.1553 43.5714 38.0595 43.5714 37.8319C43.5714 37.5644 43.3878 37.5244 43.1961 37.5244H42.8607V38.1553Z"
              ></path>
            </svg>
          ) : (
            false
          )}
          {props.nintendo ? (
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
              <path d="M11.6054 16.8024C11.6054 17.4726 11.8041 18.1278 12.1765 18.6851C12.5489 19.2425 13.0782 19.6768 13.6974 19.9333C14.3167 20.1898 14.9981 20.2569 15.6554 20.1262C16.3128 19.9954 16.9167 19.6726 17.3906 19.1987C17.8646 18.7247 18.1874 18.1209 18.3181 17.4635C18.4489 16.8061 18.3818 16.1247 18.1253 15.5055C17.8688 14.8862 17.4344 14.3569 16.8771 13.9846C16.3198 13.6122 15.6646 13.4134 14.9943 13.4134C14.0975 13.4134 13.2374 13.7697 12.6033 14.4038C11.9692 15.0379 11.6129 15.898 11.6129 16.7948L11.6054 16.8024ZM20.4635 39.0952H15.2288C13.5515 39.0932 11.9433 38.4265 10.7566 37.2412C9.56984 36.0559 8.90124 34.4485 8.89724 32.7712V15.2289C8.89724 14.3978 9.06106 13.5748 9.37935 12.8071C9.69763 12.0393 10.1641 11.3418 10.7522 10.7545C11.3402 10.1672 12.0383 9.70151 12.8064 9.38414C13.5745 9.06678 14.3977 8.90393 15.2288 8.90493H20.4635V39.0952ZM23.096 6.00013H15.2288C12.7812 6.00013 10.4338 6.97244 8.70305 8.70318C6.97232 10.4339 6 12.7813 6 15.2289L6 32.7712C6 33.9831 6.23871 35.1832 6.7025 36.3029C7.16629 37.4226 7.84608 38.44 8.70305 39.2969C10.4338 41.0277 12.7812 42 15.2288 42H23.096C23.1662 42 23.2335 41.9721 23.2832 41.9225C23.3328 41.8728 23.3607 41.8055 23.3607 41.7352V6.26489C23.3608 6.19596 23.3339 6.12974 23.2859 6.0803C23.2378 6.03086 23.1724 6.0021 23.1035 6.00013H23.096ZM34.0873 22.1581C34.8132 22.1431 35.5269 22.3457 36.1367 22.7397C36.7466 23.1337 37.2246 23.7011 37.5093 24.3689C37.794 25.0368 37.8724 25.7746 37.7344 26.4874C37.5965 27.2001 37.2484 27.8554 36.735 28.3687C36.2217 28.8821 35.5665 29.2302 34.8537 29.3681C34.1409 29.5061 33.4031 29.4277 32.7353 29.143C32.0674 28.8582 31.5 28.3802 31.106 27.7704C30.712 27.1606 30.5095 26.4469 30.5244 25.721C30.5418 24.7815 30.9228 23.8854 31.5873 23.221C32.2517 22.5565 33.1478 22.1755 34.0873 22.1581ZM27.2262 42H32.7711C33.983 42 35.1831 41.7613 36.3028 41.2975C37.4225 40.8337 38.4398 40.1539 39.2968 39.2969C40.1538 38.44 40.8336 37.4226 41.2974 36.3029C41.7612 35.1832 41.9999 33.9831 41.9999 32.7712V15.2289C41.9999 14.017 41.7612 12.8169 41.2974 11.6972C40.8336 10.5775 40.1538 9.56015 39.2968 8.70318C38.4398 7.84621 37.4225 7.16642 36.3028 6.70263C35.1831 6.23884 33.983 6.00013 32.7711 6.00013H27.1808C27.1504 5.99911 27.1201 6.00423 27.0917 6.01518C27.0633 6.02613 27.0373 6.04268 27.0155 6.06386C26.9936 6.08503 26.9762 6.1104 26.9643 6.13843C26.9524 6.16647 26.9463 6.19661 26.9463 6.22706V41.7352C26.9463 41.8042 26.9732 41.8704 27.0212 41.9198C27.0692 41.9693 27.1346 41.998 27.2035 42H27.2262Z"></path>
            </svg>
          ) : (
            false
          )}
          {props.apple ? (
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
              <path d="M24.4792 13.4929C22.9055 13.4929 20.4696 11.6965 17.9043 11.7614C14.5199 11.8047 11.4157 13.731 9.66954 16.7828C6.15577 22.908 8.76415 31.9552 12.1917 36.9333C13.8731 39.3574 15.8564 42.0846 18.4863 41.998C21.0085 41.8898 21.957 40.3531 25.0181 40.3531C28.0576 40.3531 28.9199 41.998 31.5929 41.9331C34.3091 41.8898 36.0337 39.4657 37.6935 37.0199C39.6121 34.2062 40.4097 31.479 40.4528 31.3275C40.3882 31.3059 35.1714 29.293 35.1067 23.2327C35.0636 18.168 39.2241 15.7439 39.4181 15.6357C37.0468 12.151 33.4037 11.7614 32.1319 11.6748C28.8121 11.4151 26.0312 13.4929 24.4792 13.4929ZM30.084 8.38496C31.4851 6.69673 32.4121 4.33754 32.1534 2C30.1486 2.08658 27.7342 3.34192 26.2899 5.03015C24.9965 6.52358 23.8756 8.92606 24.1774 11.2203C26.3977 11.3935 28.6827 10.0732 30.084 8.38496Z"></path>
            </svg>
          ) : (
            false
          )}
          {props.playstore ? (
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
              <path d="M26.248 22.3857L31.6804 16.824L9.43356 4.27782C9.43356 4.27782 8.39882 4.14848 8.14014 4.27782C8.52816 4.66585 26.248 22.3857 26.248 22.3857Z"></path>
              <path d="M8.17041 43.7221C8.42909 43.8515 9.46383 43.7221 9.46383 43.7221L31.7106 31.176L26.2783 25.6143C26.2783 25.6143 8.55844 43.3341 8.17041 43.7221Z"></path>
              <path d="M6.3288 5.83008C6.3288 5.83008 6.19946 6.34745 6.19946 10.4864C6.19946 14.6253 6.19946 24.0673 6.19946 24.0673C6.19946 24.0673 6.19946 33.5092 6.19946 37.6482C6.19946 41.7871 6.3288 42.3045 6.3288 42.3045L24.566 24.0673L6.3288 5.83008Z"></path>
              <path d="M41.9911 24.0667C41.9911 22.9027 40.7339 22.1266 40.7339 22.1266L33.8788 18.117L27.8618 24.0667C27.8618 24.0667 27.8657 24.0667 27.8709 24.0667L33.8879 30.0165L40.743 26.0069C40.743 26.0069 42.0002 25.2308 42.0002 24.0667C41.9976 24.0667 41.9937 24.0667 41.9911 24.0667Z"></path>
            </svg>
          ) : (
            false
          )}
        </div>
      </a>
    </div>
  )
}

export default GameCard