import { fetchHead2Head as getHead2Head } from "Clients/footballApiClient";
import addIdsToFixtures from "Utilities/addIdsToFixtures";

export default function* fetchHead2Head(fixtureId) {
    const head2HeadData = yield getHead2Head(fixtureId);

    const { head2head: head2Head } = head2HeadData;
    const { fixtures } = head2Head;
    addIdsToFixtures(fixtures);
    delete head2Head.fixtures;

    return {
        fixtures,
        fixture: head2HeadData.fixture,
        info: head2Head,
    };
}
