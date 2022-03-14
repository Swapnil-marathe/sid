import logo from './images/logo.svg';
function Searchform() {
    return (
        <div className="container">
            <br/>
            <div className="row">
            <div className="col-8">
                <form>

                    <div class="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <select id="inputCity" class="form-control">
                                <option selected>Choose City...</option>
                                <option>...</option>
                            </select>
                        </div>

                        <div class="form-group col-md-2">
                            <label for="inputCin">Check In</label>
                            <input type="date" class="form-control" id="inputCin" />
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputCout">Check Out</label>
                            <input type="date" class="form-control" id="inputCout" />
                        </div>
                    </div>
                    <br />
                    <button type="submit" class="btn btn-primary">Search</button>
                </form>
            </div>
        <div className="col">
            <img src={logo}/>
        </div>
</div>
        </div>
    )

}
export default Searchform;