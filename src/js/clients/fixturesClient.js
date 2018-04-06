import fetchUrl from "Helpers/ajaxHelper";
import { createFixturesUrl } from "Utilities/fetchingUrlsCreators";

export default function* fetchTeams(teamId) {
    const fixturesUrl = createFixturesUrl(teamId);
    return yield fetchUrl(fixturesUrl);
}
