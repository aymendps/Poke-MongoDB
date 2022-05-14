import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

function PokemonDeleteForm(props)
{
    const task = (e) => {
        e.preventDefault(); // Prevent form from refreshing the page on button click
        deletePokemon();
      }

    const cancel = (e) => {
        e.preventDefault(); // Prevent form from refreshing the page on button click
        props.cancel(); // Hide form
      }

    const preventString = () =>{ // Prevents number input field from having a string value
        var x = document.getElementById("deleteForm").elements["iNumber"].value;
        if(x === "") {document.getElementById("deleteForm").elements["iNumber"].value = 1}
    }

    async function deletePokemon()
    {
        var number = document.getElementById("deleteForm").elements["iNumber"].value;
        
        if(number==="") // if the number field was left empty
        {
            alertify.error("Error: Number field is empty!") 
        }
        else // a pokemon number was given
        {
            const response = await fetch(process.env.REACT_APP_API_URL + number + "/",{
                method: 'DELETE'
            });
            const json = await response.json().catch(() => {return;}); //in case of error, leave 'const json' as undefined

            if(json === undefined) // if express router didn't apply the delete method, hence json is undefined
            {
                alertify.error("Error: Pokemon with this number does not exist!");
            }
            else // express router returned the deleted pokemon json
            {
                props.update(); // update current pokemon list
                alertify.success("Pokemon was deleted successfully!")
                props.cancel(); // hide form after a successful task
            }
        }
    }

    const Form = (
        <form id ="deleteForm">
        <span className='cancelButton'></span>
        <button id='cancelButton' onClick={cancel}>X</button>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
         <label htmlFor="iNumber">◓Pokemon Number◓</label><br></br>
         <input type="number" min='1' onKeyUp={preventString} name="iNumber"></input><br></br><br></br><br></br>
         <button id='taskButton' onClick= {task}>Delete Pokemon!</button>
        </form>
        
    );
    return (
      <div id='formContainer'>
          {Form}
      </div>
    ) ;
}
export default PokemonDeleteForm;