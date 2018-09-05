function canWrap(envelopeOne, envelopeTwo) {
	//swap values, if 1st of pair it'snt the biggest one
	if (envelopeOne.a < envelopeOne.b) {
		envelopeOne.a += envelopeOne.b;
		envelopeOne.b = envelopeOne.a - envelopeOne.b;
		envelopeOne.a -= envelopeOne.b;
	}
	if (envelopeTwo.c < envelopeTwo.d) {
		envelopeTwo.c += envelopeTwo.d;
		envelopeTwo.d = envelopeTwo.c - envelopeTwo.d;
		envelopeTwo.d -= envelopeTwo.c;
	}

    if (envelopeOne.a > envelopeTwo.c &&
        envelopeOne.b > envelopeTwo.d) {
        return 1;
    } else if (
        envelopeOne.a < envelopeTwo.c &&
        envelopeOne.b < envelopeTwo.d) {
        return 2;
    } else {
        return 0;
    }
}