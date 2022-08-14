import '../../App.css';


const Checkbox=({checked, changeTheme})=>{
    return (
   <div className="checkbox">
     {/* <label >
     </label> 
     <span></span>     */}
     <input  type='checkbox' onChange={changeTheme} checked={checked}/>
   </div>
    )
}
export default Checkbox