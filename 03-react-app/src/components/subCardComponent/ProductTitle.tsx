import styles from '../../styles/styles.module.css';



export const ProductTitle = ({ title }: { title: string }) => { // este tipo de interfaces es solo para elementos simples, si es algo más elabotarado, mejor hacerlo a parte
    return (
        <span className={ styles.productDescription } >{title}</span>
    )
}
