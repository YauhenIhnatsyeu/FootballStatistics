import getTeams from "Clients/teamsClient";
import { addIdsToTeams } from "./addIdsToTeams";

export default function* fetchTeams(leagueId) {
    const teamsData = yield getTeams(leagueId);
    const { teams } = teamsData;
    addIdsToTeams(teams);
    return teams;
}
