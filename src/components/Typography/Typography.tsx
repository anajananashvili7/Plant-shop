import styles from "./Typography.module.css"

type Props = {
    className?: string,
    size: string,
    children: React.ReactNode
}

const Typography = ({ size, children }:Props) => {

const className = [styles.container, styles['size-' + size]].join(' ')

    return <span className={styles.container}>{children}</span>
}

export default Typography;