import styles from './Post.module.css'

export function Post(props){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://images.unsplash.com/photo-1674560109079-0b1cd708cc2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzcyOTE5MDM&ixlib=rb-4.0.3&q=50&w=500" />
                    <div className={styles.authorInfo}>
                        <strong>Valeria Teixeira</strong>
                        <span>Developer</span>
                    </div>
                </div>

                <time title='28 de fevereiro às 08:13' dateTime='2022-05-11 08:13:30'>Publica há 1h</time>
            </header>

            <div className={styles.content}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p><a href=''>👉 jane.design/doctorcare</a></p>

            <p><a href=''>#novoprojeto #nlw #rocketseat</a></p>
            </div>

        </article>
    )
}