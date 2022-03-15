import logo from './images/logo.svg';
import states from "./data";
function Searchform() {
    return (
        <div className="container">
            <br/>
            <div className="row">
            <div className="col-8">
                <form>

                <div class="form-row">
                <label for="inputState">State</label>
            <select id="state">
                <option selected>
                    Select State
                </option>
                
                {
                    states.States.map((result)=>(<option text={result.Id}>{result.name}</option>))
                }
               
                
            </select>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="inputCity">City</label>
                            <select id="inputCity" class="form-control">
                                <option selected>Choose City...</option>
                                <option>...</option>
                            </select>
                        </div>

                        <div class="form-group col-md-4">
                            <label for="inputCin">Check In</label>
                            <input type="date" class="form-control" id="inputCin" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputCout">Check Out</label>
                            <input type="date" class="form-control" id="inputCout" />
                        </div>
                    </div>
                    <br />
                    <button type="submit" class="btn btn-primary">Search</button>
                </form>
            </div>
        <div className="col">
           
        </div>
</div>
        </div>
    )

}
export default Searchform;