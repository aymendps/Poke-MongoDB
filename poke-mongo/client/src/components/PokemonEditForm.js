import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

function PokemonEditForm(props)
{
    const preventString = () =>{ // Prevents number input field from having a string value
        var x = document.getElementById("editForm").elements["iNumber"].value;
        if(x === "") {document.getElementById("editForm").elements["iNumber"].value = 1}
    }

    async function updatePokemon(object)
    {
        const response = await fetch(process.env.REACT_APP_API_URL + object.number + "/",{
            method: 'PUT',
            body: JSON.stringify(object),
            headers: {
                'Content-Type': 'application/json'
              }
        });
        const json = await response.json().catch(() => {return;}); //in case of error, leave 'const json' as undefined

        if(json === undefined) // if express router didn't apply the delete method, hence json is undefined
        {
            alertify.error("Error: Pokemon with this number does not exist!");
        }
        else
        {
            props.update(); // update current pokemon list
            alertify.success("Pokemon was updated successfully!")
            props.cancel(); // hide form after successful task
        }
    }

    const task = (e) => {
        e.preventDefault(); // Prevent form from refreshing the page on button click
        var  number = document.getElementById("editForm").elements["iNumber"].value;
        if (number === ""){ // no number was given
        
            alertify.error("Error: Make sure you have filled the number field properly!")
        }
        else // number was given
        {   
            const card = props.getCard(number); //find the pokemon in the list 

            if(card === undefined) //no such pokemon is in the list (which is always in sync with the database)
            {
                alertify.error("Error: Pokemon with this number does not exist!");
                return;
            }

            var  name = document.getElementById("editForm").elements["iName"].value;
            if(name === "") // if name was left empty, do not edit the name value
            {
                name = card.name;
            }

            var t = document.getElementById("editForm").elements["iTypes"].value;
            var types = t.split(" ");
            if(t === "Same") // if 'keep same type' was selected, do not edit the types value
            {
                types = card.types.slice();
            }   

            var imageUrl= document.getElementById("editForm").elements["iUrl"].value;
            if(imageUrl === "") // if image url was left empty, do not edit the url value
            {
                imageUrl = card.imageUrl;
            }

            const formDataHolder = { // create the new object
                number: number,
                name: name,
                types: types,
                imageUrl: imageUrl
            }

            updatePokemon(formDataHolder); // update the pokemon with the new object
        }
    }

    const cancel = (e) => {
        e.preventDefault(); // Prevent form from refreshing page on button click
        props.cancel(); // Hide form
      }
    const Form = (
        <form id ='editForm'>
        <span className='cancelButton'></span>
        <button id='cancelButton' onClick={cancel}>X</button>
        <br></br><br></br><br></br>
        <label htmlFor="iNumber">◓Pokemon Number◓</label><br></br>
        <input type= 'number' min='1' onKeyUp={preventString} name = 'iNumber'></input>
        <h4>____|New Info|____</h4>
        <label htmlFor = "iName">◓Pokemon Name◓</label><br></br>
        <input type='text' name ='iName'></input><br></br>
        <label htmlFor = 'iTypes'>◓Pokemon Type◓</label><br></br>
            <select name="iTypes">
                <option value="Same">Keep same type</option>
                <option value="Fire">Fire</option>
                <option value="Water">Water</option>
                <option value="Bug">Bug</option>
                <option value="Normal">Normal</option>
                <option value="Poison">Poison</option>
                <option value="Electric">Electric</option>
                <option value="Ground">Ground</option>
                <option value="Fighting">Fighting</option>
                <option value="Psychic">Psychic</option>
                <option value="Rock">Rock</option>
                <option value="Grass">Grass</option>
                <option value="Dragon">Dragon</option>
                <option value="Water Flying">Water & Flying</option>
                <option value="Grass Poison">Grass & Poison</option>
                <option value="Fire Flying">Fire & Flying</option>
                <option value="Bug Flying">Bug & Flying</option>
                <option value="Bug Poison">Bug & Poison</option>
                <option value="Normal Flying">Normal & Flying</option>
                <option value="Poison Ground">Poison & Ground</option>
                <option value="Poison Flying">Poison & Flying</option>
                <option value="Bug Grass">Bug & Grass</option>
                <option value="Water Fighting">Water & Fighting</option>
                <option value="Rock Ground">Rock & Ground</option>
                <option value="Water Poison">Water & Poison</option>
                <option value="Water Psychic">Water & Psychic</option>
                <option value="Water Ice">Water & Ice</option>
                <option value="Ghost Poison">Ghost & Poison</option>
                <option value="Grass Psychic">Grass & Psychic</option>
                <option value="Ground Rock">Ground & Rock</option>
                <option value="Ice Psychic">Ice & Psychic</option>
                <option value="Rock Water">Rock & Water</option>
                <option value="Rock Flying">Rock & Flying</option>
                <option value="Ice Flying">Ice & Flying</option>
                <option value="Electric Flying">Electric & Flying</option>
                <option value="Fire Flying">Fire & Flying</option>
                <option value="Dragon Flying">Water & Flying</option>
            </select> <br></br><br></br>
        <label htmlFor = 'iUrl'>Pokemon Image</label><br></br>
        <input type='url' name="iUrl"></input><br></br>
        <button id='taskButton' onClick= {task}>Edit Pokemon!</button>
        </form>
    );
    return (
        <div id='formContainer'>
            {Form}
        </div>
    ) ;

}
export default PokemonEditForm;