import { ITeam } from "../../database/entities";

const Avai: ITeam = { id: 1, teamName: "Avaí/Kindermann" };
const Bahia: ITeam = { id: 2, teamName: 'Bahia' };
const Botafogo: ITeam = { id: 3, teamName: 'Botafogo' };
const Corinthians: ITeam = { id: 4, teamName: 'Corinthians' };
const Cruzeiro: ITeam = { id: 5, teamName: 'Cruzeiro' };
const Ferroviaria: ITeam = { id: 6, teamName: 'Ferroviária' };
const Flamengo: ITeam = { id: 7, teamName: 'Flamengo' };
const Gremio: ITeam = { id: 8, teamName: 'Grêmio' };
const Internacional: ITeam = { id: 9, teamName: 'Internacional' };
const MinasBrasilia: ITeam = { id: 10, teamName: 'Minas Brasília' };
const NapoliSC: ITeam = { id: 11, teamName: 'Napoli-SC' };
const Palmeiras: ITeam = { id: 12, teamName: 'Palmeiras' };
const RealBrasilia: ITeam = { id: 13, teamName: 'Real Brasília' };
const Santos: ITeam = { id: 14, teamName: 'Santos' };
const SaoJoseSP: ITeam = { id: 15, teamName: 'São José-SP' };
const SaoPaulo: ITeam= { id: 16, teamName: 'São Paulo' };

const fakeDataArr = [Avai, Bahia, Botafogo, Corinthians, Cruzeiro, Ferroviaria,
  Flamengo, Gremio, Internacional, MinasBrasilia, NapoliSC, Palmeiras, RealBrasilia,
  Santos, SaoJoseSP, SaoPaulo];

export const getAll = {
  mock: fakeDataArr,
  path: '/teams',
  response: fakeDataArr
}

export const getOne = {
  mock: Flamengo,
  path: '/teams/7',
  response: Flamengo
}