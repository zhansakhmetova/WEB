
function finD(){
	let s11 = parseInt(document.getElementById('s11').value);
	let s12 = parseInt(document.querySelector('#s12').value);
	let s13 = parseInt(document.querySelector('#s13').value);
	let s21 = parseInt(document.querySelector('#s21').value);
	let s22 = parseInt(document.querySelector('#s22').value);
	let s23 = parseInt(document.querySelector('#s23').value);
	let s31 = parseInt(document.querySelector('#s31').value);
	let s32 = parseInt(document.querySelector('#s32').value);
	let s33 = parseInt(document.querySelector('#s33').value);
	let det = s11*(s22*s33-s23*s32) - s12*(s21*s33-s23*s31) + s13*(s21*s32-s22*s31);
	let res = document.getElementById('result');
	res.textContent = det;
}
const button = document.querySelector('#determinant');
button.addEventListener('click', finD);  