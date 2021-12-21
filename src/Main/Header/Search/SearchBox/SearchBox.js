import React from "react"
import submit from "./submit.svg"
import classes from "./SearchBox.module.css"

function SearchBox() {
    const [search, setSearch] = React.useState('');

    const handleSearchChange = (search) => {
        setSearch(search);
        console.log(search);
    }


    return(
        <div className={classes.box}>
            <form action="">
                <select>
                    <option value="all">Везде</option>
                    <option value="notAll">Не Везде</option>
                </select>
                <input placeholder={'Найти'} value={search} onChange={e => handleSearchChange(e.target.value)} />
                <button type="submit">
                    <img src={submit} alt="submit" width="24" height="24"/>
                </button>
            </form>
        </div>
    )
}

export default SearchBox