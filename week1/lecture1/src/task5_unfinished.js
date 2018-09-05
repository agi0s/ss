function happyTicket(ticket) {
	ticket += '';

	function sumThreeDigits (ticket) {
		for(let i = 0, firstpair, secondpair; i < ticket.length; i++){
			(i < 3) ? firstpair += +ticket[i] :
					  secondpair += +ticket[i];
		}
		return firstpair === secondpair;
	},
	function sumEvenAndOdd () => {
		for(let i = 0, firstpair, secondpair; i < ticket.length; i++){
			(i < 3) ? firstpair += +ticket[i] :
					  secondpair += +ticket[i];
		}
		return firstpair === secondpair;
	}
}

happyTicket.sumThreeDigits();
happyTicket.sumEvenAndOdd();