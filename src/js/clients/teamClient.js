import fetchUrl from "Helpers/ajaxHelper";
import { createTeamUrl } from "Utilities/fetchingUrlsCreators";

export default function* fetchTeam(teamId) {
    const teamUrl = createTeamUrl(teamId);
    return yield fetchUrl(teamUrl);
}
