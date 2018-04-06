import fetchUrl from "Helpers/ajaxHelper";
import { createLeagueUrl } from "Utilities/fetchingUrlsCreators";

export default function* fetchLeague(leagueId) {
    const leagueUrl = createLeagueUrl(leagueId);
    return yield fetchUrl(leagueUrl);
}
