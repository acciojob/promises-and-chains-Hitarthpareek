const form = document.getElementById("myForm");
const age = document.getElementById("age")
const name = document.getElementById("name")

const checkAge = () => {
	return new Promise((resolve,reject) =>{

		setTimeout(()=> {
					let mssg=""
					if(age.value>18)mssg="Welcome, . You can vote.";
						else mssg="Oh sorry . You aren't old enough.";
						 resolve(mssg)
						},4000)
	})
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

	if(age.value.trim().length===0 || name.value.trim().length===0){
		alert("Please enter valid details.")
		return
	}
	checkAge().then((data)=>{
		alert(data)
		form.submit(); // success
	})
	
   
});