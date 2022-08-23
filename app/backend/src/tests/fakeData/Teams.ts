import { ITeams } from "../../database/entities";

const Avai: ITeams = { id: 1, teamName: "Avaí/Kindermann" };
const Bahia: ITeams = { id: 2, teamName: 'Bahia' };
const Botafogo: ITeams = { id: 3, teamName: 'Botafogo' };
const Corinthians: ITeams = { id: 4, teamName: 'Corinthians' };
const Cruzeiro: ITeams = { id: 5, teamName: 'Cruzeiro' };
const Ferroviaria: ITeams = { id: 6, teamName: 'Ferroviária' };
const Flamengo: ITeams = { id: 7, teamName: 'Flamengo' };
const Gremio: ITeams = { id: 8, teamName: 'Grêmio' };
const Internacional: ITeams = { id: 9, teamName: 'Internacional' };
const MinasBrasilia: ITeams = { id: 10, teamName: 'Minas Brasília' };
const NapoliSC: ITeams = { id: 11, teamName: 'Napoli-SC' };
const Palmeiras: ITeams = { id: 12, teamName: 'Palmeiras' };
const RealBrasilia: ITeams = { id: 13, teamName: 'Real Brasília' };
const Santos: ITeams = { id: 14, teamName: 'Santos' };
const SaoJoseSP: ITeams = { id: 15, teamName: 'São José-SP' };
const SaoPaulo: ITeams= { id: 16, teamName: 'São Paulo' };

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