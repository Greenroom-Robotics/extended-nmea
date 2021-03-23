import {encode, parse} from "../extended-nmea.js";

import 'should';

describe('GLL ', function () {
	it('parses', function () {
		const msg = parse("$GPGLL,6005.068,N,02332.341,E,095601,A,D*42");

		msg.should.have.property('type', 'geo-position');
		msg.should.have.property('sentence', 'GLL');
		msg.should.have.property('lat', '6005.068');
		msg.should.have.property('latPole', 'N');
		msg.should.have.property('lon', '02332.341');
		msg.should.have.property('lonPole', 'E');
		msg.should.have.property('status', 'valid');
	});
});

describe('GLL', function () {
	it('encodes ok', function () {
		const nmeaMsg = encode('II', {
			type: 'geo-position',
			lat: 6005.06,
			latPole: 'N',
			lon: 2332.34,
			lonPole: 'E',
			timestamp: new Date(2013, 4, 1, 21, 17 - new Date().getTimezoneOffset(), 22),
			status: 'valid'
		});

		nmeaMsg.should.equal("$IIGLL,6005.06,N,2332.34,E,201722,A,D*63");
	});
});
