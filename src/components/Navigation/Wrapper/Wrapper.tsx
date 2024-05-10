'use client'
import styles from "./Wrapper.module.css"

type Props = {
    children: React.ReactNode
}


const Wrapper = ({ open, setOpen, children }: Props) => {

const className = [styles.wrapper, open ? styles.open : ' '].join(' ')

    return (
        <div className={className} onClick={()=>setOpen(false)}>
            <div className={styles.container} onClick={(event)=> event.stopPropagation}>
                {children}
            </div>
        </div>
    )

}

export default Wrapper;