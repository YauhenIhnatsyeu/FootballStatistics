import { fetchFixtures as getFixtures } from "Clients/footballApiClient";
import filterFixturesByDate from "Utilities/filterFixturesByDate";
import addIdsToFixtures from "Utilities/addIdsToFixtures";

export default function* fetchFixtures(teamId, dates) {
    const fixturesData = yield getFixtures(teamId);
    let { fixtures } = fixturesData;
    fixtures = filterFixturesByDate(fixtures, dates);
    addIdsToFixtures(fixtures);
    return fixtures;
}
