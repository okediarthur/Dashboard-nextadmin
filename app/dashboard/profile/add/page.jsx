import styles from '@/app/ui/dashboard/profile/addProfile/addProfile.module.css'

const AddProfilePage = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder='Username' name='Username' required />
                <input type="email" placeholder='Email' name='Email' required />
                <input type="password" placeholder='Password' name='Password' required />
                <input type="phone" placeholder='Phone' name='Phone' />
                <select name="isAdmin" id="isAdmin">
                    <option value={false}>Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive">
                    <option value={true}>Is Active?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <textarea name='address' id='addressc' rows="16" placeholder='Address'></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddProfilePage;