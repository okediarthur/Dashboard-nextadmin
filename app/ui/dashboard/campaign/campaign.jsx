import { MdOutlineCampaign } from "react-icons/md";
import styles from './campaign.module.css';

const Campaign = () => {
    return (
        <div className={styles.container}>
            <MdOutlineCampaign size ={24} />
            <div className={styles.texts}>
                <span className={styles.title}>New Campaign</span>
                <button className={styles.button}>Add</button>
            </div>
        </div>
    )
}

export default Campaign;