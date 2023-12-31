import s from './SubmitApplication.module.css'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { LOGIN_ROUTE } from '../../../utils/constants'
import Modal from '../../UI/modal/Modal'
import SvgSuccess from '../../UI/svgSuccess/SvgSuccess'
import firebase from '../../../firebase'
import { useGetCoursesQuery } from '../../../services/courses'

export default function SubmitApplication({ id }) {
    const navigate = useNavigate()
    const { access, userID } = useSelector((state) => state.auth)
    const [modalActive, setModalActive] = useState(false)
    const { refetch } = useGetCoursesQuery()

    const addUserToCourse = () => {
        //получаем ссылку на объект курса в firebase
        const courseRef = firebase.database().ref(`courses/${id}`)

        courseRef.once('value', (snapshot) => {
            const courseFirebase = snapshot.val()
            console.log('snapshot', snapshot)

            // Проверяем, записан ли пользователь на этот курс
            if (courseFirebase.users && Array.isArray(courseFirebase.users)) {
                // Если пользователь уже записан на курс, то ничего не делаем
                if (courseFirebase.users.includes(userID)) {
                    toast('Вы уже записаны на данный курс', {
                        className: s.error,
                    })
                    return
                }

                // Добавляем идентификатор пользователя в массив
                courseFirebase.users.push(userID)
                refetch()
            } else {
                // Создаем новый массив с идентификатором пользователя
                courseFirebase.users = [userID]
            }

            // Обновляем объект курса в базе данных
            courseRef
                .update(courseFirebase)
                .then(() => {
                    setModalActive(true)
                    refetch()
                })
                .catch((error) => {
                    toast(error, {
                        className: s.error,
                    })
                })
        })
    }

    return (
        <div className={s.application}>
            <div className={s.applicationContainer}>
                <p className={s.applicationText}>
                    Оставьте заявку на пробное занятие, мы свяжемся с вами,
                    поможем с выбором направления и тренера, с которым
                    тренировки принесут здоровье и радость!
                </p>
                <button
                    type="submit"
                    className={s.applicationButton}
                    onClick={() => {
                        if (access) {
                            addUserToCourse()
                        } else {
                            navigate(LOGIN_ROUTE)
                        }
                    }}
                >
                    Записаться на тренировку
                </button>

                <Modal active={modalActive} setActive={setModalActive}>
                    <SvgSuccess text="Вы успешно записались на курс!" />
                </Modal>
            </div>

            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1160 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={s.applicationSvg}
            >
                <g clipPath="url(#clip0_26_1448)">
                    <rect width="1160" height="300" rx="30" fill="#F9EBFF" />

                    <path
                        d="M1053.36 177.835C1036 169.879 1033.31 139.905 1033.31 139.905C1033.31 139.905 1005.14 175.131 994.397 163.384C985.995 154.204 1008.96 120.893 1037.32 112.113C1060.06 105.081 1071.57 136.231 1074.88 148.971C1083.5 182.233 1141.8 205.352 1193.2 229.189"
                        stroke="#271A58"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                    <path
                        d="M1002.04 165.595C1007.75 170.639 1013.93 173.699 1018.13 172.477C1025.8 170.242 1027.55 164.194 1027.41 158.788"
                        stroke="#271A58"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                    <path
                        d="M1018.29 155.496C1022.33 158.053 1026.25 159.299 1029.19 158.443C1032.53 157.47 1034.74 155.775 1036.17 153.725"
                        stroke="#271A58"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                    <path
                        d="M992.839 155.164C982.104 141.176 973.783 122.391 979.394 114.982C981.819 111.777 985.498 110.462 988.646 109.959"
                        stroke="#271A58"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                    <path
                        d="M1001.56 138.275C991.946 124.717 985.12 107.996 990.336 101.107C993.148 97.3923 997.643 96.2175 1001.04 95.9011"
                        stroke="#271A58"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                    <path
                        d="M980.51 134.057C980.51 134.057 969.813 131.329 965.762 140.725C959.123 156.083 1000.35 204.741 1013.65 194.767C1022.8 187.904 1018.13 172.49 1018.13 172.49"
                        stroke="#271A58"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                    <path
                        d="M981.099 176.025C981.099 176.025 976.04 181.362 983.168 192.83C994.32 210.774 1011.3 214.874 1016.55 207.722C1022.16 200.088 1015.26 193.32 1015.26 193.32"
                        stroke="#271A58"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                    <path
                        d="M1008.97 109.11L1021.95 119.447"
                        stroke="#271A58"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                    <path
                        d="M1028.77 210.063C1033.26 208.301 1037.56 205.569 1040.26 203.481C1040.26 203.481 1088.56 241.244 1167.4 276.927L1193.2 229.189"
                        stroke="#271A58"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                    <path
                        d="M1000.26 140.389C1000.26 140.389 1000.64 153.183 994.384 163.389"
                        stroke="#271A58"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                    <path
                        d="M1012.29 160.669C1012.89 160.648 1020.23 164.606 1022.38 170.247"
                        stroke="#271A58"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                    <path
                        d="M1033.32 156.371C1031.95 152.751 1028.43 149.824 1025.93 148.197"
                        stroke="#271A58"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                    <path
                        d="M990.673 185.907C990.673 185.907 996.355 177.74 1002.26 179.522C1008.16 181.304 1017.68 188.876 1017.68 188.876"
                        stroke="#271A58"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                    <path
                        d="M996.025 206.083C996.025 206.083 1000.55 200.186 1004.99 201.296C1009.44 202.406 1016.49 207.509 1016.49 207.509"
                        stroke="#271A58"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                    <ellipse
                        cx="950.492"
                        cy="224.784"
                        rx="27.4047"
                        ry="37.9638"
                        transform="rotate(44.5136 950.492 224.784)"
                        stroke="#271A58"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                    <ellipse
                        cx="949.897"
                        cy="223.683"
                        rx="15.4173"
                        ry="21.3577"
                        transform="rotate(44.5136 949.897 223.683)"
                        stroke="#271A58"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                    <ellipse
                        cx="949.897"
                        cy="223.684"
                        rx="1.62117"
                        ry="2.24581"
                        transform="rotate(44.5136 949.897 223.684)"
                        fill="#271A58"
                    />
                    <ellipse
                        cx="944.586"
                        cy="228.679"
                        rx="1.62117"
                        ry="2.24581"
                        transform="rotate(44.5136 944.586 228.679)"
                        fill="#271A58"
                    />
                    <ellipse
                        cx="955.451"
                        cy="218.642"
                        rx="1.62117"
                        ry="2.24581"
                        transform="rotate(44.5136 955.451 218.642)"
                        fill="#271A58"
                    />
                    <ellipse
                        cx="949.865"
                        cy="217.831"
                        rx="1.62117"
                        ry="2.24581"
                        transform="rotate(44.5136 949.865 217.831)"
                        fill="#271A58"
                    />
                    <ellipse
                        cx="955.915"
                        cy="224.912"
                        rx="1.62117"
                        ry="2.24581"
                        transform="rotate(44.5136 955.915 224.912)"
                        fill="#271A58"
                    />
                    <ellipse
                        cx="944.547"
                        cy="222.638"
                        rx="1.62117"
                        ry="2.24581"
                        transform="rotate(44.5136 944.547 222.638)"
                        fill="#271A58"
                    />
                    <ellipse
                        cx="950.596"
                        cy="229.718"
                        rx="1.62117"
                        ry="2.24581"
                        transform="rotate(44.5136 950.596 229.718)"
                        fill="#271A58"
                    />
                    <path
                        d="M960.891 234.492L961.248 234.843L960.891 234.492ZM935.841 239.722L935.411 239.978L935.458 240.057L935.531 240.115L935.841 239.722ZM966.667 210.744L967.097 210.488L967.05 210.409L966.977 210.352L966.667 210.744ZM941.617 215.974L941.261 215.624L941.617 215.974ZM960.534 234.142C956.662 238.08 952.053 240.573 947.665 241.477C943.273 242.382 939.14 241.693 936.151 239.33L935.531 240.115C938.81 242.706 943.267 243.404 947.866 242.457C952.468 241.509 957.25 238.909 961.248 234.843L960.534 234.142ZM966.238 211C969.851 217.066 967.758 226.794 960.534 234.142L961.248 234.843C968.646 227.317 971.033 217.097 967.097 210.488L966.238 211ZM941.974 216.325C945.846 212.386 950.455 209.894 954.843 208.989C959.235 208.085 963.368 208.774 966.357 211.137L966.977 210.352C963.698 207.76 959.241 207.062 954.642 208.01C950.04 208.958 945.258 211.558 941.261 215.624L941.974 216.325ZM936.27 239.466C932.657 233.4 934.75 223.672 941.974 216.325L941.261 215.624C933.862 223.149 931.475 233.37 935.411 239.978L936.27 239.466Z"
                        fill="#271A58"
                    />
                    <path
                        d="M976.543 197.178L987.176 207.5C997.969 218.111 994.802 238.833 980.103 253.784C965.403 268.735 944.738 272.254 933.945 261.643L923.183 251.166"
                        stroke="#271A58"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                    <ellipse
                        cx="1015.02"
                        cy="62.651"
                        rx="27.4047"
                        ry="37.9638"
                        transform="rotate(2.14363 1015.02 62.651)"
                        stroke="#271A58"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                    <ellipse
                        cx="1013.84"
                        cy="62.239"
                        rx="15.4173"
                        ry="21.3577"
                        transform="rotate(2.14363 1013.84 62.239)"
                        stroke="#271A58"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                    <ellipse
                        cx="1013.84"
                        cy="62.2391"
                        rx="1.62116"
                        ry="2.2458"
                        transform="rotate(2.14363 1013.84 62.2391)"
                        fill="#271A58"
                    />
                    <ellipse
                        cx="1013.28"
                        cy="69.5093"
                        rx="1.62116"
                        ry="2.2458"
                        transform="rotate(2.14363 1013.28 69.5093)"
                        fill="#271A58"
                    />
                    <ellipse
                        cx="1014.54"
                        cy="54.7716"
                        rx="1.62116"
                        ry="2.2458"
                        transform="rotate(2.14363 1014.54 54.7716)"
                        fill="#271A58"
                    />
                    <ellipse
                        cx="1009.87"
                        cy="57.9366"
                        rx="1.62116"
                        ry="2.2458"
                        transform="rotate(2.14363 1009.87 57.9366)"
                        fill="#271A58"
                    />
                    <ellipse
                        cx="1019.11"
                        cy="59.0916"
                        rx="1.62116"
                        ry="2.2458"
                        transform="rotate(2.14363 1019.11 59.0916)"
                        fill="#271A58"
                    />
                    <ellipse
                        cx="1009.18"
                        cy="65.0717"
                        rx="1.62116"
                        ry="2.2458"
                        transform="rotate(2.14363 1009.18 65.0717)"
                        fill="#271A58"
                    />
                    <ellipse
                        cx="1018.42"
                        cy="66.2267"
                        rx="1.62116"
                        ry="2.2458"
                        transform="rotate(2.14363 1018.42 66.2267)"
                        fill="#271A58"
                    />
                    <path
                        d="M1029.24 62.8153L1029.74 62.834L1029.24 62.8153ZM1014.26 83.5611L1014.12 84.0396L1014.2 84.0664L1014.3 84.0599L1014.26 83.5611ZM1017.51 41.3777L1017.65 40.8991L1017.56 40.8724L1017.47 40.8789L1017.51 41.3777ZM1002.52 62.1234L1002.02 62.1047L1002.52 62.1234ZM1028.74 62.7966C1028.54 68.3165 1026.81 73.2639 1024.18 76.8897C1021.54 80.5175 1018.03 82.7933 1014.22 83.0624L1014.3 84.0599C1018.47 83.7647 1022.23 81.2768 1024.99 77.4774C1027.75 73.676 1029.53 68.5326 1029.74 62.834L1028.74 62.7966ZM1017.36 41.8562C1024.12 43.903 1029.13 52.5004 1028.74 62.7966L1029.74 62.834C1030.14 52.2883 1025.01 43.1289 1017.65 40.8991L1017.36 41.8562ZM1003.02 62.1421C1003.23 56.6222 1004.96 51.6748 1007.59 48.049C1010.22 44.4212 1013.74 42.1455 1017.54 41.8764L1017.47 40.8789C1013.3 41.1741 1009.54 43.662 1006.78 47.4614C1004.02 51.2628 1002.24 56.4062 1002.02 62.1047L1003.02 62.1421ZM1014.4 83.0826C1007.65 81.0358 1002.64 72.4384 1003.02 62.1421L1002.02 62.1047C1001.63 72.6505 1006.75 81.8099 1014.12 84.0396L1014.4 83.0826Z"
                        fill="#271A58"
                    />
                    <path
                        d="M1015.66 24.6998L1030.47 25.1596C1045.6 25.7257 1057.22 43.1697 1056.44 64.1219C1055.65 85.074 1042.76 101.6 1027.63 101.034L1012.62 100.547"
                        stroke="#271A58"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                    <path
                        d="M948.243 267.765C963.386 273.71 984.755 277.673 1006.18 245.941C1025.95 216.667 1033.15 205.568 1045.01 171.399M1045.14 31.7763C1057.84 40.2386 1063.66 51.3041 1065.94 73.0525C1067.32 86.2755 1065.55 101.041 1060.84 119.925M981.888 202.512C983.046 203.135 984.418 202.981 985.96 202.15C986.814 201.689 987.72 201.021 988.671 200.162M1019.82 100.825C1021.89 105.319 1023.19 109.644 1023.81 113.973C1024 115.327 1024.13 116.682 1024.19 118.043"
                        stroke="#271A58"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_26_1448">
                        <rect width="1160" height="300" rx="30" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}
