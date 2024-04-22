import Search from '@/app/ui/dashboard/search/search';
import styles from '@/app/ui/dashboard/campaigns/campaigns.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '@/app/ui/dashboard/pagination/pagination';

const  Campaigns = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a Campaign..." />
                <Link href="/dashboard/campaigns/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Campaign</td>
                        <td>Duration</td>
                        <td>Created on</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.campaign}>
                                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.campaignImage}/>
                                Ministry of Health
                            </div>
                        </td>
                        <td>Polio Campaign</td>
                        <td>6 Months</td>
                        <td>19.04.2024</td>
                        <td>Active</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/">
                                <button className={`${styles.button} ${styles.view}`}>View</button>
                            </Link>
                                <button className={`${styles.button} ${styles.delete}`}>delete</button>
                            </div>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination/>
        </div>
    )
}

export default Campaigns