import getLeague from "Clients/leagueClient";
import { addIdsToLeagueTeams } from "Utilities/addIdsToTeams";

export default function* fetchLeague(leagueId) {
    const leagueData = yield getLeague(leagueId);
    const { standing: league } = leagueData;
    addIdsToLeagueTeams(league);
    return league;
}
