import React from 'react';
import { STUDENTS } from '../studentsList';
function ResidentsList({newData}) {
	newData = {
		"name" : newData.name,
	}

	let students = [newData]

	students.push(...STUDENTS)

	return (
		<div className="pa-10 mt-10 w-75">   
		<div className="font-weight-bold text-center">Residents List</div> 
			{
				students.map((student, index) => (  
					<ul key={index} className='text-center'>
						<li>  
							{ student.name }
						</li>  
					</ul>
				))
			}  
    	</div>  
	);
}

export default ResidentsList;
