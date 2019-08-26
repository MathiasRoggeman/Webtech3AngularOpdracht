export class Overtreding {
  constructor(
    public id: string,
    public datum_vastelling_jaar: string,
    public datum_vastelling_maand: string,
    public datum_vastelling: string,
    public opnameplaats_straat: string,
    public opnameplaats_rijrichting_gaand: string,
    public opnameplaats_zone_snelheid: string,
    public aantal_passanten: string,
    public aantal_overtredingen_snelheid: string,
    public aantal_overtredingen_roodlicht: string
  ) {}
}
