

export default function checkbox({label, checked , onChange}){

    // const [checked , setChecked] = useState(false); 

    return(
       <>

        <label>
            <input type="checkbox" checked = {checked} onChange={onChange}/>
            {label} {' '}

        </label>
        <p>{label}: {checked ? 'Checked' : 'Unchecked'}</p>
        

        </>
    )
}