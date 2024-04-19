import Navbar from "../ui/dashboard/navbar/navbar"
import Sidebar from "../ui/dashboard/sidebar/sidebar"
// import Campaign from "../ui/dashboard/campaign/campaign"
// import Status from "../ui/dashboard/campStatus/campStatus";
// import Calls from "../ui/dashboard/callStatus/callStatus";
import styles from "../ui/dashboard/dashboard.module.css"

const  Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar/>    
            </div>
            <div className={styles.content}>
                <Navbar/>
                {children}
                {/* <div className={styles.row}>
                    <Campaign/>
                    <Status/>
                    <Calls/>
                </div> */}
            </div>
        </div>
    )
}

export default Layout