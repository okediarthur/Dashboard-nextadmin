"use client`"
import { MdSearch } from 'react-icons/md'
import styles from './search.module.css'
import { usePathname, useSearchParams } from 'next/navigation'

const Search = ({placeholder}) => {
    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const pathname = usePathname();

    const params = new URLSearchParams(searchParams)

    params.set("test", "value")

    replace(`${pat}`)
    
    return(
        <div className={styles.container}>
            <MdSearch/>
            <input type="text" placeholder={placeholder} className={styles.input} />
        </div>
    )
}

export default Search