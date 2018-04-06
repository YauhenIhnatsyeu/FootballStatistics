import fetchUrl from "Helpers/ajaxHelper";
import { createHead2HeadUrl } from "Utilities/fetchingUrlsCreators";

export default function* fetchTeams(fixtureId) {
    const fixturesUrl = createHead2HeadUrl(fixtureId);
    return yield fetchUrl(fixturesUrl);
}
