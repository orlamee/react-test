import React, { useState } from 'react';
import {useRef} from 'react';
import Error from './Error';
import  { STUDENTS } from '../studentsList';
import ResidentsList from '../Components/ResidentsList';


// `joiningDate` && `validityDate`  "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const [year, month, day] = joiningDate.split('-');
	const [yyyy, mm, dd] = validityDate.split('-');
	const maxValid = new Date(yyyy, mm - 1, dd);
	const selected = new Date(year, month - 1, day);
	return (maxValid >= selected) && (maxValid >= today);
}

function Search() {

	const inputRef = useRef(null);
	const [errorMsg, setErrorMsg]= useState(false);
	const [updatedJSON, setUpdatedJSON] = useState({});

	function handleSubmit(e) {
		e.preventDefault();
		const name = inputRef.current.value;
		for (const studentName of STUDENTS) {
			if(studentName.name === name){
				setErrorMsg(true)
				return;
			}else {
				setUpdatedJSON({
					"name": name
				})
			}
		}
	}
	return (
		<div>
			{ errorMsg ? <Error errorMsg={"Name Already Exists"} /> : "" }
			<form onSubmit={handleSubmit}>
				<div className="my-50 layout-row align-items-end justify-content-end">
					<label htmlFor="studentName">Student Name:
						<div>
							<input ref={inputRef} name='studentName' id="studentName" data-testid="studentName" type="text" className="mr-30 mt-10"/>
						</div>
					</label>
					<label htmlFor="joiningDate">Joining Date:
						<div>
							<input id="joiningDate" data-testid="joiningDate" type="date" className="mr-30 mt-10"/>
						</div>
					</label>
					<button type="submit" data-testid="addBtn" className="small mb-0">Add</button>
				</div>
			</form>

			<ResidentsList newData = { updatedJSON }/>
		</div>
	);
}

export default Search;
