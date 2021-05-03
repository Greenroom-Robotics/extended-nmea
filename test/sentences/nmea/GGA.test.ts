import {describe} from "mocha";
import {GGA, Decoder, GpsQualityIndicator} from "../../../src";
import {expect} from "chai";

describe('Sentence', function () {
	describe('GGA', function () {
		it('decodes values', function () {
			const decoded = Decoder.decodeTalker<GGA>('$GPGGA,115739.00,4158.8441367,N,09147.4416929,W,4,13,0.9,255.747,M,-32.00,M,01,0000*6E\r\n');

			expect(decoded.valid).to.equal(true);
			expect(decoded.talkerId).to.equal('GP');
			expect(decoded.sentenceId).to.equal('GGA');
			expect(decoded.time.hours).to.equal(11);
			expect(decoded.latitude).to.equal(4158.8441367); // TODO: create type for latitude and longitude
			expect(decoded.north).to.equal(true);
			expect(decoded.longitude).to.equal(9147.4416929);
			expect(decoded.east).to.equal(false);
			expect(decoded.gpsQuality).to.equal(GpsQualityIndicator.RTK);
			expect(decoded.satellitesInView).to.equal(13);
			expect(decoded.horizontalDOP).to.equal(0.9);
			expect(decoded.altMean).to.equal(255.747);
			expect(decoded.geoidalSeparation).to.equal(-32);
			expect(decoded.differentialAge).to.equal(1);
			expect(decoded.differentialStationId).to.equal(0);
		});
	});
});