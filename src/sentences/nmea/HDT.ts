import {TalkerSentence} from "../../types/sentences/TalkerSentence";

export class HDT extends TalkerSentence {
	public static readonly ID: string = "HDT"

	constructor(data: string) {
		super(data);
	}

	public get heading(): number {
		return parseFloat(this.dataFields[0]);
	}

	public get valid(): boolean {
		return super.valid && this.dataFields.length === 2 && this.dataFields[1] === 'T';
	}
}