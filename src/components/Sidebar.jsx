import styles from "./Sidebar.module.css"

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src="https://www.oversodoinverso.com.br/wp-content/uploads/2020/08/template.png" 
            />

            <div className={styles.profile}>
                <strong>Erick Santos</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>

    );
}