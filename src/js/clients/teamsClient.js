import fetchUrl from "Helpers/ajaxHelper";
import { createTeamsUrl } from "Utilities/fetchingUrlsCreators";

export default function* fetchTeams(leagueId) {
    const teamsUrl = createTeamsUrl(leagueId);
    return yield fetchUrl(teamsUrl);
}
